var tra=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var display=document.querySelector(".head");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hard");
var med=document.querySelector("#med");
var reset =document.querySelector(".btn");

var gamelevel=6; 		
var match;
reset.addEventListener("click",function(){
	
	ult();
	pickcolour();
	reset.style.border="none";
	 tra.style.backgroundColor="#004d00";
	tra.style.color="#ffcc00";
	med.textContent="";

	testing();
})
ult();
function ult()
{for(var i=0;i<squares.length ;i++)
  squares[i].style.backgroundColor= gencolor();
       
}
pickcolour();
testing();
function testing()
{for(var i=0;i<squares.length;i++)
{squares[i].addEventListener("click",function(){
	var click=this.style.backgroundColor;
	if(click===match)
	{	 tra.style.backgroundColor=match;
         tra.style.color="black";   
         change();
         med.textContent="YOU WON";
     }
else 
	{this.style.backgroundColor="black";
      med.textContent="TRY AGAIN!";           }
})
}
}
//pickcolour
function pickcolour(){
	var pick= Math.floor(Math.random()*gamelevel);
	match=squares[pick].style.backgroundColor;
display.textContent=match;
}

function change(){
for(var i=0;i<squares.length;i++)
    squares[i].style.backgroundColor=match;                            	

}

function gencolor(){

var t=Math.floor(Math.random()*256);
var h=Math.floor(Math.random()*256);
var n=Math.floor(Math.random()*256);
 

return "rgb("+ t + "," + h + "," + n +")";
}

 easy.addEventListener("click",function(){
easy.classList.add("select");

hard.classList.remove("select"); 
for(var i=0;i<3;i++)
{  squares[i].style.backgroundColor=gencolor();}

for(i=squares.length-1;i>=3;i--)
{ squares[i].style.display="none";}	

gamelevel=3;
pickcolour();
tra.style.backgroundColor="#004d00";
	tra.style.color="#ffcc00";
	med.textContent="";
testing();

 })
hard.addEventListener("click",function(){
	hard.classList.add("select");

easy.classList.remove("select"); 
gamelevel=6;
for(var i=0;i<6;i++)
{  squares[i].style.backgroundColor=gencolor();}

for(i=squares.length-1;i>=3;i--)
{ squares[i].style.display="block";}	
     
	pickcolour();
	tra.style.backgroundColor="#004d00";
	tra.style.color="#ffcc00";
	med.textContent="";

	testing();



})


