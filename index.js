
let homeScoreEl = document.getElementById("currentHomeScore");
let guestScoreEl = document.getElementById("currentGuestScore");
let homeScore = 0;
let guestScore = 0;



function addOne(){
    homeScore += 1;
    homeScoreEl.textContent= homeScore;
    
}

function addTwo(){
    homeScore += 2;
    homeScoreEl.textContent=homeScore;
}

function addThree(){
    homeScore += 3;
    homeScoreEl.textContent=homeScore;

}

function add1(){
    guestScore += 1;
    guestScoreEl.textContent=guestScore;
}

function add2(){
    guestScore += 2;
    guestScoreEl.textContent=guestScore; 

}

function add3(){
guestScore += 3;
guestScoreEl.textContent=guestScore;

}

