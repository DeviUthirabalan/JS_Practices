let array1 = [1,2,3,4,3,2,1,5,6,7,3]
let array2 = [1,[2,3,4],[3,[[2,[1],5]]],6,7,3]


// remove duplicates in a given array
function removeDuplicates(arr){
  let uniqueElementArr = []
  for(let i = 0 ; i<arr.length-1;i++){
    if(uniqueElementArr.length === 0 ){
     uniqueElementArr.push(arr[i])
    }
    if(uniqueElementArr.indexOf(arr[i]) === -1){
      uniqueElementArr.push(arr[i])
    }

  // uniqueElementArr[arr[i]] = 1
  return [...new Set(arr)]
  }
  // return Object.keys(uniqueElementArr).map(val => +val)
  // return uniqueElementArr
}

// Flatten an array with recursive method
  let result = []
  function flatArray(arr){
    arr.forEach(item=>{
      if(Array.isArray(item)){
        flatArray(item)
      }else{
        result.push(item)
      }
    })
  }

// sort an array 

// check palindrom (string)

function isPalindrom(input){
  let left = 0;
  let right = input.length-1
  while(left < right){
    if(input[left] != input[right]){
    return false
    }
     left++;
     right--;

  }
  return true
}

// move zeros to right without taking extra space
let array3 = [0,4,0,6,0,1,2,0,8]
function moveZeroes(arr){
   let slow =0;
   for(let fast =0 ;fast< arr.length ;fast++){
        if(arr[fast] !== 0){
            arr[slow] = arr[fast]
            slow++;
        }
        console.log(slow)
   }
   while(slow < arr.length){
    arr[slow] = 0;
    slow++
   }
   return arr
}

// move zeros to right with space

function moveZerosWithSpace(arr){
let result = [];
let zeros = [];
for(let  i = 0 ; i< arr.length ;i++){
  if(arr[i] === 0){
    zeros.push(arr[i])
  }else{
    result.push(arr[i])
  }
}
return [...result,...zeros]
}


// console.log(removeDuplicates(array1))
flatArray(array2)
// console.log(result)
// console.log(moveZeroes(array3))
console.log(moveZerosWithSpace(array3))
// console.log(isPalindrom('devi'))