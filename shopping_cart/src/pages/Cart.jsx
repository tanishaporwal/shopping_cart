import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from '../components/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
  // const[selected, setSelected]=useState(false);
  const {cart}=useSelector((state)=>state);
  const[totalAmount, setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=>acc+curr.price,0));
  },[cart]);
  return <div className="ml-8 mr-8" >
    
    {
      cart.length>0 ?
      (<div className=" flex flex-col justify-center max-w-[1200px] mx-auto md:flex-row space-x-4 ml-6" ><div className="flex flex-col p-2 w-[100%] md:w-[60%] ">
        {cart.map((item,index)=>{
          return <CartItem key={item.id} item={item} itemIndex={index}/>
        })}</div>
        
        <div  className="w-[100%] md:w-[35%] h-full flex flex-col mt-5 ml-2 p-4">
          <div className="flex flex-col pl-0 p-5 gap-5 my-14  h-[100%] justify-between" >
            <div className="flex flex-col gap-2 ">
          <div className="text-green-800 text-md font-semibold">Your Cart</div>
          <div className="text-green-700 text-3xl font-semibold uppercase ">Summary</div>
          <p className="text-green-700 text-md mt-2 font-medium ">
          Total Items: <span className="">{cart.length} </span>
          </p>
          </div>
          </div>
          <div className="flex flex-col mt-10">
            <p className="text-md font-semibold">Total Amount: <span className="font-semibold">${totalAmount}</span></p>
            <button className=" mt-5 rounded-md hover:bg-purple-50 transition duration-300 ease-linear bg-green-700 text-white font-bold border-2 border-green-600 hover:text-green-700 p-1 text-xl ">Checkout Now</button>
          </div>
          </div></div>):
      (<div className="min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-gray-700 font-semibold text-xl mb-2">Empty Cart</h1>
      <Link to='/'>
        <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button></Link></div>)
    }
  </div>;
};

export default Cart;
