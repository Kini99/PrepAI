import React from 'react'
import InterviewCards from '../components/InterviewCards'

// import PropTypes from 'prop-types';

// const ScoreIndicator = ({ score }) => {
//   const calculateRotation = (score) => {
//     return (score / 100) * 180;
//   };
// }
//   const indicatorRotation = calculateRotation(score);


const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to PrepAI, UserName</h1>
      <button className='bg-sky-500/75 p-2 text-white-600/100 m-[auto] mt-2 mb-2'>Start New Interview</button>

      <div className='w-[95%] m-[auto] flex justify-between mt-3'>
        <div className='bg-sky-500/70 shadow-xl w-[75%] p-2 border-r-5'>
          {/* <p>Interview Practice Details</p> */}

          <p className='font-bold text-left'>Great job on completing your interview</p>
          <br />

          <p className='text-left'>Results have been generated for the previous attempt. Complete all your interviews
           to unlock your Profile Scorecard.</p>

         
        </div>

        <div className='bg-white shadow-xl w-[20%]'>
          <p className='font-bold'>Profile Score</p>

          {/* <div className="w-24 h-12 rounded-full relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-200 rounded-full"></div>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-blue-500 rounded-full"
        style={{
          transform: `rotate(${indicatorRotation}deg)`,
          transformOrigin: 'bottom center',
        }}
      ></div>
    </div> */}






        </div>
      </div>

       <InterviewCards></InterviewCards>
    </div>
  )
}

// ScoreIndicator.propTypes = {
//   score: PropTypes.number.isRequired,
// };

export default Dashboard