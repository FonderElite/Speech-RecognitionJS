function onit() {
		        // get output div reference
		        const output = document.getElementById("out");
		        // get action element reference
		        const action = document.getElementById("on");
                // new speech recognition object
               const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                const recognition = new SpeechRecognition();
            
                // This runs when the speech recognition service starts
                recognition.onstart = function() {
                    action.innerHTML = "Voice Recognition: On";
                    console.log("Try to speak to the microphone.")
                };
                
                recognition.onspeechend = function() {
                    action.innerHTML = "Voice Recognition: Off";
                    recognition.stop();
                }
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                   let transcript = event.results[0][0].transcript;
                   let confidence = event.results[0][0].confidence;
                    output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
                    output.classList.remove("hide");
                };
              
                 // start recognition
                 recognition.start();
	        }
/*
    function onit(){
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    document.getElementById('on').innerHTML = 'Voice Recognition: On';
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    document.getElementById('out').innerHTML = transcript;
};
              
// start recognition
recognition.start();
}
*/



/*
const content = document.getElementById('out');
const btn = document.getElementById('btn');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
    console.log('Voice is activated, you can talk to the microphone')
};
recognition.onresult = function(event){
    let transcript = event.results[0][0].transcript;
    document.getElementById('out').innerHTML = "Speech: " + transcript;
    alert(event);
}
async function onit(){
    document.getElementById('on').innerText = "Voice Recognition: On";
    recognition.start();
    
    
}*/

