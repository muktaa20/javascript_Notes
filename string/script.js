// Check if a number is Palindrome or Not
function isPalidrome(inp){
 let str = inp.toString()
 let result = str.split('')
 .reverse()
 .join('');

 return result === str
}
console.log(isPalidrome("Hello"));
console.log(isPalidrome("madam"));
console.log(isPalidrome(123));

