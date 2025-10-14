import React from 'react'
import Singlecontact from './Singlecontact';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareInstagram } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <Singlecontact link='https://github.com/bashaharshitha-cmd' Icon={FaGithub}/>
         <Singlecontact link='https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=harshitha-gowda-9a6662222'
          Icon={CiLinkedin}/>
          <Singlecontact link='#' Icon={FaSquareInstagram}/>
    </div>
  );
}; 

export default ContactSocial;