// Count the number of vowels in a string

function countVowel(sentence){
  
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  
  for(const letter of sentence){
    // let letter = sentence[i].toLowerCase();
    if(vowels.indexOf(letter) > -1){
      count = count + 1;
    }
  }
  return count;

}

let string = "Quick brown fox jumps over the lazy dog";
console.log(countVowel(string));


// let fact = 1;
// let n = 5;
// for(let i = 1; i <= n; i++){
//   fact = fact * i;
// }

// 5*4*3*2*1