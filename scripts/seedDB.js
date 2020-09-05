const mongoose = require("mongoose");
const db = require("../models");

// Handling api keys
require('dotenv').config();

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://ral-mkp:thePassword20!@cluster0.bazsf.mongodb.net/marketplace?retryWrites=true&w=majority"
);

const consumerSeed = [
  {
    userName: "Consumer01",
    firstName: "Jorge",
    lastName: "Guzman",
    password: "12345678",
    consumerAddress: "Estonia 1234, Europe",
    email: "jorge@bootcamp.com",
    mobile: "5555555555",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
    paymentMethod: "Credit Card",
    memberSince: new Date(Date.now())
  },
  {
    userName: "Consumer02",
    firstName: "Rodrigo",
    lastName: "Rosas",
    password: "12345678",
    consumerAddress: "Mexico City 1234, Mexico",
    email: "rodrigo@bootcamp.com",
    mobile: "5555555555",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
    paymentMethod: "Credit Card",
    memberSince: new Date(Date.now())
  },
  {
    userName: "Consumer03",
    firstName: "Raul",
    lastName: "Alarcon",
    password: "12345678",
    consumerAddress: "Puebla 1234, Mexico",
    email: "raul@bootcamp.com",
    mobile: "5555555555",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXpPVKw1sysj69NToCVHwWuu_1XJdZjsjeA&usqp=CAU",
    paymentMethod: "Credit Card",
    memberSince: new Date(Date.now())
  },
];

db.Consumer
  .remove({})
  .then(() => db.Consumer.collection.insertMany(consumerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
    sku: "293850",
    productName: "portafolios",
    categoryName: "Office",
    price: 1300,
    stock: 4,
    description: "de piel vacuno, color negro",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEa5U5J5af8aROIP9s6uH9QeeNoVZQnYVwyA&usqp=CAU",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEa5U5J5af8aROIP9s6uH9QeeNoVZQnYVwyA&usqp=CAU",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEa5U5J5af8aROIP9s6uH9QeeNoVZQnYVwyA&usqp=CAU"
  },
  {
    sku: "293853",
    productName: "Balon",
    categoryName: "Sports",
    price: 205,
    stock: 29,
    description: "de futbol profesional",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_17uHLpFiVoCOm4bFVwxZxVrUZjKKckUU2w&usqp=CAU",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_17uHLpFiVoCOm4bFVwxZxVrUZjKKckUU2w&usqp=CAU",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_17uHLpFiVoCOm4bFVwxZxVrUZjKKckUU2w&usqp=CAU"
  },
  {
    sku: "293444",
    productName: "Balon4",
    categoryName: "Sports4",
    price: 444,
    stock: 44,
    description: "de futbol profesional",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_17uHLpFiVoCOm4bFVwxZxVrUZjKKckUU2w&usqp=CAU",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_17uHLpFiVoCOm4bFVwxZxVrUZjKKckUU2w&usqp=CAU",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_17uHLpFiVoCOm4bFVwxZxVrUZjKKckUU2w&usqp=CAU"
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
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjpRw9RtTxXffKQXC5HOqnKQDNXYQgdCk7hdcnl_BVGfYhGhvh6BNe2LAuVdLEXhWz0EdRxeY&usqp=CAc",
    picture2: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjpRw9RtTxXffKQXC5HOqnKQDNXYQgdCk7hdcnl_BVGfYhGhvh6BNe2LAuVdLEXhWz0EdRxeY&usqp=CAc",
    picture3: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjpRw9RtTxXffKQXC5HOqnKQDNXYQgdCk7hdcnl_BVGfYhGhvh6BNe2LAuVdLEXhWz0EdRxeY&usqp=CAc",
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

const storeSeed = [
  {
    storeName: "Tiendita 1",
    storePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQicAo97U0icM_ocj1eWsWtLlfZHEZ1trD_UQ&usqp=CAU"
  },
  {
    storeName: "Miscelania El Don",
    storePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF063Ku9d_PCRTbwHYkfD-TabitynXyDlFGw&usqp=CAU"
  },
];

db.Store
  .remove({})
  .then(() => db.Store.collection.insertMany(storeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const sellerSeed = [
  {
    userName: "juanito2000",
    firstName: "Juan",
    lastName: "Perez",
    password: "12345678",
    email: "juanito@sales.com",
    mobile: "5555555555",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyCpcXIQts51MRPP9o97YCLI6qafLe2g4mUg&usqp=CAU",
  },
  {
    userName: "sandra2000",
    firstName: "Sandra",
    lastName: "Perez",
    password: "12345678",
    email: "sandra@sales.com",
    mobile: "5555555555",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTnAqZ-8Ac-uPSkP8uTgOIrhYBUp83nrOefA&usqp=CAU",
  },
];

db.Seller
  .remove({})
  .then(() => db.Seller.collection.insertMany(sellerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const orderSeed = [
  {
    orderStatus: "Paid",
    totalAmount: 234
  },
  {
    orderStatus: "Shoping-Cart",
    totalAmount: 111
  }, {
    orderStatus: "Completed",
    totalAmount: 443
  }, {
    orderStatus: "Placed Not Paid",
    totalAmount: 667
  },
];

db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const categorySeed = [
  {
    categoryName: "Sports"
  },
  {
    categoryName: "Office"
  },
  {
    categoryName: "Home"
  },
  {
    categoryName: "Clothing"
  },
  {
    categoryName: "Beauty"
  },
  {
    categoryName: "Accesories"
  }
];

db.Category
  .remove({})
  .then(() => db.Category.collection.insertMany(categorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });