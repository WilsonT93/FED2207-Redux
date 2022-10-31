//Calculate Tip
function tipCalc(billAmount, tipPercent) {
    //declare variables for function
    let billAmount = document.getElementById('#billAmount').value;
    let tipAmt = document.getElementById('#tipSelect').value;
    let peopleAmt =  document.getElementById('#people').value;
    
    
    
//     let afterTaxes;
//     let newBill;
//     //take in totalBill, apply taxes and return
//     afterTaxes = totalBill * .04
//     //calculate tip amount
//    let afterTip = (tipAmt * totalBill) / peopleAmt;
//     //return new bill amount
//     newBill = afterTaxes + afterTip 
    
//     console.log(newBill)
    return totalBill * tipPercent
};

//Total per person
function billSplit(price, peopleAmt){
    return billAmount/peopleAmt
    
};

//split the Tip
function tipSplit(tipAmt, peopleAmt){
    return tipAmt/peopleAmt
    
}