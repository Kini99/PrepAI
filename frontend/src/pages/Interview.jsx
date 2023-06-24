import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 
import {BiMicrophone} from "react-icons/bi"
import {BiSolidMicrophone} from "react-icons/bi"
import axios from 'axios';
import Navbar1 from '../components/Navbar1';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Accordion,
      AccordionItem,
      AccordionButton,
      AccordionPanel,
      AccordionIcon,
      Box,
      Input,
      Checkbox, CheckboxGroup, Stack,
      Radio, RadioGroup,
      Select
    
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Interview = () => {

  const navigate=useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [messages,setMessages]=useState([]);
  const [isListening, setIsListening] = useState(false);
  const [feedback,setFeedback]=useState();
  const [score,setScore]=useState();

  const chatBoxRef = useRef(null);

  const title=localStorage.getItem("title");
  const type=localStorage.getItem("type");
  const field=localStorage.getItem("field");

  const updateScroll = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight - chatBoxRef.current.clientHeight;
    }
  };

  const handleSend= async ()=>{
    const prompt=editedTranscript||transcript
console.log(prompt)
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/chatPrompt`, { field, prompt });
      const aiResponse = res.data.res;
      console.log(aiResponse)
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, isUser: true },
        { text: aiResponse, isUser: false },
      ]);
      
      setEditedTranscript("");
      resetTranscript();
      updateScroll();
    } catch (err) {
      console.log(err);
    }
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

onOpen();
    
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

  const handleClick=()=>{
    console.log(feedback,score)
    alert("Details saved successfully!")
    onClose();
    navigate("/dashboard")
  }

  return (
    <>
    <Navbar1 />
    <div className='flex flex-col items-center justify-center h-[80%] ' id="mainContainer">
      <h3 >{title}</h3>
      <h4>{type}{field? `- ${field}`:null}</h4>
      <div className='w-[95%] h-[75%] flex flex-row ' id="subContainer" style={{ position: 'fixed', bottom: 0 }}>
      <div className='flex flex-col items-start justify-start h-full p-[20px] w-[40%] text-justify' id="promptContainer">
<h5>Follow the below steps to conduct the interview:-</h5>
<p>Step 1: Copy the below prompt and send to start the interview - </p>
 <p>You are an interviewer. Ask me 3 questions related to {field}, one after the other. You should go to the next question only after I give an answer to the already asked question. Give me feedback at the end and give me rating out of 10 </p> 
 <p>Step 2: Record or Type your answer to the question asked and send</p>

 <p>Step 3: Once all the questions are answered, send the below prompt to get your feedback and score - </p>
 <p></p>

 <p>Step 4: Click on Finish Interview to save your Interview.</p>

 <p>Step 5: Copy the feedback received and submit it along with scores in the Form shown.</p>
      </div>
      <div id="chatContainer" className='flex flex-col items-start justify-start h-full p-[20px] w-[95%] '>
    <div className='flex flex-col items-start justify-start h-[80%] overflow-y-scroll p-10 w-[100%] border-green-500 border-[1px]' id="chatBox" ref={chatBoxRef}>
      {messages.map((message,index)=>(
        message.isUser? <div key={index} className="bg-gray-200 text-black self-end my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words">
        {message.text}
      </div>:<div key={index} className='bg-green-500 text-white self-start my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words'>
      {message.text}
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
    <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              
     <label htmlFor="title">Feedback</label> 
     <br />        
    <Input type="text" placeholder='Enter title' value={feedback} onChange={(e)=>setFeedback(e.target.value)} />
    <br />
    <label htmlFor="title">Score</label> 
     <br />        
     <Input
  type="number"
  placeholder="Enter title"
  value={score}
  onChange={(e) => {
    const value = parseInt(e.target.value);
    if (value >= 0 && value <= 10) {
      setScore(value);
    } else {
      window.alert('Input must be within the range of 0-10.');
    }
  }}/>
    <br />

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose} style={{backgroundColor:"black",color:"white"}}>
                Close
              </Button>
              <Button variant='ghost' style={{backgroundColor:"black",color:"white"}} onClick={handleClick}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </div>
    </>
  )
}

export default Interview