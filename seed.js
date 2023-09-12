require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Sandwiches', sortOrder: 10},
    {name: 'Seafood', sortOrder: 20},
    {name: 'Mexican', sortOrder: 30},
    {name: 'Italian', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger', imagePath:'/images/items/Hamburger.png', category: categories[0], price: 5.95, isFeatured: true},
    {name: 'Turkey Sandwich', imagePath: '/images/items/turkeyS.png', category: categories[0], price: 6.95, isFeatured: false},
    {name: 'Hot Dog', imagePath: '/images/items/hotdog.png', category: categories[0], price: 3.95, isFeatured: false},
    {name: 'Crab Plate', imagePath: '/images/items/crab.png', category: categories[1], price: 14.95, isFeatured: true},
    {name: 'Fried Shrimp', imagePath: '/images/items/friedShrimp.png', category: categories[1], price: 13.95, isFeatured: false},
    {name: 'Whole Lobster', imagePath: '/images/items/wholeLob.png', category: categories[1], price: 25.95, isFeatured: false},
    {name: 'Taco', imagePath: '/images/items/taco.png', category: categories[2], price: 1.95, isFeatured: true},
    {name: 'Burrito', imagePath: '/images/items/burrito.png', category: categories[2], price: 4.95, isFeatured: false},
    {name: 'Pizza Slice', imagePath: '/images/items/pizza.png', category: categories[3], price: 3.95, isFeatured: false},
    {name: 'Spaghetti', imagePath: '/images/items/spaghetti.png', category: categories[3], price: 7.95, isFeatured: true},
    {name: 'Garlic Bread', imagePath: '/images/items/garlic.png', category: categories[3], price: 1.95, isFeatured: false},
    {name: 'French Fries', imagePath: '/images/items/fries.png', category: categories[4], price: 2.95, isFeatured: false},
    {name: 'Green Salad', imagePath: '/images/items/salad.png', category: categories[4], price: 3.95, isFeatured: false},
    {name: 'Ice Cream', imagePath: '/images/items/iceCream.png', category: categories[5], price: 1.95, isFeatured: false},
    {name: 'Cup Cake', imagePath: '/images/items/cake.png', category: categories[5], price: 0.95, isFeatured: false},
    {name: 'Custard', imagePath: '/images/items/custard.png', category: categories[5], price: 2.95, isFeatured: false},
    {name: 'Strawberry Shortcake', imagePath: '/images/items/strawberry.png', category: categories[5], price: 3.95, isFeatured: true},
    {name: 'Milk', imagePath: '/images/items/milk.png', category: categories[6], price: 0.95, isFeatured: false},
    {name: 'Coffee', imagePath: '/images/items/coffee.png', category: categories[6], price: 0.95, isFeatured: false},
    {name: 'Mai Tai', imagePath: '/images/items/mai.png', category: categories[6], price: 8.95, isFeatured: true},
    {name: 'Beer', imagePath: '/images/items/beer.png', category: categories[6], price: 3.95, isFeatured: false},
    {name: 'Wine', imagePath: '/images/items/wine.png', category: categories[6], price: 7.95, isFeatured: false},
  ]);

  console.log(items)

  process.exit();
})();