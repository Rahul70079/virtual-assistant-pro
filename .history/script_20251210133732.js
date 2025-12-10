let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if (hours>=12 && hours <16){
speak("Good Afternoon sir")      
}else{
    speak("Good Evening sir")
}
}
  window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex=event.resultIndex
  let transcript=event.results[currentIndex][0].transcript
  con
console.log(event)
}
btn.addEventListener("click",()=>{
    recognition.start()
})   

  