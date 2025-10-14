import React from 'react'
import Contactinfo from './Contactinfo';
import ContactSocial from './ContactSocial';

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src="/images/im2.jpeg" alt="contact-me"
        className='max-w-[300px] h-[200px]'/>
        <Contactinfo/>
        <ContactSocial/>
    </div>
  );
};

export default ContactRight;