let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];

let tags = document.querySelectorAll("div,a,button,h5,p"); 
 

tags.forEach((tag) => {
    tag.addEventListener('focusin', (e) => {
        if(e.target.tagName.toLowerCase() ==="button")
        { 
        
           msg.text = e.target.ariaLabel; 
           speechSynthesis.speak(msg);
        
           
           
          
        }
        
         else  if(e.target.tagName.toLowerCase() ==="a")
         {
            msg.text = e.target.innerText+"button"; 
            speechSynthesis.speak(msg);
           
         }
         else{
            msg.text = e.target.innerText;                      
        speechSynthesis.speak(msg);
         }      
        //  console.dir(e.target);  
        // console.log(e.target);  
    },);
}); 
tags.forEach((tag) => {
    tag.addEventListener('focusout', (e) => {
        speechSynthesis.cancel();   
        
    
    },);
});     

 


