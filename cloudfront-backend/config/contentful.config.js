const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN
})

module.exports = client;