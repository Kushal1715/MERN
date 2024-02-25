//Object:- It is an important non-primitive datatype in Javascript. Objects are special data structure that can hold values in well ordered manner. It can as well hold other complex entities. Objects hold data in key - value pair.
//Syntax: variableType identifier = {key:value, key2:value2, ....,keyN, valueN}

//example object:

// const Person = { //must be in pascal case
//   firstName: "John",
//   lastName: "Doe",
//   gender: "M",
//   address: {
//     temporary: {
//       street: "Koteshwor-32",
//       city: "KTM",
//       Province: 'Bagmati',
//       country: 'Nepal'
//     },
//     permanent: {
//       street: "Bhadrapur-06",
//       city: "Jhapa",
//       Province: '1',
//       country: 'Nepal'
//     }
//   },
//   isMarried: false,
//   birthYear: 1998,
//   age: (currentYear) => currentYear - Person.birthYear
// }

// //here, firstName is property and age is method.
// //John Doe is x years old and He is not married.

// console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender === 'M' ? 'He' : 'She'} is ${Person.isMarried ? '' : 'not'} married`)

// //Accessing values from an object:
// //There are two ways to access value from an object.
// //1. Dot Notation
// console.log(Person.firstName) // "John"

// //2. Bracket Notation
// console.log(Person['lastName']) //"Doe"


// console.log(Person.address.temporary.Province) //"Bagmati"

// console.log(Person['address']['permanent']['street']) //"Bhadrapur - 06"

// const Nepal = {
//   common: "Nepal",
//   official: "Federal Democratic Republic of Nepal",
//   nativeName: {
//     nep: {
//       official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
//       common: "नेपाल"
//     }
//   },
//   startOfWeek: "sunday",
//   capitalInfo: {
//     latlng: [
//       27.72,
//       85.32
//     ]
//   }

// }
// // the latitude of asdfasdf is
// console.log(`The latitude of ${Nepal.nativeName.nep.official} is ${Nepal.capitalInfo.latlng[0]} and the longitude is ${Nepal.capitalInfo.latlng[1]}`);

// console.log(`The latitude of ${Nepal['nativeName']['nep']['official']} is ${Nepal['capitalInfo']['latlng'][0]} and the longitude is ${Nepal['capitalInfo']['latlng'][1]}`);


// const Car = {
//   name: 'Ford Mustang',
//   production: 'March 1964 - present',
//   bodyStyle: [
//     '2-door coupe',
//     '3-door hatchback',
//     '2-door fastback',
//     '2-door convertible'],
//   engineAndTransmission: {
//     engineType: "5.0L Ti-VCT V8 Engine",
//     displacement: "4999cc",
//     noOfCylinders: 8,
//     valvesPerCylinder: 4,
//     transmissionType: 'manual',

//   },
//   fuelAndPerformance: {
//     fuelType: 'petrol'
//   },
//   dimensionsAndCapacity: {
//     seatingCapacity: 5
//   }
// }

// const MobileBrand = {
//   tradeName: 'Xiaomi',
//   nativeName: '小米集团',
//   romanizedName: 'Xiǎomǐ',
//   companyType: 'public',
//   industry: [
//     'Consumer electronics',
//     'Computer hardware',
//     'Automotive'
//   ],
//   founded: '6 April 2010; 13 years ago',
//   founder: ['Lei Jun', 'Lin Bin '],
//   headquarters: {
//     country: 'China',
//     city: 'Beijing',
//     district: 'Haidian'
//   },
//   areasServed: 'worldwide',
//   products: [
//     'Mobile phones',
//     'Personal computers',
//     'IoT',
//     'Electric vehicles']
// }


// There are two ways to create objects dynamically in JS.
// 1. Factory function
// 2. Constructor function

// 1. Factory function
// const Product = (productName, productPrice, productDescription, countInStock, paymentBool) => {
//   return {
//     product_name: productName,
//     product_price: productPrice,
//     product_description: productDescription,
//     count_in_stock: countInStock,
//     payment_message: () => paymentBool ? console.log("payment has been received") : console.log("please make a payment")
//   }
// }

// const mobile = Product('Xaomi', 35000, 'dafdsfasdf', 5, true);
// mobile.payment_message();

// 2. Constructor function
// function AddProduct(productName, productPrice, productDescription, countInStock, paymentBool) {
//   this.product_name = productName
//   this.product_price = productPrice
//   this.product_description = productDescription
//   this.count_in_stock = countInStock
//   this.payment_message = () => paymentBool ? console.log("payment has been received") : console.log("please make a payment")
// }

// const shirt = new AddProduct("Denim Shirt", 2500, 'asdfasdfasf', 5, true);
// console.log(shirt);
// shirt.payment_message();



//Object Coding Challenge #1
// Create a bank account object of a customer where he/she has his/her firstName, lastName, accountNo., currentBalance
// this object should also have method for fund deposit, fund withdrawal and fund Check.

// Incase of fund deposit:
// Step: add amount that has been deposited with the current balance and show message

// Incase of fund withdrawal:
// Step1: Check if there's sufficient balance in the account
// Step2: If there's sufficient balance then deduct amount from currentBalance and show message.
// If there's no sufficient balance just show the message

function BankAccount(firstName, lastName, accountNo, currentBalance) {
  this.first_name = firstName
  this.last_name = lastName
  this.account_no = accountNo
  this.current_balance = currentBalance
  this.fundDeposit = (depositAmount) => {
    totalAmount = depositAmount + currentBalance;
    console.log(`Dear ${firstName}, Your ${accountNo} Credited by NPR ${depositAmount}, Your new balance is ${totalAmount}`);
  }
  this.fundWithdrawal = (withDrawAmount) => {
    if (currentBalance > withDrawAmount) {
      totalAmount = totalAmount - withDrawAmount;
      console.log(`Dear ${firstName}, Your ${accountNo} Debited by NPR ${withDrawAmount}, Your new balance is ${totalAmount}`);
    } else {
      console.log("No sufficient balance in your account");
    }
  }
}

const Person = new BankAccount('Kushal', 'Khadka', 345235432, 15000);
Person.fundDeposit(10000);
Person.fundWithdrawal(2000);