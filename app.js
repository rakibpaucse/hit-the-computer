function selectr(selectrrr){
    return document.querySelector(selectrrr);
}

window.onload = bulid;

var container = selectr('.container');
var countpop=0;
var timepop;
var pc;
var randomNumber;
var remember=0;
var gameScore = 0;


function bulid(){

    var html = '';

    for (let q = 0; q < 6; q++) {
        
        html += "<div class='office'><div class='desk'></div><div class='pc'></div></div>"
    }
        
    container.innerHTML = html;

    pc = document.querySelectorAll('.pc');

    for (let pp = 0; pp < pc.length; pp++) {
        
        pc[pp].addEventListener("click",addscore);
        
    }
    
}


function makepupup(){
   timepop =  setInterval(popup,650);
}


function popup(){

    pc[remember].classList.remove('popup');

    countpop++;

    randomNumber  = Math.floor(Math.random()*6);
    remember = randomNumber;
    pc[randomNumber].classList.add('popup');


    if(countpop > 15){
        pc[remember].classList.remove('popup');
        clearInterval(timepop);
        alert('Game Over!')
    }
}

var score  = selectr('.score');


//scorepopupClass.addEventListener('click',function(){alert("fd")});

function addscore(e){
    gameScore++;
    console.log(e);
    
    score.innerHTML = gameScore;
}

function game() {
    makepupup();
   
} 