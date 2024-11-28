// //constructor function

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//       console.log("Hello, my name is " + this.name);
//     };
//   }
  
//   const person1 = new Person("John", 30);
//   console.log(person1.name); // Output: John
//   person1.greet(); // Output: Hello, my name is John
  

//   //generator function
//   function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
  
//   const gen = numberGenerator();
//   console.log(gen.next().value); // Output: 1
//   console.log(gen.next().value); // Output: 2
//   console.log(gen.next().value); // Output: 3
//   console.log(gen.next().value); // Output: undefined (iteration is complete)
  

//   //callback function
//   function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }
  
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
  
//   greet("John", sayGoodbye);
  
//   //callback hell
//   setTimeout(() => {
//     console.log("Step 1: Prepare the ingredients");
//     setTimeout(() => {
//       console.log("Step 2: Mix the ingredients");
//       setTimeout(() => {
//         console.log("Step 3: Bake the cake");
//         setTimeout(() => {
//           console.log("Step 4: Decorate the cake");
//           setTimeout(() => {
//             console.log("Step 5: Serve the cake");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
  

//   //higher order function

//   function applyOperation(num1, num2, operation) {
//     return operation(num1, num2);
//   }
  
//   function add(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   console.log(applyOperation(5, 3, add));       // 8
//   console.log(applyOperation(5, 3, multiply)); // 15
  

  //currying

  function curriedAdd(a) {
    return function (b) {
        return function(c){
            return a + b+c
        }
     
    };
  }
  console.log(curriedAdd(2)(5)(4));
    