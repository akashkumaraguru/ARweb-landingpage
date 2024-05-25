import Logo from "../assets/design_a_logo_for__Leo_designs__this_is_design (1)-01.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import {useState} from 'react';


const Navbar = () => {

  const[mobileDrawOpen , setmobileDrawOpen] = useState(false);

  const toggleNavbar =() =>{
    setmobileDrawOpen(!mobileDrawOpen);
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">

        <div className="flex  justify-between items-center container px-10 mx-auto relative  text-sm">
          
           <div className="flex items-center flex-shrink-0">
            <img className=" h-10 w-10 mr-2" src={Logo} alt="logo" />
            <span className="text-xl tracking-tight text-white">
              VirtualReality
            </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            <li className='flex gap-10'>
              <a href="#" className='hover:text-blue-200'>Features</a>
              <a href="#" className='hover:text-blue-200' >Workflow</a>
              <a href="#" className='hover:text-blue-200' >Pricing</a>
              <a href="#" className='hover:text-blue-200' >Testimonials</a>
            </li>
          </ul>

          <div className='hidden lg:flex justify-around gap-10 ml-20 items-center '>
            <a href="#" className='py-2 px-3 border rounded-md hover:bg-blue-600 hover:border-none' >Sign in</a>
            <a href="#" className='bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md hover:bg-black '>Create Account</a>
          </div>

         <div className='lg:hidden md:flex flex-col justify-end'>
          <button onClick={toggleNavbar}>         
          {mobileDrawOpen ? <IoClose className='size-[32px]' />: <RxHamburgerMenu className='size-[32px]' /> }   
          </button>
         </div>

         {mobileDrawOpen &&(
          <div className='fixed right-0 z-20 top-[50px] py-10 gap-10 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
              <a href="#" className='hover:text-blue-200'>Features</a>
              <a href="#" className='hover:text-blue-200' >Workflow</a>
              <a href="#" className='hover:text-blue-200' >Pricing</a>
              <a href="#" className='hover:text-blue-200' >Testimonials</a>

              <div className='flex space-x-6'>
              <a href="#" className='py-3 px-6 border rounded-md hover:bg-blue-600 hover:border-none' >Sign in</a>
            <a href="#" className='bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-6 rounded-md hover:bg-black '>Create Account</a>
                </div>    
          </div>
         )}
         
      </div>
    </nav>
  );
};

export default Navbar;
