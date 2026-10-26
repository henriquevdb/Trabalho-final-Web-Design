function usp1(){
    usp2.play();
}
function mp9(){
    mp.play();
}
function m4a1s(){
    m4.play();
}
var morto=0;
function kill1(){
    morto++;
    document.getElementById("botao1").style.visibility = "hidden";
    headshot.play();
    if(morto==5){
        endround.play();
        win.play();
        morto = 0;
    }
}
function kill2(){
    morto++;
    document.getElementById("botao2").style.visibility = "hidden";
    headshot.play();
    if(morto==5){
        endround.play();
        win.play();
        morto = 0;
    }
}
function kill3(){
    morto++;
    document.getElementById("botao3").style.visibility = "hidden";
    headshot.play();
    if(morto==5){
        endround.play();
        win.play();
        morto = 0;
    }
}
function kill4(){
    morto++;
    document.getElementById("botao4").style.visibility = "hidden";
    headshot.play();
    if(morto==5){
        endround.play();
        win.play();
        morto = 0;
    }
}
function kill5(){
    morto++;
    document.getElementById("botao5").style.visibility = "hidden";
    headshot.play();
    if(morto==5){
        endround.play();
        win.play();
        morto = 0;
    }
}
function killhouse(){
    reallife.play();
}
function easy(){
    easypeasy.play();
}
