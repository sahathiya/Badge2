// Creating a Set
const set = new Set();

// Adding values
set.add(1);
set.add(2);
set.add(3);
set.add(1); // Duplicate value, will not be added

// Accessing values (check for existence)
console.log(set.has(2)); // Output: true
console.log(set.has(4)); // Output: false

// Iterating over a Set
set.forEach(value => {
  console.log(value);
});

// Output:
// 1
// 2
// 3

// Getting the size of the Set
console.log(set.size); // Output: 3

// Deleting a value
set.delete(2);
console.log(set.has(2)); // Output: false


//continue

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Skip the iteration when i is 3
    }
    console.log(i); // Will print 1, 2, 4, 5
  }
  


  //break

  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // Exit the loop when i is 3
    }
    console.log(i); // Will print 1, 2
  }
  