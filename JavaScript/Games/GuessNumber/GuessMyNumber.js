let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener(
    'click', function(){
        const guess = Number(document.querySelector('.guess').
        value);
        console.log(guess, typeof guess);

        if(!guess){
            displayMessage('⛔No Number');
        }else if(guess === secretNumber){
            displayMessage('🎉Correct Number');
            document.querySelector('body').style
                .backgroundColor='green';
            //document.querySelector('.number').style.width = '30rem';
            if(score > highScore){
                highScore = score;
                document.querySelector('.HighScore').textContent = 
                highScore;
            }
        }else if(guess !== secretNumber){
            if(score>1){       
                displayMessage(guess > secretNumber ? '📈too high.' : '📉too low.');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent =
                '💣You have lost the game..!';
            }
        }
        
    }
)

document.querySelector('.again').addEventListener(
    'click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random()*20)+1;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style
                .backgroundColor='black';

    }
)