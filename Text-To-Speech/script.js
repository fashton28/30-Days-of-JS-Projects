



function speak() {
    // Create a SpeechSynthesisUtterance
    let input = document.getElementById("text").value
    
    const utterance = new SpeechSynthesisUtterance(`${input}`);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[1]; // Choose a specific voice
  
    // Speak the text
    
    speechSynthesis.speak(utterance);

}