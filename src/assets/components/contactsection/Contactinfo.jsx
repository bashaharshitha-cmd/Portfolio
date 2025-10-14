import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Singleinfo from './Singleinfo';

const Contactinfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
    
      <Singleinfo text="harshithabasha70@gmail.com" Image={MdOutlineEmail}/>
      <Singleinfo text="+91 7989393362" Image={FaPhoneAlt}/>
      <Singleinfo text="Andhra Pradesh, India" Image={IoLocationOutline}/>
    </div>
  );
};

export default Contactinfo;
