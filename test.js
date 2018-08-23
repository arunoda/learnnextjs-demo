// // let a ={a:{b:{c:1}}}

// // let b = a?.a;
// // console.log(b)


// // var user = { name: 'Joe' }
// // var zip = user?.address?.zip;
// // console.log(zip)

// // var street = user.address && user.address.street;

// //Use Destructuring Assignment to Assign Variables from Arrays

// // let a= 8;
// // let b = 6;

// //  [a,b]=[b,a]
// // console.log(b)

// //ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements


// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   let arr,a,b;
//   [a,b,...arr]=source
 
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// //ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
//   const half = (function() {
//     "use strict"; // do not change this line
  
//     // change code below this line
//     return function half({max,min}) {
//       // use function argument destructuring
//       return (max + min) / 2.0;
//     };
//     // change code above this line
  
//   })();
//   console.log(stats); // should be object
//   console.log(half(stats)); // should be 28.015

//Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray 
  =[`<li class="text-warning">${arr[0]}</li>`,
  `<li class="text-warning">${arr[1]}</li>`,
  `<li class="text-warning">${arr[2]}</li>`];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
