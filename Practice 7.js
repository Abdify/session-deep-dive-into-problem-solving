// Find if anybody got A+ from your friends
// marks = [78, 82, 69];

function checkGPA(marks){

  for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element >= 80){
      return true;
    }
  }
  return false;
}

console.log(checkGPA([80]));