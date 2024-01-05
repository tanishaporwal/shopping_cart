import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return( <div className="">
    <nav className="flex justify-between items-center h-[3rem] max-w-6xl mx-auto">
    <NavLink to="/">
    <div className="ml-[5rem]">
   <img src="..\logo.png" className="h-10"/>
   </div>
    </NavLink>
    <div className="flex items-center font-medium text-green-600 mr-[5rem] space-x-6">
    <NavLink to="/">
    
     <p>Home</p>
    
    </NavLink>
    <NavLink to='/cart'>
      <div className="relative">
      <FiShoppingCart />
      {
        cart.length>0 && (<span className="absolute -top-1 -right-2 bg-slate-700 text-[#eef0f2] text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full">{cart.length}</span>)
      }
      
      </div>
      
      
    </NavLink>
    </div>
    </nav>
    
  </div>
)};

export default Navbar;
