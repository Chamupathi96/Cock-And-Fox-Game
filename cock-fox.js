let currcockTile;
let currfoxTile;
let score = 0;
let gameOver = false;

window.onload = function(){
  setGame();
}

function setGame(){
    for(let i=0; i<9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);

    }

    setInterval(setBird,1000);
    setInterval(setFox,2000);
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setBird(){

    if(gameOver){
        return;
    }

   if(currcockTile){
    currcockTile.innerHTML = "";
}

    let bird = document.createElement("img");
    bird.src = "./cock.png";

    let num = getRandomTile();
    if(currfoxTile && currfoxTile.id == num){
        return;
    }
    currcockTile = document.getElementById(num);
    currcockTile.appendChild(bird);


}

function setFox(){

    if (gameOver){
        return;
    }


    if(currfoxTile){
        currfoxTile.innerHTML = "";
    }

    let fox = document.createElement("img");
    fox.src = "./fox.png";

    let num = getRandomTile();
    if(currcockTile && currcockTile.id == num){
        return;
    }

    currfoxTile = document.getElementById(num);
    currfoxTile.appendChild(fox);
}

function selectTile(){

    if(gameOver){
        return;
    }

    if(this == currcockTile){
        score += 10;
        document.getElementById("score").innerText=score.toString();
    }else if(this == currfoxTile){
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();

        gameOver = true;
    }
}