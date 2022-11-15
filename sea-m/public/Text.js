let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
let tags = document.querySelectorAll('div'); 
tags.forEach((tag) => {
    tag.addEventListener('focus', (e) => {
        
        msg.text = e.target.innerText;
       
        speechSynthesis.speak(msg);
        
  
        
    },true);
});