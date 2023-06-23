import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 
import {BiMicrophone} from "react-icons/bi"
import {BiSolidMicrophone} from "react-icons/bi"

const Interview = () => {
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleSend=()=>{
    const response="Response Received"
    console.log("send");
    setMessages([...messages,
      {text:editedTranscript||transcript, isUser:true},
      {text:response, isUser:false},
    ])
    setEditedTranscript(""); 
  resetTranscript(); 
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
    <div className='flex flex-col items-center justify-center h-screen'>
    <div className='flex flex-col items-start justify-start h-3/5 overflow-y-scroll p-10 w-4/5'>
      {messages.map((message,index)=>(
        message.isUser? <div key={index} className="bg-gray-200 text-black self-end my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words">
        {message.text}
      </div>:<div className='bg-green-500 text-white self-start my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words'>
      Bot Message
    </div>
      ))}



    </div>
    <div className="flex justify-center items-center w-4/5 h-[20] p-[10px]">
      <input type="text" value={editedTranscript || transcript}
        onChange={handleEditTranscript}   onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSend();
      } }} 
      className='w-[70%] p-[10px] border-[1.5px] border-green-500 rounded-[5px] outline-none' />

<button
          onClick={toggleListening}
          className='w-[3%] h-[40px] p-[10px] mx-[1px] rounded-[5px] bg-green-500 text-white cursor-pointer hover:opacity-0.8'
        >
          {isListening ? <BiSolidMicrophone /> : <BiMicrophone />}
        </button>
      <button onClick={handleSend} className='w-[10%] h-[40px] p-[10px] mx-[1px] rounded-[5px] bg-green-500 text-white cursor-pointer hover:opacity-0.8'>Send</button>
    </div>
    
    </div>
  )
}

export default Interview