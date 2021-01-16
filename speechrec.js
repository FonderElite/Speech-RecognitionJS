
/*const content = document.getElementById('out');
const btn = document.getElementById('btn');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
    console.log('Voice is activated, you can talk to the microphone')
};
recognition.onresult = function(event){
    console.log(event);
}
async function onit(){
    document.getElementById('on').innerText = "Voice Recognition: On";
    recognition.start();

}
*/

	/* JS comes here */
    async function onit() {
        // get output div reference
        let output = document.getElementById("out");
        // get action element reference
        let action = document.getElementById("on");
        // new speech recognition object
        let  SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        let recognition = new SpeechRecognition();
    
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
            action.innerHTML = "Voice Recognition: On";
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
