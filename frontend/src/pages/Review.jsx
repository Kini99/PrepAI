import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 
import {BiMicrophone} from "react-icons/bi"
import {BiSolidMicrophone} from "react-icons/bi"
import axios from 'axios';
import Navbar1 from '../components/Navbar1';

const Review = () => {

    const [messages,setMessages]=useState([]);

  const title=localStorage.getItem("title");
  const type=localStorage.getItem("type");
  const field=localStorage.getItem("field");

useEffect(()=>{
    const id=localStorage.getItem("singleInterviewID")
    const token=localStorage.getItem("logintoken")
    fetch(`${process.env.REACT_APP_SERVER}/History/${id}`,{
        method:"GET",
        headers: {
         "Content-Type": "application/json",
         "Authorization": `${token}`
       }
      })
      .then((res)=>res.json())
      .then((res)=>{
       console.log(res);
setMessages(res.data.res)
      }).catch((error)=>{
       console.log(error)
      })
},[])

  return (
    <>
    <Navbar1 />
    <div className='flex flex-col items-center justify-center h-[80%] ' id="mainContainer">
      <h3 >{title}</h3>
      <h4>{type}{field? `- ${field}`:null}</h4>
      <div className='w-[95%] h-[75%] flex flex-row ' id="subContainer" style={{ position: 'fixed', bottom: 0 }}>
      <div id="chatContainer" className='flex flex-col items-start justify-start h-full p-[20px] w-[95%] '>
    <div className='flex flex-col items-start justify-start h-[80%] overflow-y-scroll p-10 w-[100%] border-green-500 border-[1px]' id="chatBox" >
      {messages.map((message,index)=>(
        message.isUser? <div key={index} className="bg-gray-200 text-black self-end my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words">
        {message.text}
      </div>:<div key={index} className='bg-green-500 text-white self-start my-[5px] p-[10px] rounded-[10px] max-w-[50%] break-words'>
      {message.text}
    </div>
      ))}
    </div>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Review