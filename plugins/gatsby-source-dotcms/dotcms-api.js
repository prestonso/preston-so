const fetch = require('node-fetch')

class DotCMSApi {
    constructor(options) {
        this.options = options
    }

    getBaseUrl() {
        return `${this.options.host.protocol}://${this.options.host.url}`
    }

    getContentletsByContentType(contentType) {
        const getUrl = () => {
            return `${this.getBaseUrl()}/api/content/render/false/query/+contentType:${contentType}%20+(conhost:${
                this.options.host.identifier
            }%20conhost:SYSTEM_HOST)%20+languageId:1%20+deleted:false%20+working:true/orderby/modDate%20desc/limit/25`
        }

        return fetch(getUrl())
            .then(data => data.json())
            .then(data => data.contentlets)
            .then(contentlets => {
                contentlets.forEach(contentlet => {
                    contentlet.contentType = contentType
                })
                return contentlets
            })
    }

    async getContentTypesVariables() {
        const getUrl = () => {
            return `${this.getBaseUrl()}/api/v1/contenttype?per_page=100`
        }

        return fetch(getUrl(), {
            headers: {
                DOTAUTH: Buffer.from(
                    `${this.options.credentials.email}:${this.options.credentials.password}`
                ).toString('base64'),
            },
        })
            .then(data => data.json())
            .then(contentTypes => contentTypes.entity.map(contentType => contentType.variable))
    }

    async getData() {
        const contentlets = await this.getContentTypesVariables().then(variables => {
            return variables.map(async variable => {
                const data = await this.getContentletsByContentType(variable)
                return data
            })
        })

        return Promise.all(contentlets)
    }
}

exports.getContentlets = async configOptions => {
    const dotCMSApi = new DotCMSApi(configOptions)

    return dotCMSApi.getData().then(contentTypesContentlets => {
        // Flatten nested array
        return [].concat.apply([], contentTypesContentlets)
    })
}
