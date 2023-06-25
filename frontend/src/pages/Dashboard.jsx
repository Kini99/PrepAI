

import InterviewCards from '../components/InterviewCards'

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale } from 'chart.js';
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
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';


const Dashboard = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title,setTitle]=useState("");
  const [type,setType]=useState("");
  const [field,setField]=useState("");

  const [historyData,sethistoryData] = useState([])

  const navigate=useNavigate();

  const handleClick=()=>{
    localStorage.setItem("field",field);
    localStorage.setItem("type",type);
    localStorage.setItem("title",title);
navigate("/interview");
  }

  useEffect(()=>{

    const token=localStorage.getItem("logintoken")
    // let payload;
    //    payload={
    //     title,
    //     type,
    //     field,
    //     // conversationHistory:messages
    //   }

    fetch(`${process.env.REACT_APP_SERVER}/History`,{
      method:"GET",
      // body:JSON.stringify(payload),
      headers: {
       "Content-Type": "application/json",
       "Authorization": `${token}`
     }
    })
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data)
     console.log(data.history)
     sethistoryData(data.history)
    //  localStorage.setItem("userid",data.history.userID)
     console.log(historyData,"check")
    }).catch((error)=>{
     console.log(error)
    })

  },[])
 
  return (
     <>
    <Navbar1 />
    <div>

      <h1>Welcome to PrepAI</h1>
      <button className='bg-blue-500/75 p-2 text-white-600/100 m-[auto] mt-2 mb-2 text-white' onClick={onOpen}>Start New Interview</button>

      <div className='w-[95%] m-[auto] flex justify-between mt-3'>
        <div className='bg-blue-500/75 shadow-xl m-[auto] p-2 border-r-5'>
          {/* <p>Interview Practice Details</p> */}

          <p className='font-bold text-left'>Great job on completing your interview</p>
          <br />

          <p className='text-left text-white'>Results have been generated for the previous attempt. Complete all your interviews
           to unlock your Profile Scorecard.</p>

         
        </div>

        {/* <div className='bg-white shadow-xl w-[20%]'>
          <p className='font-bold'>Profile Score</p>


        </div> */}
      </div>

      {
        historyData.map((el)=>{
          return <InterviewCards {...el}></InterviewCards>
        })
      }

       

      <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              
     <label htmlFor="title">Enter Title</label> 
     <br />        
    <Input type="text" placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)} />
    <br />
    <br />
    <label htmlFor="type">Select Interview type</label>  
    <br />
    <br />
    <RadioGroup >
  <Stack spacing={5} direction='row' value={type} onChange={(e)=>setType(e.target.value)} >
    <Radio colorScheme='green' value='Technical Interview' color="black">
    Technical Interview
    </Radio>
    <Radio colorScheme='green' value='HR Interview'>
    HR Interview
    </Radio>
  </Stack>
</RadioGroup>

<br />

        <Select
          placeholder="Select Interview Track"
          value={field}
          onChange={(e) => setField(e.target.value)}
        >
          <option value="MERN">MERN</option>
          <option value="Nodejs">Nodejs</option>
          <option value="Java">Java</option>
        </Select>

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
    <Footer/>
    </>
  );

};




export default Dashboard