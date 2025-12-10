let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

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
  content.innerText=transcript
  takeCommand(transcript)
  takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})   
  function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir,what can i help you?")
    }else if(message.includes("how are you")){
         speak("i am virtual assistant ,created by Rahul sir")
    }
     else if(message.includes("open Youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com","_blank")
  }
   else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com","_blank")
}
 else if(message.includes("open chrome")){
        speak("opening chrome...")
        window.open("https://chrome.com","_blank")
 }
  else if(message.includes("github ")){
        speak("opening github...")
        window.open("https://github.com/","_blank")
  }
  else{
    let 
    window.open(`https://www.google.com/search?q=${message}`)
  }
}