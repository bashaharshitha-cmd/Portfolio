import React from 'react'
import Heromain from './assets/components/herosection/Heromain';
import Navbarname from './assets/components/navbar/Navbarname';
import Aboutmemain from './assets/components/aboutme/Aboutmemain';

import Skillmain from './assets/components/skillsection/Skillmain';
import Projectmain from './assets/components/projectsection/Projectmain';
import ContactMain from './assets/components/contactsection/ContactMain';
import Footermain from './assets/components/Footer/Footermain';

function App() {
  return (
    <div className='font-bold'>
      <Navbarname/>
      <Heromain/>
       <Aboutmemain/>
       
       <Skillmain/>
       <Projectmain/>
       <ContactMain/>
      
       <Footermain/>
        

    </div>
  ); 
};
 
export default App;