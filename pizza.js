
$(document).ready(()=>{
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively we could use:
            // (new Image()).src = this;
        });
    }
    
    // Usage:
    
    preload([
        "tgggg.jpg"
    ]);
    
})


// const invoice = { 
//     getTotal: function(subtotal, taxRate) {
//         return subtotal + (subtotal * taxRate);
//     }
// };

// const invoice = { 
//     getTotal(subtotal, taxRate) {
//         return subtotal + (subtotal * taxRate);
//     }
// };

// let name = "Grace";
// let year = 2021;

// const person = {
//     name: name,
//     year: year
// };
// console.log(person);



// create an object 
// const invoice = {};
 
// // add a property
// invoice.taxRate = 0.0875;
 
// // add a method
// invoice.getSalesTax(subtotal); {
//     return (subtotal * this.taxRate);
// };

// const person = {
//     firstName: "Grace",
//     lastName: "Hopper",
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(val) {
//         const names = val.split(" ");
//         if(names && names.length === 2) {
//             this.firstName = names[0];
//             this.lastName = names[1];
//         }
//         else {
//             throw new TypeError(
//                 "fullName must include first and " +
//                 "last name.");
//         }
//     }
// };
// // console.log(person);

// const createSlideShow = () => {
//     // private variables and constants
//     let timer = null;
//     let play = true;
//     let speed = 2000;
//     const nodes = { image: null, caption: null };
//     const img = { cache: [], counter: 0 };
 
//     // private functions
//     const stopSlideShow = () => { };
//     const displayNextImage = () => {  };
    
//     return {                                     // a public object
//         loadImages(slides) {  },              // public method #1
//         startSlideShow(image, caption) {  },  // public method #2
//         getToggleHandler(){ }                // public method #3
//     };
// };

// var person = {   name: "Joe Camel",   age: 42,   status: "dead" }; console.log(typeof person);

// localStorage.setItem("name", "Ruth")

// console.log(localStorage.getItem("key"));

// const Array = [1, 5, 8];
// console.log(Array.indexOf(1)), Array.indexOf(1)

// sessionStorage.age = 45;

// sessionStorage.age = 50;

// console.log(sessionStorage.age);
// const coords = [   [0, 2],   [1, 3],   [2, 4] ];  

// console.log( `x: ${coords[1][0]}, y: ${coords[1][1]}` );
// let string = ["a, b, c, 1, 2, 3"];
// string.split(" ");
// console.log(string)

// alert( isNaN("four") );               // displays true
// alert( isNaN([23]) );              // displays true
// alert( isNaN(NaN) );     