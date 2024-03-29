// @ts-check

let moves = 0;
let currCell;
let currPlayer;
let isWinner = false;

// event on click on each btn
let clickee=(id)=> {
    //get the current elmelnt
    currCell=document.getElementById(id);
    
    // if there are still empty cells to play? 
    if(moves <=9){
        // if so, this spesific place is empty?
        if(currCell.textContent=='#'){
            play();
        }else{
            console.log(`its not empty! you cannot put your ${currPlayer} sign here!!`)
        }
    } else{
        console.log('game over'); 
    }
    
}

// main function, the game
let play = () => {
    // first of all, move's counter
    moves++;
    
    // determinate the sign on the bord
    if(moves%2!==0){
        currPlayer='X';
    } else{
        currPlayer='O';
    }

    // mark the correct sign to the board
    currCell.textContent = currPlayer;

    // after every move - need check if there's a winner
    checkWin();
    
    // if there isn't - let the computer make his turn
    if (!isWinner) {
        // get comp random choice
        compPlay();
        // after every move - need check if there's a winner
        checkWin();
    }

   
}

// the computer turm generator
let compPlay = () =>{
    // inc the move
    moves++;  
    // flag loop  
    let isNotEmpty = true;
    while(isNotEmpty){
        // generate some random between 1-9
        let x =Math.floor(Math.random()*9) + 1;
        // store the element
        let checkedCell=document.getElementById(x.toString());
        // check for emptyness
        if(checkedCell.textContent == '#'){
            isNotEmpty = false;
            checkedCell.textContent = 'O';
        }
    }
}

// check the board for winning situation
let checkWin= () => {
    if((document.getElementById('1').textContent==document.getElementById('2').textContent &&
    document.getElementById('2').textContent==document.getElementById('3').textContent && document.getElementById('2').textContent!='#') || 
    (document.getElementById('4').textContent==document.getElementById('5').textContent &&
    document.getElementById('5').textContent==document.getElementById('6').textContent  && document.getElementById('5').textContent!='#') ||
    (document.getElementById('7').textContent==document.getElementById('8').textContent &&
    document.getElementById('8').textContent==document.getElementById('9').textContent && document.getElementById('8').textContent!='#') ||
    (document.getElementById('1').textContent==document.getElementById('5').textContent &&
    document.getElementById('5').textContent==document.getElementById('9').textContent && document.getElementById('5').textContent!='#') ||
    (document.getElementById('3').textContent==document.getElementById('5').textContent &&
    document.getElementById('5').textContent==document.getElementById('7').textContent && document.getElementById('5').textContent!='#')||
    (document.getElementById('1').textContent==document.getElementById('4').textContent &&
    document.getElementById('4').textContent==document.getElementById('7').textContent && document.getElementById('4').textContent!='#')||
    (document.getElementById('2').textContent==document.getElementById('5').textContent &&
    document.getElementById('5').textContent==document.getElementById('8').textContent && document.getElementById('5').textContent!='#')||
    (document.getElementById('3').textContent==document.getElementById('6').textContent &&
    document.getElementById('6').textContent==document.getElementById('9').textContent && document.getElementById('6').textContent!='#')   ){
        // change the boolean to stop computer from make the next move
        isWinner = true;
        // stop the game when there is a winner
        for(let i = 1; i <= 9; i++){
            // by removing the event listener
            document.getElementById(i.toString()).removeAttribute("onclick");
        }
        // alerting the user for win
        setTimeout(() => {
            alert('there is a winner');
        }, 200);
    }
}

// restart the game - called from event on restart btn
const restart = () =>{
    // run over all game fileds
    for(let i = 1; i <= 9; i++){
        // get the element
        let x = document.getElementById(i.toString());
        // reasign init. value
        x.textContent = '#';
        // reasign the click event
        x.addEventListener('click',(e)=>{
            clickee(x.id);
        });
    }
    // restart the move's counter
    moves = 0;
    // restart the winner boolean
    isWinner = false;
}


