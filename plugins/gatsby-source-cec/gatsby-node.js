const normalize = require(`./normalize`)
const fetch = require(`./fetch`)
const _ = require(`lodash`)

exports.sourceNodes = async (
  { actions, getNode, store, cache, createNodeId },
  configOptions
) => {
  const { createNode, touchNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // plugin code goes here...
  console.log('Using CEC plugin with the options: ', configOptions)

  const { contentServer, channelToken, fromCache } = configOptions

  let entities = await fetch.all(contentServer, channelToken, fromCache)
  entities = entities.filter(e => _.isObject(e))
  entities = normalize.cleanUp(entities)
  entities = normalize.standardizeDates(entities)
  entities = normalize.normalizeDigitalAsset(entities)
  entities = normalize.moveFieldsUp(entities)
  entities = normalize.createGatsbyIds(createNodeId, entities)
  entities = await normalize.downloadMediaFiles({
    entities,
    store,
    cache,
    createNode,
    createNodeId,
    touchNode
  })
  normalize.createNodesFromEntities(entities, createNode)
}
