const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;
const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value; // Get the value from the textarea

    // Create a new SpeechSynthesisUtterance instance with the text
    if(!synth.speaking && text){
    const utterance = new SpeechSynthesisUtterance(text);
    // Speak the utterance
    synth.speak(utterance);
    }
    
    
    
    if (synth.speaking && isSpeaking){
        button.innerText= "Pause";
        synth.resume();
        isSpeaking = false;
    }

     else{
        button.innerText= "Resume";
        synth.pause();
        isSpeaking = true;
     }

};

// Attach event listener to the button
button.addEventListener("click", textToSpeech);
