// @ts-check

let moves = 0;
let currCell;
let currPlayer;
let isWinner = false;
let clickee=(id)=> {
    currCell=document.getElementById(id);
    
    // if there are still empty cells to play? 
    if(moves <=9){
        console.log(currCell.textContent);
        if(currCell.textContent=='#'){
            play();
        }else{
            console.log(`its not empty! you cannot put your ${currPlayer} sign here!!`)
        }
    } else{
        console.log('game over'); 
    }
    
}

let play = () => {
    moves++;
    
    // determinate the sign on the bord
    if(moves%2!==0){
        currPlayer='X';
    } else{
        currPlayer='O';
    }

     currCell.textContent = currPlayer;
     checkWin();
  
    
    // let myPromis = new Promise((resolve, reject)=>{
    //     currCell.textContent = currPlayer;
    //     resolve(currCell);
    //     reject(currCell);
    // })
    // myPromis.then(()=>{
    //     checkWin();
    // }).then(
    //     ()=>{
    //         if (!isWinner) {
    //             // get comp random choice
    //             compPlay();
    //             checkWin();
    //         }
    //     }
    // )

    // checkWin();
    // it 9 moves only' i cannot call this on
    // // the last turn, its only users
    if (!isWinner) {
        // get comp random choice
        compPlay();
        checkWin();
    }
    console.log(currPlayer);
    // they all start with # so it equals
    // if (moves > 4) {
    //     checkWin();
    // }
}

let compPlay = () =>{
    moves++;    
    let isNotEmpty = true;
    while(isNotEmpty){
    let x =Math.floor(Math.random()*9) + 1;

    let checkedCell=document.getElementById(x.toString());
    // console.log(checkedCell)
    if(checkedCell.textContent == '#'){
         isNotEmpty = false;
         checkedCell.textContent = 'O';
        }
    }
}

let checkWin= () => {
    // better option is to extact them t an array and then work with this array only
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
        isWinner = true;
        // stop the game when there is a winner
        for(let i = 1; i <= 9; i++){
            document.getElementById(i.toString()).removeAttribute("onclick");
        }
        // alert('there is a winner');
        console.log('there is a winner');
        setTimeout(() => {
            alert('there is a winner');
        }, 200);
    }
}


const restart = () =>{
    for(let i = 1; i <= 9; i++){
        document.getElementById(i.toString()).textContent='#';
        // document.getElementById(i.toString()).addEventListener("click", clickee(i));

    }
    moves=0;
}


