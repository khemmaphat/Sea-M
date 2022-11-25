let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
let x=document.querySelector("iframe").contentWindow;
let tags= x.document.querySelectorAll("title");
console.dir(document.querySelector("iframe").contentWindow);  
console.dir(tags[0]);  
console.log(tags[0]); 

tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        
            msg.text = e.target.innerText;
            speechSynthesis.speak(msg);
         
        
  
         console.dir(e.target);  
        console.log(e.target);  
    },true);
} ); 
tags.forEach((tag) => {
    tag.addEventListener('focusout', (e) => {
        speechSynthesis.cancel();   
        
    
    },);
});     

 


