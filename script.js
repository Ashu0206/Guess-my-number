'using strict'
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }
    //When player wins
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct answer';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    //When guess is too high
    else if(guess > secretNumber){
        if(score>1){
        document.querySelector('.message').textContent = 'Too High!!'
        document.querySelector('.score').textContent = --score;
        }
        else{
            document.querySelector('.message').textContent = 'Game Over !!';
            document.querySelector('.score').textContent = '0';
        }
    }
    //When guess is too low
    else{
        if(score>1){
        document.querySelector('.message').textContent = 'Too Low!!';
        document.querySelector('.score').textContent = --score;
    }
    else{
        document.querySelector('.message').textContent = 'Game Over !!';
        document.querySelector('.score').textContent = '0';
    }
}
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;
})