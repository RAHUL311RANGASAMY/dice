var random=Math.floor(Math.random()*6)+1;
var randomdiceimages="dice"+random+".png";
var randomimagessources="images/"+randomdiceimages;
//logic 5-6 lines
var images1=document.querySelectorAll("img")[0];
images1.setAttribute("src",randomimagessources);

var random2=Math.floor(Math.random()*6)+1;
var randomimages2="dice"+random2+".png";
var images2=document.querySelectorAll("img")[1];
images2.setAttribute("src",randomimages2);

if(random>random2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(random<random2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}

var images1=docum.quert(fgf)
