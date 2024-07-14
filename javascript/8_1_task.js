// coding challenge

// const data = [
//   { id: 1, name: 'Ram' },
//   { id: 3, name: 'Shyam' },
//   { id: 5, name: 'Hari' },
//   { id: 2, name: 'Rahul' },
//   { id: 4, name: 'Yujan' }
// ]

// const oddIdElement = data.filter((d) => {
//   return d.id % 2 != 0;
// })
// console.log(oddIdElement);

// const product = [
//   { id: 1, productName: 'Red Shirt', productPrice: 900 },
//   { id: 2, productName: 'Yellow Shirt', productPrice: 600 },
//   { id: 3, productName: 'Green Shirt', productPrice: 2300 },
//   { id: 4, productName: 'Black Shirt', productPrice: 550 }
// ]

// const filterProducts = product.filter((p) => {
//   return p.productPrice >= 200 && p.productPrice <= 600
// })
// console.log(filterProducts)

// const newData = data.map((e) => {
//   return { ...e, address: 'Kathmandu' }
// })
// console.log(newData);
// console.log(data);

const word = 'ELEPHANT'
// const word = 'MISSISSIPPI'


// {M:1, I:4, S:4, P:2} 


// let output = (word) => {

//   if (typeof (word) === String) {
//     let newWord = [...word];
//     return newWord.reduce((a, e) => {
//       if (a[e]) {
//         a[e]++;
//       } else {
//         a[e] = 1;
//       }
//       return a;
//     }, {})
//   } else {
//     return "please input a string";
//   }

// }
// console.log(output(6));

// const student = [
//   { id: 1, name: 'John', score: [90, 80, 77] },
//   { id: 2, name: 'Ram', score: [97, 85, 70] },
//   { id: 3, name: 'Sita', score: [90, 90, 77] },
//   { id: 4, name: 'Laxman', score: [71, 70, 69] },
//   { id: 5, name: 'Shyam', score: [70, 80, 77] }

// ]

// // {John:}

// let newStudent = student.reduce((a, e) => {
//   let average = e.score.reduce((acc, num) => acc + num, 0) / e.score.length;
//   a[e.name] = average;
//   return a;
// }, {})
// console.log(newStudent);

let data = [
  { book: "Book1", author: "Author2" },
  { book: "Book2", author: "Author2" },
  { book: "Book3", author: "Author1" },
  { book: "Book4", author: "Author3" },
  { book: "Book5", author: "Author2" },
  { book: "Book6", author: "Author1" }
]

// {Author1:2, Author2: 2, Author3: 2}

// let newData = data.reduce((acc, cur) => {
//   if (acc[cur.author]) {
//     acc[cur.author]++;
//   } else {
//     acc[cur.author] = 1
//   }
//   return acc;
// }, {})

// console.log(newData);

let newData3 = data.reduce((acc, cur) => {
  acc[cur.author] ? acc[cur.author]++ : acc[cur.author] = 1
  return acc;
}, {})

let newData2 = data.reduce((acc, cur) => {
  acc[cur.author] = (acc[cur.author] || 0) + 1;
  return acc;
}, {})

console.log(newData2);





