



function speak() {
    // Create a SpeechSynthesisUtterance
    let input = document.getElementById("text")
    const utterance = new SpeechSynthesisUtterance(`${input.value}`);
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
  
    // Speak the text
    
    speechSynthesis.speak(utterance);

}