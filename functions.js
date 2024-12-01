 // sum.js
export function sum(a, b) {
    return a + b;
  }
  export function capitalize(string) {
    let firstletter = string.charAt(0)
    
    console.log(firstletter);
    return firstletter.charAt(0).toUpperCase() + firstletter.slice(1);
    
}
let string = "hamza"
capitalize(string)

export function reverseString(string) {
   return  string.split('').reverse().join('');
}
export function calculator(num1,num2,sign) {
    if (sign === "+") {
    return num1 + num2
    }
    else if (sign === "-") {
        return num1 - num2
    }
    else if (sign === "*") {
    return num1 * num2
    }
    else{
        return num1 / num2
    }
}
let arr = [3,8,54,9,36]
export function analyzeArray(arr) {
    let length = arr.length
    let min = arr.sort((a,b)=> a - b)
    min = arr[0]
    let max = arr.sort((a,b)=> a - b)
    max = arr[arr.length - 1]
    let sum = arr.reduce((sum,cur)=> sum + cur ,0)
    let average = sum / arr.length
    return { average, min, max, length };
}
export function caesarCipher(str, shift) {
    shift = shift % 26;
    let result = '';
  
    for (let char of str) {
      if (/[a-zA-Z]/.test(char)) { 
        const base = char.charCodeAt(0) >= 97 ? 97 : 65; 
        const newChar = String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        result += newChar; 
      } else {
        result += char; 
      }
    }
  
    return result;
  }

