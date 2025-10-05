              /*   ARRAY METHODS   */
let arr = [4, 7, 8, 0, 10, 16, 2];
console.log(arr.length);  
// it will return the length of array → 7

// ------------------ BASIC METHODS ------------------
arr.pop();  
// it will remove and return the last element of array (2)
console.log(arr);

console.log(arr.pop());  
// it will again remove and return the last element → 16

arr.push(25);  
// it will add element at the end of array
console.log(arr);

arr.unshift(-3);  
// it will add this value at the start of array
console.log(arr);

arr.shift();  
// it will remove the first element of array
console.log(arr);

// ------------------ CHECKING METHODS ------------------
console.log(Array.isArray(arr));  
// it will check if variable is array → true

console.log(arr.includes(10));  
// it will check whether value 10 is present → true/false

console.log(arr.indexOf(8));  
// it will return index of value 8 → 2

console.log(arr.lastIndexOf(8));  
// it will return last occurrence of value 8

// ------------------ CONVERT & JOIN ------------------
console.log(arr.join("-"));  
// it will join all elements into a string separated by "-"

console.log(arr.toString());  
// it will convert array into string separated by comma

// ------------------ SLICE & SPLICE ------------------
console.log(arr.slice(1, 4));  
// it will return a shallow copy from index 1 to 3 (end not included)

arr.splice(2, 1, 99);  
// it will remove 1 element from index 2 and add 99 there
console.log(arr);

// ------------------ CONCAT & SPREAD ------------------
let arr2 = [50, 60];
console.log(arr.concat(arr2));  
// it will merge two arrays and return new array

console.log([...arr, ...arr2]);  
// using spread operator to merge arrays

// ------------------ ITERATION METHODS ------------------
arr.forEach((item, index) => console.log(index, item));  
// it will loop through each element of array

let mapped = arr.map(num => num * 2);
console.log(mapped);  
// it will create new array by multiplying each element by 2

let filtered = arr.filter(num => num > 5);
console.log(filtered);  
// it will return elements greater than 5

let found = arr.find(num => num > 5);
console.log(found);  
// it will return first element greater than 5

let foundIndex = arr.findIndex(num => num > 5);
console.log(foundIndex);  
// it will return index of first element greater than 5

let everyCheck = arr.every(num => num > 0);
console.log(everyCheck);  
// it will check if all elements are greater than 0 → true/false

let someCheck = arr.some(num => num > 10);
console.log(someCheck);  
// it will check if any element is greater than 10 → true/false

let reduced = arr.reduce((acc, cur) => acc + cur, 0);
console.log(reduced);  
// it will sum all elements using reduce → single value

let reducedRight = arr.reduceRight((acc, cur) => acc - cur, 0);
console.log(reducedRight);  
// it will subtract elements from right to left

// ------------------ SORTING METHODS ------------------
console.log(arr.sort());  
// it will sort array in ascending order (as string by default)

console.log(arr.sort((a, b) => a - b));  
// it will sort numbers in ascending order

console.log(arr.reverse());  
// it will reverse array order

// ------------------ FILL & COPY ------------------
let arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 2, 4);
console.log(arr3);  
// it will fill 0 from index 2 to 3

let arr4 = [10, 20, 30, 40, 50];
arr4.copyWithin(0, 3, 5);
console.log(arr4);  
// it will copy elements from index 3–4 to starting positions

// ------------------ FLAT & FLATMAP ------------------
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2));  
// it will flatten nested array upto depth 2

let words = ["hello", "world"];
console.log(words.flatMap(word => word.split('')));  
// it will map and flatten the result

// ------------------ FROM & OF ------------------
console.log(Array.from("hello"));  
// it will create array from string → ['h','e','l','l','o']

console.log(Array.of(1, 2, 3));  
// it will create array from given values

// ------------------ KEYS, VALUES, ENTRIES ------------------
let iteratorKeys = arr.keys();
console.log([...iteratorKeys]);  
// it will return all keys (indexes)

let iteratorValues = arr.values();
console.log([...iteratorValues]);  
// it will return all values

let iteratorEntries = arr.entries();
console.log([...iteratorEntries]);  
// it will return key-value pairs

// ------------------ AT METHOD ------------------
console.log(arr.at(2));  
// it will return element at index 2
console.log(arr.at(-1));  
// it will return last element (negative index)


