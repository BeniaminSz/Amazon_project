let score = JSON.parse(localStorage.getItem('score')) || 
{
wins:0,
loses:0,
ties:0
}


updateScoreElement();



function playGame(playerMove)
{

const computerMove = pickComputerMove();
let result = '';
if (playerMove ==='Scissors'){
if (computerMove === 'Rock')
{
result = 'You lose!';
}
else if (computerMove === 'Paper')
{
result = 'You win!';
}
else
{
result = 'Tie.';
}
}
else if (playerMove === 'Rock'){
const computerMove = pickComputerMove();



if (computerMove === 'Rock')
{
result = 'Tie.';
}
else if (computerMove === 'Paper')
{
result = 'You lose!';
}
else
{
result = 'You win!';
}
}

else if (playerMove === 'Paper') {
const computerMove = pickComputerMove();
if (computerMove === 'Rock')
{
result = 'You win!';
}
else if (computerMove === 'Paper')
{
result = 'Tie.';
}
else
{
result = 'You lose!';
}
}


if (result === 'You win!'){
score.wins += 1;
}
else if (result === 'You lose!'){
score.loses += 1;
}
else if (result === 'Tie.'){
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `
<img src="${playerMove}-emoji.png" class="klik">
<img src="${computerMove}-emoji.png" class="klik">`;


}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses:${score.loses}, Ties:${score.ties}`;
}

function pickComputerMove(){
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber <= 0.33)
{
computerMove = 'Rock';
}
else if (randomNumber >= 0.66)
{
computerMove = 'Scissors';
}
else
{
computerMove = 'Paper';
}


//Zwróc coś gdy wykorzystasz funkcję. Co ważne kończy on funkcję!

return computerMove;
}