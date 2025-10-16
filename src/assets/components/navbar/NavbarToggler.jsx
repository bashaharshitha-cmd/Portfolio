import { GiHamburgerMenu } from "react-icons/gi";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../framermotion/menuSlice";


const NavbarToggler = () => {
  
const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      onClick={setToggleMenu}
      className="text-2xl p-3 border border-orange rounded-full text-white flex items-center justify-center"
    >
       <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
