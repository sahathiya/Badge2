function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the prototype
  Person.prototype.sayHello = function () {
    return `Hello, my name is ${this.name} my age is ${this.age}`;
  };
  
  // Create instances
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  console.log(person1.sayHello()); // "Hello, my name is Alice"
  console.log(person2.sayHello()); // "Hello, my name is Bob"
  