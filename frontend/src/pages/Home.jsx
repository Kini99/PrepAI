import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLock} from '@fortawesome/free-brands-svg-icons';
import { faLock ,faClock,faUser,faRobot} from '@fortawesome/free-regular-svg-icons';
// import {} from 
import { AiFillLock,AiOutlineUser,AiOutlineRobot} from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import {HiUsers} from "react-icons/hi";


const Home = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className='w-[80%] m-[auto]'>

        {/* <h2 className='m-[2%] text-2xl'>Product Features</h2> */}
        <h2 className='m-[2%] text-2xl font-bold'>Product Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className='shadow-xl p-10'>
            <div className="rounded-full w-[15%] flex justify-center m-[auto]">
              <AiFillLock size="30px"></AiFillLock>
            </div>

            <h4 className='m-[2%] font-semibold'>Secure Login</h4>
            <p>The Secure Login feature in the Prep AI application provides users with a secure and convenient way to access the platform using their personalized credentials. It offers multiple login options and employs robust security measures to protect user accounts and data.</p>
          </div>

          <div className='text-center shadow-xl p-10 '>
            <div className="rounded-full w-[15%] flex justify-center m-[auto] ">
              {/* <img src="https://placehold.co/400" alt="placehold" className='rounded-full w-[100%]' /> */}
              {/* <FontAwesomeIcon icon={faClock} /> */}
              {/* <FontAwesomeIcon icon={faClock} style={{width:"30%"}}/> */}
              <AiOutlineUser size="30px"/>
            </div>

            <h4 className='m-[2%] font-semibold'>Personalized Candidate Profile</h4>
            <p>The Personalized Candidate Profile feature in Prep AI enables job seekers to create tailored  profiles, prepare for interviews, save feedback, track their marks, and review them at any time.</p>
          </div>

          <div className='text-center shadow-xl p-10'>
            <div className="rounded-full w-[15%] flex justify-center m-[auto]">
            <HiUsers size="30px"></HiUsers>
            </div>

            <h4 className='m-[2%] font-semibold'>Robust Interview Management</h4>
            <p>Elevate your hiring process with the Interview Management feature in Prep AI. Designed to streamline candidate evaluation, this powerful functionality enables seamless AI interviews for practice of live interviews for in-depth assessments of personality and qualifications, and machine tests to effectively evaluate skills.</p>
          </div>

          <div className='text-center shadow-xl p-10'>
            <div className="rounded-full w-[15%] flex justify-center m-[auto]">
            <AiOutlineRobot size="30px"></AiOutlineRobot>
            </div>

            <h4 className='m-[2%] font-semibold'>Interview Review System</h4>
            <p>Simplify your interview review process with Prep AI's Interview Review System. Powered by AI, this feature enables candidates to effortlessly stay organized and stay informed about interview statuses. Seamlessly track and manage all current and upcoming interviews, ensuring efficient organization and real-time visibility into the progress of each interview. Stay on top of your hiring process with Prep AI's intuitive Interview Review System.</p>
          </div>

          <div className='text-center shadow-xl p-10'>
            <div className="rounded-full w-[15%] flex justify-center m-[auto]">
              
              <GrNotes size="30px"></GrNotes>
            </div>

            <h4 className='m-[2%] font-semibold'>Live Feedback</h4>
            <p>Experience real-time review and grading of interview responses with Prep AI's Live On-Spot Review feature. Powered by AI, this functionality allows instant assessment and feedback on candidate answers during interviews. Seamlessly analyze and grade interview responses on the spot, providing valuable insights for efficient decision-making. Elevate your interview process with Prep AI's cutting-edge Live On-Spot Review and grading capabilities.</p>
          </div>


        </div>

      </div>

      <div className='w-[95%] m-[auto]'>

        <h2 className='m-[2%] text-2xl font-bold'>Interview Preparation</h2>

        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Resume</h4>
            <p className='text-left'>A resume is the first step for any job profile. It depicts your entire professional career and serves as an introduction to the recruiters. Head over to our Resume Preparation Dashboard to know which skills to include in your resume.<br /><br />

              <ul className='list-disc'>
                <li>Internships</li>
                <li>Certifications</li>
              </ul>

            </p>

          </div>

          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/interview-skills-to-crack-the-interview.webp" alt="1" className='w-[100%]' />

          </div>

        </div>

        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>


          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/how-to-prepare-for-a-job-interview.webp" alt="1" className='w-[100%]' />

          </div>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Interview Puzzles</h4>
            <p className='text-left'>Puzzles check your Intelligence quotient and problem-solving skills. On PrepInsta’s Top 100 Puzzle dashboard, we have included the most common puzzles with their solutions.<br /><br />

              <ul className='list-disc'>
                <li>Josephus Puzzle</li>
                <li>Einstein Puzzle</li>
                <li>Sherlock Holmes Puzzle</li>
              </ul>

            </p>

          </div>

        </div>


        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Group Discussion</h4>
            <p className='text-left'>Group discussions or extempores check a candidate’s communication skills. They also test the general knowledge of a candidate. On PrepInsta, find the most popular group discussion round topics.<br /><br />

              <ul className='list-disc'>
                <li>Citizenship Amendment Act</li>
                <li>Facebook v/s LinkedIn</li>
                <li>Impact of AI</li>

              </ul>

            </p>

          </div>

          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/04/tips-to-crack-group-discussion.webp" alt="1" className='w-[100%]' />

          </div>

        </div>

        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>


          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/job-interview-questions-and-answers.webp" alt="1" className='w-[100%]' />

          </div>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Technical Interview</h4>
            <p className='text-left'>Technical Round or Technical Interview is mandatory round for all IT and software companies. Irrespective of their disciplines, candidates are asked technical and coding questions. Find our Technical Interview Dashboard to check out the most important topics in TR.<br /><br />

              <ul className='list-disc'>
                <li>DSA Advanced Technical Interview Questions</li>
                <li>JAVA Interview Questions</li>
                <li>C++ Interview Questions</li>

              </ul>

            </p>

          </div>

        </div>


        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>HR Interview</h4>
            <p className='text-left'>HR Interview is conducted to test communication, leadership, and other soft skills. On PrepInsta’s Top 60 HR Interview questions, get the most common questions asked in HR and the best way to answer them.<br /><br />

              <ul className='list-disc'>
                <li>Introduce Yourself</li>
                <li>What are your strengths and weaknesses?</li>
                <li>How much salary are you expecting?</li>
                <li>Where do you see yourself in five years?</li>
                <li>Internships</li>
                <li>Certifications</li>
              </ul>

            </p>

          </div>

          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/job-interview-preparation.webp" alt="1" className='w-[100%]' />

          </div>

        </div>

        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>


          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/interview-preparation-for-freshers.webp" alt="1" className='w-[100%]' />

          </div>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Managerial Round</h4>
            <p className='text-left'>Managerial Round focus on situational and behavioral questions. This round checks how a candidate will react in certain situations. The candidate has to answer, detailing their response/ experience for a specific situation.<br /><br />

              <ul className='list-disc'>
                <li>How will you react if your project deadlines suddenly decreases?</li>
                <li>What will you do if your boss continously criticise your work?</li>
                <li>How will you handle a team with internal conflicts?</li>

              </ul>

            </p>

          </div>

        </div>

        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Virtual Interview</h4>
            <p className='text-left'>Virtual Interviews or Remote Interviews are becoming popular in the last few years. Our Virtual Interview Dashboard consists of a complete guide on Remote/Virtual Interviews.<br /><br />

              <ul className='list-disc'>
                <li>Work From Home Ethics</li>
                <li>How to Sit for a Virtual Interview?</li>

              </ul>

            </p>

          </div>

          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/best-tips-for-an-interview.webp" alt="1" className='w-[100%]' />

          </div>

        </div>

        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>


          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/prepare-for-interview.webp" alt="1" className='w-[100%]' />

          </div>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Interview Experience</h4>
            <p className='text-left'>Reading interview experiences of candidates previously appearing for an interview gives an idea of what questions to expect. Check out our All Companies Interview Experience Dashboard to read the latest interview experiences of selected candidates.<br /><br />

              <ul className='list-disc'>
                <li>TCS Interview Experience</li>
                <li>Wipro Interview Experience</li>
                <li>Microsoft Interview Experience</li>

              </ul>

            </p>

          </div>

        </div>

        <div className='flex w-[65%] m-[auto] justify-between mt-2% gap-4 mt-1'>

          <div className='w-[60%]'>
            <h4 className='m-[2%] text-lg font-semibold'>Interview Questions</h4>
            <p className='text-left'>Different companies have different standards and criteria for questions they ask. Check out the All Companies Interview Questions Dashboard to know which questions to expect for a particular company.<br /><br />

              <ul className='list-disc'>
                <li>TCS Interview Questions</li>
                <li>Wipro Interview Questions</li>
                <li>Capgemini Interview Questions</li>
              </ul>

            </p>

          </div>

          <div className='w-[30%]'>

            <img src="https://prepinsta.com/wp-content/uploads/2022/05/20-tips-to-crack-an-interview.webp" alt="1" className='w-[100%]' />

          </div>

        </div>

      </div>



      <div className='w-[95%]'>

        <h2 className='m-[2%] text-2xl font-bold'>About</h2>

        <div className='w-[85%] m-[auto] flex justify-between md:flex xl:flex sm:flex'>

          <div className='w-[50%]'>
            <p>
              PrepAI uses artificial intelligence to revolutionize interview management. Our goal is for both employers as well as job seekers to be able to streamline their recruitment process, making it quicker and easier to hire the right person for the job. This helps employers quickly identify and assess potential candidates, find the right fit and reduce hiring time.

              <br /><br />

              PrepAI is the best system in the market when it comes to online interviews. We are aware of the importance of offering a safe and reliable method for conducting interviews. The system is simple to use and does not require any additional setup. You can start using it immediately.

              <br /><br />
              email: support@yvi.com<br />
              website : www.yvi.ai<br />
              Contact : +919072660080
            </p>


          </div>

          <div className='w-[40%] m -[auto] border-2 border-black-600 border-black p-3'>

            <h4 className='text-center mb-1'>Contact form</h4>

            <form action="">
              <input type="text" name="name" placeholder="First Name" id="" className='w-[80%] h-10 border-2 border-black-600 border-black p-2' />
              <br />
              <br />
              <input type="text" name="name" placeholder="Last Name" id="" className='w-[80%] h-10 border-2 border-black-600 border-black p-2' />
              <br />
              <br />
              <input type="email" name="name" placeholder="Email" id="" className='w-[80%] h-10 border-2 border-black-600 border-black p-2' />
              <br />
              <br />
              <input type="number" name="name" placeholder="Phone no" id="" className='w-[80%] h-10 border-2 border-black-600 border-black p-2' />
              <br />
              <br />
              <textarea type="text" name="name" rows="10" cols="50" placeholder="Message..." id="" className='w-[80%] h-10 border-2 border-black-600 border-black p-2'></textarea>
              <br />
              <br />
              <button className='bg-sky-500/75 p-2 text-white-600/100'>Send Message</button>
            </form>

          </div>

        </div>

      </div>
<Footer/>
    </>
  )
}

export default Home