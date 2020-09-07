const mongoose = require("mongoose");
const db = require("../models");

// Handling api keys
require('dotenv').config();

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// const consumerSeed = [
//   {
//     userName: "Consumer01",
//     firstName: "Jorge",
//     lastName: "Guzman",
//     password: "12345678",
//     consumerAddress: "Estonia 1234, Europe",
//     email: "jorge@bootcamp.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
//     paymentMethod: "Credit Card",
//     memberSince: new Date(Date.now())
//   },
//   {
//     userName: "Consumer02",
//     firstName: "Rodrigo",
//     lastName: "Rosas",
//     password: "12345678",
//     consumerAddress: "Mexico City 1234, Mexico",
//     email: "rodrigo@bootcamp.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
//     paymentMethod: "Credit Card",
//     memberSince: new Date(Date.now())
//   },
//   {
//     userName: "Consumer03",
//     firstName: "Raul",
//     lastName: "Alarcon",
//     password: "12345678",
//     consumerAddress: "Puebla 1234, Mexico",
//     email: "raul@bootcamp.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
//     paymentMethod: "Credit Card",
//     memberSince: new Date(Date.now())
//   },
// ];

// db.Consumer
//   .remove({})
//   .then(() => db.Consumer.collection.insertMany(consumerSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const productSeed = [
  {
    sku: "293847",
    productName: "Bicicleta",
    categoryName: "Sports",
    price: 20500,
    stock: 9,
    description: "2 ruedas con canastilla",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuqN7wizjg97CwznHFpOAwXk77TQfoPSCCw&usqp=CAU"
  },
  {
    "sku": "223412",
    "productName": "Samsung Galaxy Note 20 256GB",
    "categoryName": "Technology",
    "price": 23000,
    "stock": 20,
    "description": "SAMSUNG Galaxy Note 20 256GB 8GB RAM SM-N980F/DS 6.7 64MP Mystic Gray (Gris)",
    "picture": "https://images-na.ssl-images-amazon.com/images/I/61wOlKW64mL._AC_SL1040_.jpg",
    "picture2": "https://images-na.ssl-images-amazon.com/images/I/61wOlKW64mL._AC_SL1040_.jpg",
    "picture3": "https://images-na.ssl-images-amazon.com/images/I/61wOlKW64mL._AC_SL1040_.jpg"
  },
  {
    sku: "293853",
    productName: "Balon Basketball",
    categoryName: "Sports",
    price: 205,
    stock: 29,
    description: "Basketball profesional",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg",
    picture2: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg",
    picture3: "https://images-na.ssl-images-amazon.com/images/I/71GCU0ansNL._AC_SL1001_.jpg"
  },
  {
    sku: "293444",
    productName: "Balon Adidas Telstar",
    categoryName: "Sports",
    price: 444,
    stock: 44,
    description: "de futbol profesional",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg",
    picture2: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg",
    picture3: "https://images-na.ssl-images-amazon.com/images/I/71dBeCPtMmL._AC_SL1500_.jpg"
  },
  {
    categoryName: "Sports",
    description: "Yankees Sweater",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpLANJQep1g1BRPAhWoEPWsavA-pfSwOiR9eB5ZfgT5bdEzweA4tyFIsa8kY&usqp=CAc",
    price: 1789,
    productName: "NY Yankees Sweater",
    sku: "1029455",
    stock: 22
  },
  {
    categoryName: "Sports",
    description: "NY Yankees hat for adults",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
    picture2: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
    picture3: "https://images-na.ssl-images-amazon.com/images/I/71vPr8QApwL._AC_SL1500_.jpg",
    price: 564,
    productName: "Yankees Hat",
    sku: "6473892",
    stock: 56,
  },
  {
    categoryName: "Sports",
    description: "NY Yankees jersey for adults",
    picture: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
    picture2: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
    picture3: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3811000/altimages/ff_3811588-f42e9430f73c9faccba0alt1_full.jpg&w=900",
    price: 1234,
    productName: "Yankees Jersey",
    sku: "6436657",
    stock: 34,
  },
  {
    categoryName: "Travel",
    description: "nice luggage for baseball lovers travels",
    picture: "https://cdn.shopify.com/s/files/1/0433/6825/products/MLB_Yankees_21_frontqrt_b4947897-849d-4675-8f68-9e46cb6fb641_800x.jpg?v=1560973035",
    picture2: "https://cdn.shopify.com/s/files/1/0433/6825/products/MLB_Yankees_21_frontqrt_b4947897-849d-4675-8f68-9e46cb6fb641_800x.jpg?v=1560973035",
    picture3: "https://cdn.shopify.com/s/files/1/0433/6825/products/MLB_Yankees_21_frontqrt_b4947897-849d-4675-8f68-9e46cb6fb641_800x.jpg?v=1560973035",
    price: 2987,
    productName: "Yankees Lugggage",
    sku: "467577657890",
    stock: 11,
  }
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// const storeSeed = [
//   {
//     storeName: "Tiendita 1",
//     storePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQicAo97U0icM_ocj1eWsWtLlfZHEZ1trD_UQ&usqp=CAU"
//   },
//   {
//     storeName: "Miscelania El Don",
//     storePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF063Ku9d_PCRTbwHYkfD-TabitynXyDlFGw&usqp=CAU"
//   },
// ];

// db.Store
//   .remove({})
//   .then(() => db.Store.collection.insertMany(storeSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// const sellerSeed = [
//   {
//     userName: "juanito2000",
//     firstName: "Juan",
//     lastName: "Perez",
//     password: "12345678",
//     email: "juanito@sales.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyCpcXIQts51MRPP9o97YCLI6qafLe2g4mUg&usqp=CAU",
//   },
//   {
//     userName: "sandra2000",
//     firstName: "Sandra",
//     lastName: "Perez",
//     password: "12345678",
//     email: "sandra@sales.com",
//     mobile: "5555555555",
//     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTnAqZ-8Ac-uPSkP8uTgOIrhYBUp83nrOefA&usqp=CAU",
//   },
// ];

// db.Seller
//   .remove({})
//   .then(() => db.Seller.collection.insertMany(sellerSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// const orderSeed = [
//   {
//     orderStatus: "Paid",
//     totalAmount: 234
//   },
//   {
//     orderStatus: "Shoping-Cart",
//     totalAmount: 111
//   }, {
//     orderStatus: "Completed",
//     totalAmount: 443
//   }, {
//     orderStatus: "Placed Not Paid",
//     totalAmount: 667
//   },
// ];

// db.Order
//   .remove({})
//   .then(() => db.Order.collection.insertMany(orderSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// const categorySeed = [
//   {
//     categoryName: "Sports"
//   },
//   {
//     categoryName: "Office"
//   },
//   {
//     categoryName: "Home"
//   },
//   {
//     categoryName: "Clothing"
//   },
//   {
//     categoryName: "Beauty"
//   },
//   {
//     categoryName: "Accesories"
//   }
// ];

// db.Category
//   .remove({})
//   .then(() => db.Category.collection.insertMany(categorySeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });