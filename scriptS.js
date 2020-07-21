
    var w=new Audio();
    w.src="clap.mp3";
    
    var s1=new Audio();
    s1.src="bk.mp3";

    var x = localStorage.getItem("mytime");
    document.querySelector("h1").innerHTML = "Welcome " + x + "!";

    var ar=new Array(16); 
for(i=0;i<16;i++){ar[i]=document.getElementById("g"+[i+1]);}

document.getElementById("startbtn").addEventListener("click",function(){
    
    s1.play();
//generate an array of 4 different random numbers (between 1 to 16) for random cells
var Cellarr=[];
function randomNumber(){
    for(i=0;i<4;i++){
       var x= Math.ceil(Math.random()*16);
       if(!Cellarr.includes(x)){
        Cellarr.push(x); }
else {i--;}
    }
    return Cellarr;}

    randomNumber();
    //put img1 in random cell
    var cellElement1 = document.getElementById("g" + Cellarr[0]);
    cellElement1.style.backgroundImage="url('images/1.png')";
    cellElement1.style.backgroundSize="80px 80px";
    cellElement1.disabled="true";
    //put img2 in random cell
    var cellElement2 = document.getElementById("g" + Cellarr[1]);
    cellElement2.style.backgroundImage="url('images/2.png')";
    cellElement2.style.backgroundSize="80px 80px";
    cellElement2.disabled="true";
    //put img3 in random cell
    var cellElement3 = document.getElementById("g" + Cellarr[2]);
    cellElement3.style.backgroundImage="url('images/3.png')";
    cellElement3.style.backgroundSize="80px 80px";
    cellElement3.disabled="true";
    //put img4 in random cell
    var cellElement4 = document.getElementById("g" + Cellarr[3]);
    cellElement4.style.backgroundImage="url('images/4.png')";
    cellElement4.style.backgroundSize="80px 80px";
    cellElement4.disabled="true";


    var mySound=new Audio();
    mySound.src="ding.mp3";
    //inserting an image by keyboard
        document.getElementById("gridC").onkeypress=function(event){
                if(event.target.tagName =="BUTTON"){
                var gkey=event.keyCode;
                switch(gkey){
                    case 49: //number 1
                    mySound.play();
                    var el=event.target;
                    el.style.backgroundImage="url('images/1.png')";
                    el.style.backgroundSize="80px 80px";
                    
                    break;
                    case 50: //number 2
                    mySound.play();
                    var el=event.target;
                    el.style.backgroundImage="url('images/2.png')";
                    el.style.backgroundSize="80px 80px";
                    
                    break;
                    case 51: //number 3
                    mySound.play();
                    var el=event.target;
                    el.style.backgroundImage="url('images/3.png')";
                    el.style.backgroundSize="80px 80px";
                   
                    break;
                    case 52: //number 4
                    mySound.play();
                    var el=event.target;
                    el.style.backgroundImage="url('images/4.png')";
                    el.style.backgroundSize="80px 80px";
                    
                    break;
                }
                
            } checkIfFinished(); };
        

    //Timer
var count=0;
var remainTime=120;

function convertSec(sec)
{
    var min= Math.floor(sec/60);
    var seconds= sec % 60;
    return min + ":" + seconds;
}
    function setup()
    {
        var timer=document.getElementById("t");
        timer.innerHTML=(convertSec(remainTime - count));
         s=setInterval(timing,1000);
      function timing()
        {
        count++;
        timer.innerHTML=(convertSec(remainTime - count));
        if(count == remainTime){
            document.getElementById("alertx").style.display="block";
           
            clearInterval(this.s);
        }
        }
    }
    setup();
});


//navigation with arrow keys

 var i=0;
 

 document.onkeydown = function(event) {
     event = event || window.event;
     switch (event.keyCode) {
         case 37: //left
         //if(cellarr.includes(i)) break;
         ar[i].blur();
         i--;
         if(i==-1)i=15;   
         ar[i].focus(); 
               
             break;
         case 39: //right      
         ar[i].blur();
         i++;
         if(i==16) i=0;      
         ar[i].focus();        
             break;
         case 38: //up
         ar[i].blur();
         i-=4;
         if(i<0)i=16+i;
         ar[i].focus(); 
             break;
         case 40: //down 
         ar[i].blur();
         i+=4;
         if(i>15)i=i-16;
         ar[i].focus();     
             break; 
     }
 };


 //checking winner
 var count1=0;
 var count2=0;
 var count3=0;
 var count4=0;


function ifWin(){
    if(count1==2 && count2==2 && count3==2 && count4==2)
   //alert("Winner");
  document.getElementById("idp").innerText="you win "+x+" !";
  //document.getElementById("idp").style.fontSize="35px";
  document.getElementById("alertx").style.display="block";
  clearInterval(this.s);
  s1.pause();
  w.play();
    }
function win(){
//row1
    for(i=0;i<4;i++){
        if(document.getElementsByClassName("r1")[i].style.backgroundImage=='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("r1")[i].style.backgroundImage=='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("r1")[i].style.backgroundImage=='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("r1")[i].style.backgroundImage=='url("images/4.png")') count4++;         
    
//row2

        else if(document.getElementsByClassName("r2")[i].style.backgroundImage==='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("r2")[i].style.backgroundImage==='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("r2")[i].style.backgroundImage==='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("r2")[i].style.backgroundImage==='url("images/4.png")') count4++;         
    
//row3
   

        else if(document.getElementsByClassName("r3")[i].style.backgroundImage==='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("r3")[i].style.backgroundImage==='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("r3")[i].style.backgroundImage==='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("r3")[i].style.backgroundImage==='url("images/4.png")') count4++;         

//row4

        else if(document.getElementsByClassName("r4")[i].style.backgroundImage==='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("r4")[i].style.backgroundImage==='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("r4")[i].style.backgroundImage==='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("r4")[i].style.backgroundImage==='url("images/4.png")') count4++;         
    }
//col1
    for(j=0;j<4;j++){
        if(document.getElementsByClassName("c1")[j].style.backgroundImage==='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("c1")[j].style.backgroundImage==='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("c1")[j].style.backgroundImage==='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("c1")[j].style.backgroundImage==='url("images/4.png")') count4++;         
//col2
       else if(document.getElementsByClassName("c2")[j].style.backgroundImage==='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("c2")[j].style.backgroundImage==='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("c2")[j].style.backgroundImage==='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("c2")[j].style.backgroundImage==='url("images/4.png")') count4++;         
//col3

       else if(document.getElementsByClassName("c3")[j].style.backgroundImage==='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("c3")[j].style.backgroundImage==='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("c3")[j].style.backgroundImage==='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("c3")[j].style.backgroundImage==='url("images/4.png")') count4++;         
//col4
        else if(document.getElementsByClassName("c4")[j4].style.backgroundImage==='url("images/1.png")') count1++;
        else if (document.getElementsByClassName("c4")[j4].style.backgroundImage==='url("images/2.png")') count2++;
        else if (document.getElementsByClassName("c4")[j4].style.backgroundImage==='url("images/3.png")') count3++; 
        else if (document.getElementsByClassName("c4")[j4].style.backgroundImage==='url("images/4.png")') count4++;         
}
 ifWin();  
} 

//var eChecked=0;
function checkIfFinished(){
     eChecked=0;
   for(i=0;i<4;i++){
    
       if(document.getElementsByClassName('r1')[i].style.backgroundImage !="" 
       && document.getElementsByClassName('r2')[i].style.backgroundImage !="" 
       && document.getElementsByClassName('r3')[i].style.backgroundImage !=""
       && document.getElementsByClassName('r4')[i].style.backgroundImage !="")
       {
           if(document.getElementsByClassName('c1')[i].style.backgroundImage !=""
               && document.getElementsByClassName('c2')[i].style.backgroundImage !=""
               && document.getElementsByClassName('c3')[i].style.backgroundImage !=""
               && document.getElementsByClassName('c4')[i].style.backgroundImage !="")
            {
           eChecked++; //will increment when first row/col is filled 
           //console.log("eChecked = "+eChecked);
           if(eChecked == 4) { //the 4 rows and cols are filled 
               win();
               //alert("Full");
            }
          
             }
        }
  }
}









