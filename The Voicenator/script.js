const message= new SpeechSynthesisUtterance();
let voices=[];
const voiceDropdown=document.querySelector('[name="voice"]');
const options=document.querySelectorAll('[type="range"],[name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton=document.querySelector('#stop');
message.text=document.querySelector('[name=text]').value;

// console.log(message.text);
// console.log(options);

function populateVoice(){
    voices=this.getVoices();
    voiceDropdown.innerHTML= voices.map(voice=>`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
}
function setVoice(){
    message.voices=voices.find(voice=>voice.name===this.value);
    console.log(message.voices);
    toggle();
}
function toggle(startOver=true){
    speechSynthesis.cancel();
    if(startOver){ speechSynthesis.speak(message);};  
}
function setOption(){
    console.log(this.name,this.value);
    message[this.name]= this.value;
    toggle();


}

speechSynthesis.addEventListener('voiceschanged',populateVoice);
voiceDropdown.addEventListener('change',setVoice);
options.forEach(option=>option.addEventListener('change',setOption));
speakButton.addEventListener('click',toggle);
stopButton.addEventListener('click',toggle.bind(null,false));