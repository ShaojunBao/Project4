const Category = require('../../models/category'); 

module.exports = {
    getAllCategories,
};

async function getAllCategories(req, res) {
    try {
        const categories = await Category.find().sort('name');
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}