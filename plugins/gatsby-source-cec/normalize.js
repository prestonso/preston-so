const _ = require('lodash')
const crypto = require('crypto')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const conflictFieldPrefix = `cec_`

// restrictedNodeFields from here https://www.gatsbyjs.org/docs/node-interface/
const restrictedNodeFields = [`id`, `children`, `parent`, `fields`, `internal`]

const digest = str =>
  crypto
    .createHash(`md5`)
    .update(str)
    .digest(`hex`)
/*
const createRendition = rendition => {
  const renditionId = createNodeId(`oraclecec-DigitalAsset-${item.id}-${rendition.name}`)
  const renditionData = {
    id: renditionId,
    name: rendition.name,
    renditionType: rendition.type,
    parent: null,
    children: [],
    internal: {
      type: 'Rendition',
      mediaType: item.fields.mimeType,
      content: {
        name: rendition.name,
        renditionType: rendition.type
      },
      contentDigest: JSON.stringify(renditions)
    }
  }
  createNode(renditionData)
}
const processDigitalAsset = () => {
  const { native, renditions, ...other } = fields
  const nodeData = Object.assign(
    {},
    base,
    {
      native: native.links
        .filter(e => e.rel === 'self')
        .reduce((aggr, e) => e.href, '')
    },
    { renditions: fields.renditions },
    other,
    {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'DigitalAsset',
        mediaType: fields.mimeType,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    }
  )
  console.log(nodeData)

  return nodeData
}
*/
exports.cleanUp = entities =>
  entities.map(item => {
    delete item.links
    delete item.createdDate
    return item
  })

// Standardize dates on ISO 8601 version.
exports.standardizeDates = entities => {
  const isDate = v =>
    _.isObject(v) && _.isString(v.value) && _.isString(v.timezone)

  const fixDate = (aggr, kv) => {
    const [key, value] = kv
    if (_.isArray(value)) {
      aggr[key] = value.map(v => (isDate(v) ? v.value : v))
    } else if (isDate(value)) {
      aggr[key] = value.value
    } else {
      aggr[key] = value
    }
    return aggr
  }
  return entities.map(e => {
    // if value has value && timezone
    e.updatedDate = e.updatedDate.value
    // handle field values
    e.fields = Object.entries(e.fields).reduce(fixDate, {})
    return e
  })
}
exports.normalizeDigitalAsset = entities =>
  entities.map(e => {
    if (e.type === 'DigitalAsset') {
      // console.log(e.id, Object.keys(e.fields))
      e.fields.native = e.fields.native.links
        .filter(e => e.rel === 'self')
        .reduce((aggr, f) => f.href, '')
    }
    return e
  })

exports.createGatsbyIds = (createNodeId, entities) =>
  entities.map(e => {
    e.cecId = e.id
    if (e.type) {
      e.id = createNodeId(`oraclecec-${e.type}-${e.id}`)
    } else {
      e.id = createNodeId(`oraclecec-${e.id}`)
    }
    return e
  })

exports.moveFieldsUp = entities =>
  entities.map(({ fields, ...other }) => ({ ...other, ...fields }))

