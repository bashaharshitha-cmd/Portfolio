import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[message,setMessage]=useState('');
const[sucess,setSucess]=useState('');

const handleName=(e)=>{
  setName(e.target.value);
}
const handleEmail=(e)=>{
  setEmail(e.target.value);
}
const handleMessage=(e)=>{
  setMessage(e.target.value);
}


  const form=useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6gv8pii', 'template_tvxjknn', form.current, {
        publicKey: 'UqPPZ6QWRk0x3rIwd',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSucess('Message sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <p className='text-cyan'>{sucess}</p>
      <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input
        name="name" 
        value={name}
        onChange={handleName}
        type="text"
         placeholder='Your Name' required 
        className='h-12 rounded-lg bg-lightBrown px-2 text-white'/>
       
        <input 
        name="email"
        value={email}
        onChange={handleEmail}
        type="email" 
        placeholder='YourEmail' required
        className='h-12 rounded-lg bg-lightBrown px-2 text-white'/>
        
        <textarea 
        value={message}
        onChange={handleMessage}
        name="message"
        type="text" 
        placeholder='Message'
         rows="9"
          cols="50"
          className='rounded-lg bg-lightBrown p-2 text-white'/>
        <button 
        type="submit" 
        className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 '>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;