import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove} from '../redux/Slices/cartSlice';
import {toast} from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
  const dispatch=useDispatch();
  const removeItem=()=>{
     dispatch(remove(item.id));
     toast.success("Item removed");
  }
  return  <div className="flex items-center justify-between md:p-5 mt-2 md:mx-5 border-b-2">
            <div className="flex flex-col md:flex-row items-center p-0 md:p-3 gap-4" >
              <div className="w-[30%]">
                <img src={item.images} className="object-cover"/>
              </div>
              <div className="md:ml-10 self-start p-2 space-y-3 w-[100%] md:w-[70%]">
          <h1 className=" text-md text-slate-700 font-bold">{item.title}</h1>
          <h1 className="text-xs text-slate-700 ">{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
        
        <div className=" flex justify-between items-center">
          <p className="text-green-600 text-md font-bold">${item.price}</p>
          <div onClick={removeItem} className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full  p-3 mr-3 "><MdDelete />
          </div>
      </div>
      </div>
      </div>
  </div>;
};

export default CartItem;
