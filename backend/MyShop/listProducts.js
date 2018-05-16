var faker = require("faker");

//Create fake products and prices
var products = [];
for (var i = 0; i < 10; i++) {
  products[i] = { name: faker.commerce.productName(),
                  price: faker.commerce.price()
                };
}
//Loop through and print product name and price
products.forEach(function(p) {
  console.log(p.name + " - £" + p.price);
});
