const Item = require('../../models/item');

module.exports={
    index,
    show,
    getFeatured
};

async function index(req,res) {
    const items = await Item.find({}).sort('name').populate('category').exec();
    items.sort((a,b) => a.category.sortOrder - b.category.sortOrder);
    res.json(items);
}

async function show(req, res) {
    const item = await Item.findById(req.params.id);
    res.json(item);
}

async function getFeatured(req, res) {
    const featuredItems = await Item.find({isFeatured: true}).populate('category').exec();
    console.log(featuredItems);
    res.json(featuredItems);
}


    