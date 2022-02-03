// Calculate Electricity bill
// For first 100 unit - 5 tk per unit
// For more than 100 unit 6 tk for every unit more than 100
// For more than 200 unit 7 tk for every unit more than 200

function electricityBill(unit){
  let bill;
  if (unit > 200) {
    // 250 unit
    // 100 * 5;
    // 100 * 6;
    // (unit - 200) * 7
    let first100Bill = 100 * 5;
    let secondBill = 100 * 6;
    let remainingBill = (unit - 200) * 7;

    bill = first100Bill + secondBill + remainingBill;

  } else if (unit > 100) {
    // 120 unit
    // 100 * 5 = 500
    // (unit - 100) * 6 = 120
    let firstBill = 100 * 5;
    let remainingBill = (unit - 100) * 6;
    bill = firstBill + remainingBill;
  } else if (unit <= 100) {
    bill = unit * 5;
  } 

  // if (unit <= 100) {
  //   bill = unit * 5;
  // } else if (unit <= 200) {
  //   let firstBill = 100 * 5;
  //   let remainingBill = (unit - 100) * 6;
  //   bill = firstBill + remainingBill;
  // } else {
  //   let first100Bill = 100 * 5;
  //   let secondBill = 100 * 6;
  //   let remainingBill = (unit - 200) * 7;

  //   bill = first100Bill + secondBill + remainingBill;
  // } 

  return bill;
}

console.log(electricityBill(300));