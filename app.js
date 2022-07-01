const pScore = document.getElementById('player-score');
const cScore = document.getElementById('cpu-score');
let computerTurn;
let resultTxt = document.getElementById('result-txt')
const lock = document.getElementById('lock');
const cpuImg = document.getElementById('comp-img')
const playerImg = document.getElementById('player-img')

let playerScore = 0;
let cpScore = 0;
const rand = ["rock-img","paper-img","scissors-img"];
const rand2 = ["rocks.png", "pprs.png", "scissors.png"]
 
for(let i=0;i<rand.length;i++){
    const element = document.getElementById(rand[i]);
    element.addEventListener('click',()=>{
        console.log("hello")
        if(element.dataset.isSelected==='true'){
            element.dataset.isSelected='false'; 
            element.classList.remove('expand');
            lock.disabled = true; 
        }
        else{
            element.classList.add('expand');
            element.dataset.isSelected='true';
            const element2 = document.getElementById(rand[(i+1)%3]);
            const element3 = document.getElementById(rand[(i+2)%3]);
            element2.dataset.isSelected='false'; 
            element2.classList.remove('expand')
            element3.dataset.isSelected='false'; 
            element3.classList.remove('expand');
            lock.disabled = false; 
        }
    }) 
}

const getSelection = () => {
    for(let i=0;i<rand.length;i++){
        const element = document.getElementById(rand[i]);
        if(element.dataset.isSelected === 'true'){
            return i;
        }
    }
}    


const game = () => {
    lock.addEventListener('click',()=>{
        if(lock.disabled===false){
        let compChoice = Math.floor(Math.random() * 3);
        const playerChoice = getSelection();
        if(cpScore == 10 || playerScore == 10){
            resultTxt.innerHTML = 'GAME OVER';
        }
        if(compChoice === playerChoice){
            resultTxt.innerHTML = "This is a Tie  &#x1F610;";
            resultTxt.style.color = 'orange';
            playerImg.setAttribute("src", rand2[playerChoice])
            cpuImg.setAttribute("src", rand2[compChoice])
        }
        else if(playerChoice+1 === compChoice){
            resultTxt.innerHTML = "You lose  &#128549;";
            resultTxt.style.color = '#ff6666'
            cpScore++;
            cScore.innerHTML = cpScore;
            playerImg.setAttribute("src", rand2[playerChoice])
            cpuImg.setAttribute("src", rand2[compChoice])

        }
        else{
            resultTxt.innerHTML = "You Win  &#129297;";
            resultTxt.style.color = '#00FF00'
            playerScore++;
            pScore.innerHTML = playerScore;
            playerImg.setAttribute("src", rand2[playerChoice])
            cpuImg.setAttribute("src", rand2[compChoice])
        }
        }  
    })
}

game();