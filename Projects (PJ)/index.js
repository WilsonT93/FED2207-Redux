function tipCalc() {
    //declare variables for function
    let totalBill = document.getElementById('#billAmount').value;
    let tipAmt = document.getElementById('#tipSelect').value;
    let peopleAmt =  document.getElementById('#people').value;
    
    let afterTaxes;
    let newBill;
    //take in totalBill, apply taxes and return
    afterTaxes = totalBill * .04
    //calculate tip amount
   let afterTip = (tipAmt * totalBill) / peopleAmt;
    //return new bill amount
    newBill = afterTaxes + afterTip 
    console.log(newBill)
}