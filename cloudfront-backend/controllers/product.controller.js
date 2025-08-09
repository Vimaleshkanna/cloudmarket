const { client } = require('../config/contentful.config');
const logger = require('../utils/logger');


const listProducts = async (req, res) => {
    try {

        let productArr = [];
        const productDetails = await client.getEntries({
            content_type: 'product',
        });

        const resultObj = {};
        resultObj.total = productDetails?.total;
        productDetails?.items.forEach(item => {
            productArr.push(item.fields)
        })

        resultObj.items = productArr;

        return res.status(200).json({
            data: resultObj
        });

    } catch (err) {
        logger.error('Product list error :: ' + error);
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    listProducts
}