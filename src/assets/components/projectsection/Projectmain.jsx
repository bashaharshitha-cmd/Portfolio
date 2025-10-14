import React from 'react'
import Projecttext from './Projecttext'
import Singleproject from './Singleproject'
import { fadeIn } from '../../../framermotion/varients';
import { motion } from 'framer-motion';

const projects=[{
    name:"Restarent App",
    align:"right",
    image:"/images/im6.png",
    link:"https://cart-redux-de06e.web.app"

},
{
    name:"YouTube App",
    align:"left",
    image:"/images/im4.png",
    link: "https://you-app-b435a.web.app"

},
]
const Projectmain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4 '>
      <motion.div  
       variants={fadeIn('up',0.2)}
               initial="hidden"
                whileInView="show"
               viewport={{once:false ,amount:0}}>
 <Projecttext/>

      </motion.div>
       
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
{projects.map((item,index)=>{
    return <Singleproject key={index} name={item.name} align={item.align}image={item.image}  link={item.link}/>
   
})}
            
        </div>
    </div>
  );
};

export default Projectmain;