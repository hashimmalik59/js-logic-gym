const inventory = [
  { item: "Oil Filter", price: 1200, stock: 5 },
  { item: "Spark Plug", price: 350, stock: 2 },
  { item: "Brake Pad", price: 2500, stock: 8 },
  { item: "Engine Oil", price: 4500, stock: 1 },
];

// let total = 0;
// let lessStock = [];

// for (let i = 0; i < inventory.length; i++) {
//   total += inventory[i].price * inventory[i].stock;

//   if (inventory[i].stock < 3) {
//     let newItem = {
//       item: "URGENT " + inventory[i].item,
//       price: inventory[i].price,
//       stock: inventory[i].stock,
//     };
//     lessStock.push(newItem);
//   }
// }

// console.log(total);

const total = inventory.reduce(
  (acc, currVal) => acc + currVal.price * currVal.stock,
  0,
);
console.log(total);

const newItem = inventory
  .filter((item) => item.stock < 3)
  .map((item) => "URGENT " + item.item);

console.log(newItem);
