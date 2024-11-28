//copying an array
const arr = [1, 2, 3];
const newArr = [...arr]; // newArr is now [1, 2, 3]
console.log(newArr);


//merging array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // mergedArray is [1, 2, 3, 4, 5, 6]
console.log(mergedArray);
//copying object

const obj = { name: "Alice", age: 25 };
const newObj = { ...obj }; // newObj is now { name: "Alice", age: 25 }
console.log(newObj);
//adding new properties of an object

const object = { name: "Alice" };
const updatedObj = { ...object, place: 'pandikkad' }; // updatedObj is { name: "Alice", age: 25 }
console.log(updatedObj);

