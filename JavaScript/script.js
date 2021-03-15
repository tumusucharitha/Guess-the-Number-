const calcAverage = (score1, score2, score3) =>
     (score1+score2+score3)/3;
//console.log(calcAverage(44, 23, 71));     
const dolphinScore = calcAverage(44, 23, 71)
const koalasScore = calcAverage(65, 54, 49)

const checkWinner = function(dolphinAvg, koalasAvg){
    if(dolphinAvg >= 2*koalasAvg) {
        console.log(`Dolphin win (${dolphinAvg}) vs. ${koalasAvg}`)
    }else if(koalasAvg >= 2*dolphinAvg){
        console.log(`Dolphin win (${koalasAvg}) vs. ${dolphinAvg}`)
    }else{
        console.log('No team wins');
    }

}

checkWinner(dolphinScore, koalasScore);
checkWinner(5678, 444)