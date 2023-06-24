import React, { useState } from 'react';
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

const Dashboard = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title,setTitle]=useState("");
  const [type,setType]=useState("");
  const [field,setField]=useState("");
  const navigate=useNavigate();

  const handleClick=()=>{
    localStorage.setItem("field",field);
    localStorage.setItem("type",type);
    localStorage.setItem("title",title);
navigate("/interview");
  }
  // Sample data for average scores
  const averageScores = {
    overall: 7.8,
    technical: 8.2,
    hr: 7.4
  };

  // Sample data for individual technical and hr scores
  const individualScores = {
    technical: [8.5, 8.0, 8.7, 7.9, 8.2],
    hr: [7.5, 7.8, 7.2, 7.9, 7.6]
  };

  const initialsFromName = (name) => {
    const names = name.split(' ');
    const initials = names.map((name) => name.charAt(0).toUpperCase()).join('');
    return initials;
  };

  const calculateAverageScore = (scores) => {
    const totalScores = Object.values(scores);
    const sum = totalScores.reduce((accumulator, score) => accumulator + score, 0);
    const average = sum / totalScores.length;
    return average.toFixed(1); // Round to 1 decimal place
  };

  // Calculate overall average score
  const overallAverage = calculateAverageScore(averageScores);

  // Chart data for average scores
  const chartData = {
    labels: ['Overall', 'Technical', 'HR'],
    datasets: [
      {
        label: 'Average Score',
        data: [overallAverage, averageScores.technical, averageScores.hr],
        backgroundColor: ['#4F46E5', '#34D399', '#F87171'],
      },
    ],
  };

  Chart.register(LinearScale);

  // Navbar component
  const Navbar = () => (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800">
      <div className="flex items-center">
        <div className="text-white font-semibold text-lg">Interview Prep</div>
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={onOpen}>
          Start Interview
        </button>
      </div>
      <div className="flex items-center">
        <div className="text-white mr-4">{initialsFromName('John Doe')}</div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </nav>
  );

  return (
    <div>
      <Navbar />
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
          // className="hidden"
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
  );
};

export default Dashboard;