const extractFormats = (formats, mediaFiles) => {
  return formats.map(format => {
    const { links, ...other } = format
    const { href, mediaType } = links
      .filter(link => link.rel === 'self')
      .reduce((aggr, { href, mediaType }) => ({ href, mediaType }), {})
    return { ...other, href, mediaType }
  })
}
const extractFormats_old = (rendition, children, childrenNodes, mediaFiles) => {
  rendition.formats
    .map(format => {
      const { links, ...other } = format
      const { href, mediaType } = links
        .filter(link => link.rel === 'self')
        .reduce((aggr, { href, mediaType }) => ({ href, mediaType }), {})
      return { ...other, href, mediaType }
    })
    .forEach(child => {
      const id = `${rendition.id}-${child.format}`
      let node = {
        id: id,
        ...child,
        parent: rendition.id,
        internal: {
          type: 'RenditionFormat',
          contentDigest: digest(JSON.stringify({ child })),
          mediaType: child.format
        }
      }
      mediaFiles.push({ id, href: child.href, mediaType: child.mediaType })
      children.push(id)
      childrenNodes.unshift(node)
    })
}
const extractRenditions = (item, children, childrenNodes) => {
  // item['rendition___NODE'] =
  item.renditions = item.renditions.reduce((aggr, rendition) => {
    const { name, type, formats } = rendition
    aggr[name] = { type, formats: extractFormats(formats) }
    return aggr
  }, {})
  // delete item.renditions
}
const extractRenditions_old = (item, children, childrenNodes, mediaFiles) => {
  // item['rendition___NODE'] =
  item.renditions.map(rendition => {
    const { name, type, formats } = rendition
    rendition.id = `${item.id}-${name}`
    const formatChildren = []
    extractFormats(rendition, formatChildren, childrenNodes, mediaFiles)
    let node = {
      id: rendition.id,
      name,
      children: formatChildren,
      parent: item.id,
      internal: {
        type: 'Rendition',
        contentDigest: digest(JSON.stringify({ name, type, formats }))
      }
    }
    children.push(rendition.id)
    childrenNodes.unshift(node)
    return node.id
  })
  delete item.renditions
}
const stringify = o => JSON.stringify(o)
const pretty = o => JSON.stringify(o, null, 2)

const isReference = o => _.isObject(o) && _.isString(o.id) && _.isString(o.type)
const extractReferences = (item, entities) => {
  const findId = o => {
    // console.log('find ', pretty(o))
    let found = _.find(entities, e => e.cecId === o.id)
    // console.log('found ', pretty(found))

    return found && found.id ? found.id : null
  }
  Object.entries(item).forEach(([key, value]) => {
    if (_.isArray(value)) {
      // are all items references TODO, maybe filter when this condition does not hold
      if (value.reduce((aggr, o) => aggr && isReference(o), true)) {
        item[`${key}___NODE`] = value
          .map(o => findId(o))
          .filter(o => o !== null)
        // console.log(item[`${key}___NODE`])
        delete item[key]
      }
    } else if (isReference(value)) {
      item[`${key}___NODE`] = findId(value)
      if (item[`${key}___NODE`]) delete item[key]
    }
  })
}

exports.downloadMediaFiles = async ({
  entities,
  store,
  cache,
  createNode,
  createNodeId,
  touchNode
}) =>
  Promise.all(
    entities.map(async e => {
      if (e.type === 'DigitalAsset') {
        let fileNodeID
        const mediaDataCacheKey = `cec-media-${e.id}`
        const cacheMediaData = await cache.get(mediaDataCacheKey)
        // console.log('cachedMedia', pretty(cacheMediaData))
        // If we have cached media data and it wasn't modified, reuse
        // previously created file node to not try to redownload
        if (cacheMediaData && e.updatedDate === cacheMediaData.updatedDate) {
          fileNodeID = cacheMediaData.fileNodeID
          touchNode({ nodeId: cacheMediaData.fileNodeID })
        }

        // If we don't have cached data, download the file
        if (!fileNodeID) {
          try {
            console.log(`downloading mediaFile ${e.native}`)
            const fileNode = await createRemoteFileNode({
              url: e.native,
              store,
              cache,
              createNode,
              createNodeId
            })
            // console.log(`fileNode mediaFile`, pretty(fileNode))

            if (fileNode) {
              fileNodeID = fileNode.id

              await cache.set(mediaDataCacheKey, {
                fileNodeID,
                updatedDate: e.updatedDate
              })
            }
          } catch (e) {
            // Ignore
          }
        }

        if (fileNodeID) {
          e.localFile___NODE = fileNodeID
          // delete e.media_details.sizes
        }
      }
      return e
    })
  )

exports.createNodesFromEntities = (entities, createNode) => {
  entities.forEach(e => {
    // console.log(Object.keys(e))
    let { type, ...entity } = e // eslint-disable-line no-unused-vars

    let children = []
    let childrenNodes = []
    if (type === 'DigitalAsset') {
      extractRenditions(entity, children, childrenNodes)
    } else {
      extractReferences(entity, entities)
    }
    let node = {
      ...entity,
      children,
      parent: null,
      internal: {
        type,
        contentDigest: digest(JSON.stringify(entity))
      }
    }
    createNode(node)
    childrenNodes.forEach(child => {
      createNode(child)
    })
  })
}
