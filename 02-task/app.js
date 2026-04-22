const rawCustomers = [
  { id: 1, name: "  hashim  ", email: "HM@gmail.com  ", balance: 500 },
  { id: 2, name: "ali khan", email: "ali@yahoo.com", balance: 0 },
  { id: 3, name: "  ZAIN malik", email: "zain@outlook.com ", balance: 1200 },
  { id: 4, name: "SARA", email: "sara@gmail.com", balance: 3000 },
  { id: 5, name: "unknown", email: "test@test.com", balance: 0 },
];

// let newCustomers = [];

// let vipCustomer = rawCustomers[0];

// for (let i = 0; i < rawCustomers.length; i++) {
//   if (rawCustomers[i].balance > 0) {
//     let cleanData = {
//       id: rawCustomers[i].id,
//       name:
//         rawCustomers[i].name.trim().charAt(0).toUpperCase() +
//         rawCustomers[i].name.trim().slice(1).toLowerCase(),
//       email: rawCustomers[i].email.trim().toLowerCase(),
//       balance: rawCustomers[i].balance,
//     };
//     newCustomers.push(cleanData);
//     if (rawCustomers[i].balance > vipCustomer.balance) {
//       vipCustomer = rawCustomers[i];
//     }
//   }
// }
// console.log(
//   `${vipCustomer.name} is a VIP customer because she is so rich ${vipCustomer.balance}, but InshAllah soon Hashim Malik is more richer then her.`,
// );
// console.log(newCustomers);

const richCustomer = rawCustomers
  .filter((item) => item.balance > 0)
  .map((item) => {
    return (newItem = {
      id: item.id,
      name:
        item.name.trim().charAt(0).toUpperCase() +
        item.name.trim().toLowerCase().slice(1),
      email: item.email.trim().toLowerCase(),
      balance: item.balance,
    });
  })
  .reduce((acc, currVal) => (currVal.balance > acc.balance ? currVal : acc));
console.log(richCustomer);
