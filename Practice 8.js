// // Find the largest element of an array


// function largestElement(array){
//   let largest = array[0];
//   for(const element of array){
//     if(element > largest){
//       largest = element;
//     }
//   }
//   return largest;
// }

// let array = [3, 5, 7, 1, 9];

// console.log(largestElement(array))

// Find the second largest element of an array

function secondLargestElement(array){
  let largest = array[0];
  let secondLargest = array[0];

  for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(element > largest){
      secondLargest = largest;
      largest = element;
    } else if(element > secondLargest){
      secondLargest = element;
    }
  }

  return secondLargest;

}

let array = [45, 41, 56, 35, 64, 60];

// let result = secondLargestElement(array);
// console.log(result[0], result[1])
console.log(secondLargestElement(array))