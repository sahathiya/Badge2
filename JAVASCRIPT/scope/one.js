
//global scope  var let const are decalred outside of function it is accessible in anywhere
var globalVar = "I am global";
function printGlobal() {
    
  console.log(globalVar); 
}

printGlobal(); 
console.log(globalVar); 


// function scope var let const are accessible inside this function
function greet() {
    const message = "Hello, World!";
    console.log(message); // Accessible here
  }
  
  greet(); // Output: Hello, World!
//   console.log(message); // Error: message is not defined
  


  //block scope
//here var is accessible,but not let,const

{
    var a=10
    console.log(a);
    
}
console.log(a);



//lexical scope


function outer() {
    const outerVariable = "I am from the outer scope";
  
    function inner() {
      console.log(outerVariable); // Accessible
    }
  
    inner();
  }
  
  outer();
  // Output: I am from the outer scope
  

  //lexical environment

  var globalVar = "I am global..."; // Correctly declared with consistent casing

function outer() {
  const outerVar = "I am from outer scope";

  function inner() {
    const innerVar = "I am from inner scope";
    console.log(globalVar); // Found in global environment
    console.log(outerVar);  // Found in outer environment
    console.log(innerVar);  // Found in inner environment
  }

  inner();
}

outer();

// Output:
// I am global
// I am from outer scope
// I am from inner scope


//closure
function outer() {
    const outerVar = "Outer";
  
    return function inner() {
      console.log(outerVar); // Lexical scope allows access
    };
  }
  
  const closureFunction = outer();
  console.log(closureFunction);
  
  closureFunction(); // Output: Outer
  //Even though the outer function has finished execution, inner retains access to outerVar because of the lexical environment stored in the closure.
  