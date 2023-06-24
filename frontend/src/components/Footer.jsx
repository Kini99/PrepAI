import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div className='bg-black w-[100%] m-[auto] p-5 mt-3'>

        <div className='w-[30%] m-[auto] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2'>
           
        <div className="rounded-full   w-[35%] border-2 border-black-600 border-white">
    <FontAwesomeIcon icon={faFacebook} color='white' />
  </div>

  <div className="rounded-full   w-[35%] border-2 border-black-600 border-white">
    <FontAwesomeIcon icon={faTwitter} color='white' />
  </div>

  <div className="rounded-full   w-[35%] border-2 border-black-600 border-white">
    <FontAwesomeIcon icon={faLinkedin} style={{width:"100%"}} color='white' />
  </div>

  <div className="rounded-full   w-[35%] border-2 border-black-600 border-white">
    <FontAwesomeIcon icon={faInstagram} color='white' />
  </div>

  <div className="rounded-full   w-[35%] border-2 border-black-600 border-white">
    <FontAwesomeIcon icon={faYoutube} color='white' />
  </div>

        </div>

        <div className='w-[30%] m-[auto] mt-2'>
            <p className='text-white m-[2%]'>Terms & Conditions   |    Privacy Policy</p>
            <p className='text-white'>2023 © PrepAI</p>
        </div>

    </div>
    </>
  )
}

export default Footer