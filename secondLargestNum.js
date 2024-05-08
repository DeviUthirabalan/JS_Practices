function secondLargest(arr){
    let largest =Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
        secondLargest = largest
        largest = arr[i]
    } 
    //     else if(arr[i] != largest && arr[i] > secondLargest)  {
    //     secondLargest = arr[i]
    // }
    }
    return secondLargest;
}

console.log('====================================');
console.log(secondLargest([-5,-4,-8,-10,-10,-10]));
console.log('====================================');