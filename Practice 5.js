// Mular dam
// For first 2 kg - 30 tk per kg
// For more than 2 kg - 25 tk per kg
// write a function to calculate total price based on given quantity. + handle errors

function mularDam(quantity){
  if(typeof quantity != "number"){
    return "Please enter a valid quantity";
  }
  else if(quantity <= 0){
    return "Please enter a valid quantity";
  }
  else if(quantity > 20){
    return "Please want less than that";
  }

  let price = 0;
  if(quantity <= 2){
    price = quantity * 30;
  } else {
    price = quantity * 25;
  }
  return price;
}

console.log(mularDam(50))