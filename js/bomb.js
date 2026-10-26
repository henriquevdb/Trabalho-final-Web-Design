var codigo = "";
function num1(){
    codigo=codigo+1;
    document.querySelector("#numero").innerText = codigo;
}
function num2(){
    codigo=codigo+2;
    document.querySelector("#numero").innerText = codigo;
}
function num3(){
    codigo=codigo+3;
    document.querySelector("#numero").innerText = codigo;
}
function num4(){
    codigo=codigo+4;
    document.querySelector("#numero").innerText = codigo;
}
function num5(){
    codigo=codigo+5;
    document.querySelector("#numero").innerText = codigo;
}
function num6(){
    codigo=codigo+6;
    document.querySelector("#numero").innerText = codigo;
}
function num7(){
    codigo=codigo+7;
    document.querySelector("#numero").innerText = codigo;
}
function num8(){
    codigo=codigo+8;
    document.querySelector("#numero").innerText = codigo;
}
function num9(){
    codigo=codigo+9;
    document.querySelector("#numero").innerText = codigo;
}
function num0(){
    codigo=codigo+0;
    document.querySelector("#numero").innerText = codigo;
}
function menos(){
    codigo = codigo.slice(0, -1);
    document.querySelector("#numero").innerText = codigo;
}
function enter(){
    if(codigo == "7355608"){
        document.querySelector("#resultado").innerText = "The bomb has been planted";
        bombAudio.play();
    }
    else{
        document.querySelector("#resultado").innerText = "error";
    }
}
