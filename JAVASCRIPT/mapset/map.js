// Creating a Map
const map = new Map();

// Adding key-value pairs
map.set('name', 'John');
map.set('age', 30);
map.set('isEmployed', true);

// Accessing a value
console.log(map.get('name')); // Output: John

// Checking for a key
console.log(map.has('age')); // Output: true

// Iterating over a Map
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: John
// age: 30
// isEmployed: true

// Getting the size of the Map
console.log(map.size); // Output: 3

// Deleting a key-value pair
map.delete('age');
console.log(map.has('age')); // Output: false
