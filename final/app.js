var scores,roundScrores,activePlayer,dice,sum;

scores=[0,0];
roundScrores=0;
activePlayer=0;
sum=0;


document.querySelector('#current'+activePlayer).textContent=dice;

var x=document.querySelector('#score-0').textContent;

document.querySelector('dice').style.display='none';


//btn roll
document.querySelector('.btn-roll').addEventListener('click',function({
    
    //generate a random no
    
    var random=math.floor(math.random()*6)+1;
    
    //display the result
    
   
    var diceDom=document.querySelector('.dice');
    diceDom.stytle.display=block;
    diceDom.src='dice-'+random+'.png'
    
    
    
    //update the round score if the roll dice was no 1
    
    sum=sum+randon;
    if(random!==1){
    
    roundScrores=sum;
}
    else{
    roundScrores=0;
    sum=0;
}
    
}));
