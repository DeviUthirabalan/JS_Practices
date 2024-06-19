let array1 = [1, 2, 3, 4, 3, 2, 1, 5, 6, 7, 3]
let array2 = [1, [2, 3, 4], [3, [[2, [1], 5]]], 6, 7, 3]


// 1.remove duplicates in a given array
function removeDuplicates(arr) {
  let uniqueElementArr = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (uniqueElementArr.length === 0) {
      uniqueElementArr.push(arr[i])
    }
    if (uniqueElementArr.indexOf(arr[i]) === -1) {
      uniqueElementArr.push(arr[i])
    }

    // uniqueElementArr[arr[i]] = 1
    return [...new Set(arr)]
  }
  // return Object.keys(uniqueElementArr).map(val => +val)
  // return uniqueElementArr
}

// 2.Flatten an array with recursive method
let result = []
function flatArray(arr) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flatArray(item)
    } else {
      result.push(item)
    }
  })
  return result
}

// 3.sort an array 

function sortArray(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// 4.check palindrom (string)
function isPalindrom(input) {
  let left = 0;
  let right = input.length - 1
  while (left < right) {
    if (input[left] != input[right]) {
      return false
    }
    left++;
    right--;

  }
  return true
}

// 5.move zeros to right without taking extra space
let array3 = [0, 4, 0, 6, 0, 1, 2, 0, 8]
function moveZeroes(arr) {
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      arr[slow] = arr[fast]
      slow++;
    }
    console.log(slow)
  }
  while (slow < arr.length) {
    arr[slow] = 0;
    slow++
  }
  return arr
}

// move zeros to right with space
function moveZerosWithSpace(arr) {
  let result = [];
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return [...result, ...zeros]
}

// 6.prime or not

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    } else {
      return true
    }
  }
}

// find prime number btw given 2 numbers
let startValue = 20;
let endValue = 50;
let primeNumArray = [];
function findPrimeNumbers(startVal, endVal) {
  for (currentValue = startVal; currentValue <= endVal; currentValue++) {
    let isPrimeNum = true;
    for (let i = 2; i < currentValue; i++) {
      if (currentValue % i === 0) {
        isPrimeNum = false
        break
      }
    }
    if (isPrimeNum) {
      primeNumArray.push(currentValue)
    }
  }
  return primeNumArray
}

// 7.find min, max from given array
let array5 = [1,2,3,4,8,22,0,100]
function findMinMax(arr){
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      max= arr[i]
    }else if(arr[i]< min){
      min = arr[i]
    }
  }

  return `max ${max} min ${min}`;
}

// reverse a string

function strReverse(str){
  let output = ''
for (let i = str.length-1;i>=0 ; i--) {
  output = output+str[i]
}
return output;
}

// 8.capitalize first letter in string

function capitalizeFirstStr(str){
  return str.charAt(0).toUpperCase()+ str.slice(1)
}

// 9.auto increment
function autoIncrementCounter() {
  let counter = 0;
  return function () {
    const currentValue = counter;
    counter = (counter + 1) % 11; // Reset to 0 when it reaches 10
    return currentValue;
  };
}

// Usage
const getNextValue = autoIncrementCounter();

for (let i = 0; i < 13; i++) {
  // console.log(getNextValue());
}

// 10.find missing numbers

let output = [];
let count  =10
function findMissingNumbers(arr){
  for (let i = 1; i < count; i++) {
    if(!arr.includes(i)){
       output.push(i)
    }
  }
  return output
}

console.log(findMissingNumbers([1,3,5,7]))
// console.log(capitalizeFirstStr('devi'))
// console.log(strReverse('devi'))
// console.log(findPrimeNumbers(10, 30))
// console.log(removeDuplicates(array1))
// console.log(flatArray(array2))
// console.log(result)
// console.log(moveZeroes(array3))
// console.log(moveZerosWithSpace(array3))
// console.log(isPalindrom('devi'))
// console.log(sortArray(array1))