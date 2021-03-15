const marksObject={
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
         return this.mass / (this.height * 2)
    },
}

const johnObject={
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass / (this.height * 2)
   }
}

if(marksObject.calcBMI() > johnObject.calcBMI()){
    console.log(`${marksObject.fullname}'s 
    BMI (${marksObject.calcBMI()}) is higher than John's (${johnObject.calcBMI()})`)
}else{
    console.log(`${johnObject.fullname}'s BMI (${johnObject.calcBMI()}) is higher than Mark's (${marksObject.calcBMI()})`)
}
console.log(marksObject.calcBMI(), johnObject)

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
    let tip = (15<bill<300) ? bill*0.15 : bill*0.20 ;
    return tip;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(tips, totals)

let sum = 0;

//console.log('sum is:: '+ sum);
const calcAvg = function(arr){
    for (let j = 0; j < arr.length; j++) {
        sum = sum + bills[j];
    }

    let average = sum /arr.length;
    return average;
}

console.log("avg:: "+calcAvg(bills))
console.log("avg:: "+calcAvg(tips))
console.log("avg:: "+calcAvg(totals))