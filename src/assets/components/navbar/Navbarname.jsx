import React,{useState} from 'react'
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import Navbarbtn from './Navbarbtn';


import { GiHamburgerMenu } from "react-icons/gi";
const Navbarname = () => {
  const[menuOpen,setmenupen]=useState(false);
const toogleMenuopen=()=>{
  setmenupen(!menuOpen); 
}
  return (
     <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        <NavbarLogo />
      <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}> 
  <NavbarLinks />
    
</div>
        
      <Navbarbtn/>
        </div>
        
        <div className='flex lg:hidden sm:block '>
<button onClick={toogleMenuopen} className='text-2xl p-3 border border-orange rounded-full text-white  items-center justify-center '>

<GiHamburgerMenu />
</button>
        </div>

    </nav>
  );
};

export default Navbarname;