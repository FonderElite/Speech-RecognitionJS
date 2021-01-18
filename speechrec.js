
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
    
}



    /* JS comes here */
    /*
    function onit() {
        // get output div reference
        var output = document.getElementById("out");
        // get action element reference
        var action = document.getElementById("on");
        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
    
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
            action.innerHTML = "Voice Recognition: ON";
        };
        
        recognition.onspeechend = function() {
            action.innerHTML = "<small>stopped listening, hope you are done...</small>";
            recognition.stop();
        }
      
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
            output.classList.remove("hide");
        };
      
         // start recognition
         recognition.start();
    }
*/
