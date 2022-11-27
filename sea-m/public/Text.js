let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
let tags = document.querySelectorAll('div,a'); 
var lastActive;
 
tags.forEach((tag) => {
    tag.addEventListener('focusin', (e) => {
        
        
         if(e.target.tagName.toLowerCase() ==="a")
         {
            msg.text = e.target.innerText+"button"; 
            speechSynthesis.speak(msg);
           
         }
         else{
            msg.text = e.target.innerText;                      
        speechSynthesis.speak(msg);
         }
         // console.dir(e.target);  
         //console.log(e.target);  
    },);
}); 
tags.forEach((tag) => {
    tag.addEventListener('focusout', (e) => {
        speechSynthesis.cancel();   
        
    
    },);
}); 
 