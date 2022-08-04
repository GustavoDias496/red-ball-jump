const redball = document.querySelector('.redball');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const start =  document.querySelector('.btn-start');
const restart =  document.querySelector('.btn-restart');

const game = document.querySelector('.game-content');
const welcome = document.querySelector('.welcome');

const gameover = document.querySelector('.gameover');
const pontos = document.querySelector('.pontos');

let score = document.querySelector('score');
let a = 1;
console.log(a);


function jump (e){
    if(e.keyCode === 32){
        redball.classList.add('jump');
    }

    setTimeout(() =>{
        redball.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const redballPosition = +window.getComputedStyle(redball).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;


    if(pipePosition <= 120 && pipePosition > 0 && redballPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        redball.style.animation = 'none';
        redball.style.bottom = `${redballPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        gameover.style.visibility = ('visible');
        pontos.style.visibility = ('visible');  
        pontos.innerHTML = (`${score} Pontos!`)
        redball.src = '/img/gameover.png';
        clearInterval(loop);    
        a = 2;
        console.log(a);


    }

    if(a === 1){
        setTimeout(() => {
            score += 1;
        }, 1000);
    }
    document.getElementById('score').innerHTML = `Score ${score}`;



}, 10);


start.addEventListener('click', () =>{
    if(score === 0 ){
        score = 0;
        document.getElementById('score').innerHTML = `Score 0`;
    }
    welcome.style.visibility = 'hidden';
    welcome.style.position = 'absolute';
    game.style.visibility = 'visible';
    clouds.style.animation = 'clouds-animation 20s infinite linear';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
})

restart.addEventListener('click', () =>{
    location.reload();
});


document.addEventListener('keydown', jump);