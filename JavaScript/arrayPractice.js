const calcTip = bill => {
    if(bill > 300){
        return bill+(bill * .20);
    }else{
        return bill + (bill*.15);
    }
}

console.log(calcTip(400))

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]),
                calcTip(bills[1]),
                calcTip(bills[2])];

console.log(bills, tips);                 