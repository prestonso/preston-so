const dotCMSApi = require('./dotcms-api');

exports.sourceNodes = ({ actions, createNodeId }, configOptions) => {
    const { createNode } = actions

    // Gatsby adds a configOption that's not needed for this plugin, delete it
    delete configOptions.plugins

    // Helper function that processes a contentlet to match Gatsby's node structure
    const processContentlet = contentlet => {
        const nodeId = createNodeId(`dotcms-${contentlet.contentType}-${contentlet.inode}`)
        const nodeContent = JSON.stringify(contentlet)

        const nodeData = {
            ...contentlet,
            id: nodeId,
            parent: null,
            children: [],
            internal: {
                type: `DotCMS${contentlet.contentType}`,
                content: nodeContent,
                contentDigest: JSON.stringify(contentlet),
            },
        }

        return nodeData
    }

    // Gatsby expects sourceNodes to return a promise
    return (
        dotCMSApi.getContentlets(configOptions)
            .then(contentlets => {
                // Process the response data into a node
                contentlets.forEach((contentlet) => {
                    // Process each contentlet data to match the structure of a Gatsby node
                    const nodeData = processContentlet(contentlet)

                    // Use Gatsby's createNode helper to create a node from the node data
                    createNode(nodeData)
                })
            })
    )
}
