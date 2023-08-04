const allButtons = document.getElementsByClassName('button');
const allAudioElements = document.getElementsByClassName('audio');
for (let i = 0; i < allButtons.length; i++) {
     const button = allButtons[i];
     const audioElement = allAudioElements[i];
     debugger;
     button.addEventListener("click", ()=>{
          debugger;
          audioElement.play();
          setTimeout(()=>{audioElement.pause();}, 4000);
     });
}

