const buttonStart = document.querySelector("#button-start");
let mudarAudio = true;

buttonStart.onclick = function(){
  var mario = document.querySelector("#mario");

  if(mudarAudio){
    execultarAudio("audio/efeito-pulo-mario.mp3");
    mudarAudio = false;
  }else{
    mudarAudio = true;
  }

  mario.style.marginTop = 
    mario.style.marginTop == "-88px" ?
    "-2px" : "-88px";
}

function execultarAudio(url){
  if(document.querySelector("#audio")){
    document.querySelector("#audio").remove();
  }

  var audioEffect = new Audio();
  var source = document.createElement("source");
  source.src = url;
  source.type = "audio/mpeg";
  audioEffect.appendChild(source);
  audioEffect.autoplay = true;
  audioEffect.id = "audio";

  document.body.appendChild(audioEffect);

}