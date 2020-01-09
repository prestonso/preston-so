const fetch = require('node-fetch')
const fs = require('fs').promises

exports.all = async (contentServer, channelToken, fromCache) => {
  try {
    await fs.mkdir('.data')
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
  const allItemsUrl = `${contentServer}/content/published/api/v1.1/items?limit=1000&totalResults=true&offset=0&orderBy=updatedDate:desc&channelToken=${channelToken}`

  const fetchItem = async id => {
    const response = await fetch(
      `${contentServer}/content/published/api/v1.1/items/${id}?channelToken=${channelToken}`
    )
    const item = await response.json()
    await fs.writeFile(
      `.data/${id}.json`,
      JSON.stringify(item, null, 2),
      'utf-8'
    )
    return item
  }
  const readItem = id => {
    return fs
      .readFile(`.data/${id}.json`, 'utf-8')
      .then(content => JSON.parse(content))
  }
  const readFromCache = async _a => {
    const fileData = await fs.readFile('.data/items.json', 'utf-8')
    const data = JSON.parse(fileData)
    return Promise.all(data.items.map(e => e.id).map(readItem))
  }

  const fetchAll = async _a => {
    // Fetch a response from the apiUrl
    const response = await fetch(allItemsUrl)
    // Parse the response as JSON
    try {
      const data = await response.json()
      console.log(JSON.stringify(data, null, 2))
      await fs.writeFile('.data/items.json', JSON.stringify(data), 'utf-8')
      return Promise.all(data.items.map(e => e.id).map(fetchItem))
    } catch (err) {
      console.log(response)
      throw err
    }
  }
  let entities = fromCache ? await readFromCache() : await fetchAll()
  return entities
}
