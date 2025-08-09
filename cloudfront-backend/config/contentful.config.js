const contentful = require('contentful');
const contentfulManagementClient = require('contentful-management');


const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN
})

const managementClient = contentfulManagementClient.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESSTOKEN
});

module.exports = { client, managementClient };