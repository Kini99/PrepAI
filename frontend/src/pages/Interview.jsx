import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 
import {BiMicrophone} from "react-icons/bi"
import {BiSolidMicrophone} from "react-icons/bi"
import axios from 'axios';
import Navbar1 from '../components/Navbar1';

const Interview = () => {
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [isListening, setIsListening] = useState(false);

  const chatBoxRef = useRef(null);

  const title=localStorage.getItem("title");
  const type=localStorage.getItem("type");
  const field=localStorage.getItem("field");


  const [aiResponse,setAiResponse]=useState("")

  const updateScroll = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight - chatBoxRef.current.clientHeight;
    }
  };

  const handleSend=()=>{
    const prompt=editedTranscript||transcript

    axios.post(`${process.env.REACT_APP_SERVER}/chatPrompt`, {field, prompt})
    .then((res)=>{
     console.log(res,"check")
     console.log(res.data.res,".res")
     setAiResponse(res.data.res)
    })
   
    .catch((err)=>console.log(err))
    setMessages([...messages,
      {text:editedTranscript||transcript, isUser:true},
      {text:aiResponse, isUser:false},
    ])
    setEditedTranscript(""); 
  resetTranscript(); 
  updateScroll();
  }

  const handleSave=()=>{
    const token=localStorage.getItem("logintoken")
    let payload;
       payload={
        title,
        type,
        field,
        conversationHistory:messages
      }

fetch(`${process.env.REACT_APP_SERVER}/posthistory`,{
  method:"POST",
  body:JSON.stringify(payload),
  headers: {
   "Content-Type": "application/json",
   "Authorization": `${token}`
 }
})
.then((res)=>res.json())
.then((data)=>{
 console.log(data)
}).catch((error)=>{
 console.log(error)
})

    
  }

  const [editedTranscript, setEditedTranscript] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleEditTranscript = (e) => {
    setEditedTranscript(e.target.value);
  }

  const toggleListening = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
    setIsListening(!isListening);
  };

  return (
    <>
    <Navbar1 />
    <div className='flex flex-col items-center justify-center h-[80%] ' id="mainContainer">
      <h3 >{title}</h3>
      <h4>{type}{field? `- ${field}`:null}</h4>
      <div className='w-[95%] h-[75%] flex flex-row ' id="subContainer" style={{ position: 'fixed', bottom: 0 }}>
      <div className='flex flex-col items-start justify-start h-full p-[20px] w-[40%] text-justify' id="promptContainer">
<h5>Follow the below steps to conduct the interview:-</h5>
<br/>
<p>Step 1: Copy the below prompt and send to start the interview - </p>
 <p>You are an interviewer. Ask me 3 questions related to {field}, one after the other. You should go to the next question only after I give an answer to the already asked question.</p> 
<br/>
 <p>Step 2: Record or Type your answer to the question asked and send</p>
 <br/>
 <p>Step 3: Once all the questions are answered, send the below prompt to get your feedback and score.</p>
 <br/>
 <p>Step 4: Click on Finish Interview to save your Interview.</p>
      </div>
      <div id="chatContainer" className='flex flex-col items-start justify-start h-full p-[20px] w-[95%] '>
    <div className='flex flex-col items-start justify-start h-[80%] overflow-y-scroll p-10 w-[100%] border-green-500 border-[1px]' id="chatBox" ref={chatBoxRef}>
      {messages.map((message,index)=>(
        message.isUser? <div key={index} className="bg-gray-200 text-black self-end my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words">
        {message.text}
      </div>:<div key={index} className='bg-green-500 text-white self-start my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words'>
      {aiResponse}
    </div>
      ))}
    </div>
    
    <div className="flex justify-center items-center w-[100%] h-[20] p-[10px]">
      <input type="text" value={editedTranscript || transcript}
        onChange={handleEditTranscript}   onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSend();
      } }} 
      className='w-[70%] p-[10px] border-[1.5px] border-green-500 rounded-[5px] outline-none' />

<button
          onClick={toggleListening}
          className='w-[4%] h-[40px] p-[10px] mx-[1px] rounded-[5px] bg-green-500 text-white cursor-pointer hover:opacity-0.8'
        >
          {isListening ? <BiSolidMicrophone /> : <BiMicrophone />}
        </button>
      <button onClick={handleSend} className='w-[8%] h-[40px] p-[10px] mx-[1px] rounded-[5px] bg-green-500 text-white cursor-pointer hover:opacity-0.8 border-none outline-none'>Send</button>
      <button onClick={handleSave} className='w-[15%] h-[40px] p-[10px] mx-[1px] rounded-[5px] bg-green-500 text-white cursor-pointer hover:opacity-0.8 border-none outline-none'>Finish Interview</button>
    </div>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Interview