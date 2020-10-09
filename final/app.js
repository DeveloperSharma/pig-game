var scores, roundScrores, activePlayer, dice, sum,gamePlaying;

scores = [0, 0];
roundScrores = 0;
activePlayer = 0;
sum = 0;

init();



//make a initialization function which starts when thw user click new game or when game loads

function init() {

gamePlaying=true;
    
    var x = document.querySelector('#score-0').textContent = '0';

    document.querySelector('dice').style.display = 'none';

    document.querySelector('#current-0').textContent = '0';

    document.querySelector('#current-1').textContent = '0';

    document.querySelector('#score-1').textContent = '0';
    
     document.querySelector('#name-0').textContent = 'player 1';
    
     document.querySelector('#name-1').textContent = 'player 2';
    
     document.querySelector('.player-1-panel').classList.remove('active');
    
     document.querySelector('.player-0-panel').classList.remove('active');
    
     document.querySelector('.player-0-panel').classList.remove('active');
    
     document.querySelector('.player-1-panel').classList.remove('active');
    
     document.querySelector('.player-0-panel').classList.add('active');

}


document.querySelector('.btn-new').addEventListener('click',init);


//btn roll
document.querySelector('.btn-roll').addEventListener('click', function () {

    if(gamePlaying){
        
          //generate a random no

    var random = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector('#current' + activePlayer).textContent =random;

    //display the result


    var diceDom = document.querySelector('.dice');
    diceDom.stytle.display = block;
    diceDom.src = 'dice-' + random + '.png'



    //update the round score if the roll dice was not 1

    sum = sum + randon;
    if (random !== 1) {

        roundScrores = sum;

    }
    //update the scrore if dice is not no 1
    else {

        roundScrores = 0;
        sum = 0;

        if (activePlayer === 0) {
            activePlayer = 1;
            
           nextPlayer();

        } else {

            activePlayer = 0;
            nextPlayer();
        }

        //update the current 

        document.querySelector('#current-0').textContent = '0';

        document.querySelector('#current-1').textContent = '0';

        document.querySelector('.diceDom').textContent = '0';


    }

        
    }
    
  




});



//implementing Hold Function


document.querySelector('.btn-hold').addEventListener('click', function () {

    //add current to global score

    scores[activePlayer] += roundScrores;

    //update the UI
    document.querySelector('#score-0').textContent = scores[activePlayer];
    nextPlayer();



    //check if player won the game

    if (scores[activePlayer] >= 100) {

        document.querySelector('#name-'+activePlayer).textContent='winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('player-'+activePlayer+'panel').classList.remove('active');
        
    gamePlaying=false;
    } else{
        
      nextPlayer();    
    }
    
    
});


function nextPlayer() {
    
    if(activePlayer===1){
         document.querySelector('.player-1-panel').classList.remove('active');
         document.querySelector('.player-0-panel').classList.add('active');
    } else{
         document.querySelector('.player-0-panel').classList.remove('active');
         document.querySelector('.player-1-panel').classList.add('active');
    }


}
    