import React from 'react'
import Singlecontact from './Singlecontact';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareInstagram } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <Singlecontact link='https://github.com/bashaharshitha-cmd' Icon={FaGithub}/>
         <Singlecontact link="linkedin.com/in/harshitha-basha-9a6662222"/>
          <Singlecontact link='https://www.instagram.com/life_is_wondderful?igsh=dWJiYnN6OHdmNGQ5&utm_source=ig_contact_invite' Icon={FaSquareInstagram}/>
    </div>
  );
}; 

export default ContactSocial;