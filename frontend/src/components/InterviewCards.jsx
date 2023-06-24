import React from 'react'

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

import { useNavigate } from 'react-router-dom'

const InterviewCards = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    const handleClick = () =>{

    }

    const date = new Date();
    let options = { weekday: 'short' };
let day = date.toLocaleDateString('en-US', options);

let options_1 = { month: 'short' };
let month = date.toLocaleDateString('en-US', options_1);


let date_value = date.getDate();
// let month = date.getMonth() + 1;
let year = date.getFullYear();
    return (
        <>
            <div className='w-[95%] m-[auto] p-4 bg-slate-100 mt-3'>

                <div className="bg-white border-4 border-indigo-200 border-y-indigo-500 shadow-xl w-[30%] p-2">

                    <div className='flex items-center gap-4 justify-around'>

                        <div className='w-[45px] overflow-hidden rounded-[6px] bg-[#F2F7FF] text-center'>

                            <div className='bg-[#85A9EF] pb=[3px] text-[8px] font-medium text-[#21191B] text-sm'>{day}</div>
                            <div className='text-xl font-semibold text-[#21191B]'>{date_value}</div>
                            <div className='mb-1 text-sm font-medium text-[#6C6768]'>{month}</div>

                        </div>

                        <div className='w-[200px] truncate text-xl font-semibold'>{localStorage.getItem("title")}</div>

                        <div className='right-[35px] top-[24px] p-1 rounded-[6px] border-[0.5px] border-solid border-[#3470E4] bg-[#F2F6FF] P-[6px] text-center'>
                            <div className='text-base font-semibold text-[#5D8DE9]'>5.0</div>
                            <div className='text-[6px] font-medium text-[#3B3435]'>Round score</div>
                        </div>

                    </div>

                    <button className='bg-blue-500/75 p-2 text-white-600/100' >Review Interview</button>

                    <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              
     <label htmlFor="title">Enter Title</label> 
     <br />        
    <Input type="text" placeholder='Enter title' />
    <br />
    <br />
  
    <label htmlFor="type">Select Interview type</label>  
    <br />
    <br />
    <RadioGroup >
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='green' value='1' color="black">
    Technical interview
    </Radio>
    <Radio colorScheme='green' value='2'>
    HR Interview
    </Radio>
  </Stack>
</RadioGroup>

<br />


<Select placeholder='Select Interview Track'>
  <option value='MERN'>MERN</option>
  <option value='Nodejs'>Nodejs</option>
  <option value='java'>Java</option>
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

            </div>
        </>
    )
}

export default InterviewCards