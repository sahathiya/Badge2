//this keyword

//call

function greet(greeting) {
    console.log(`${greeting}, ${this.name} `);
  }
  
  const person = { name: 'Alice' };
  
  greet.call(person, 'Hello'); // Output: Hello, Alice
  //apply


  greet.apply(person,['hii',"!"])

  //bind

  const boundGreet =  greet.bind(person,'heyyy')

  boundGreet()