import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteCartItem,increaseQty,decreseQty } from '../redux/CreateSlide';

function CardProduct({id,name,image,category,qty,price,total}) {
    const dispatch=useDispatch()


    return (
        <div className='bg-slate-200 p-2 flex gap-4 rounded border border-slate-300'>
<div className='bg-white p-3 rounded overflow-hidden'>
<img src={image} className="h-28 w-32 object-cover" alt=''/>
</div>


<div className='flex flex-col gap-1 w-full '>
<div className='flex justify-between'>
<h3 className='font-semibold  capitalize text-lg text-slate-600 md:text-xl'>
{name}
</h3>
<span className='cursor-pointer text-slate-500 hover:text-red-700' onClick={()=>dispatch(deleteCartItem(id))}><MdDelete/></span>
</div>
<p className=' text-slate-500 font-medium '>{category}</p>
<p className=" font-bold">
<span className='text-red-500'>&#8377;</span>
<span> {price}</span>

</p>
<div className='flex justify-between'>
<div className='flex gap-3 items-center'>
<button className='bg-slate-300 py-1 my-5 mt-2 rounded hover:bg-slate-400  p-1' onClick={()=>dispatch(increaseQty(id))} ><FaPlus/></button>
<p className='font-semibold'>{qty}</p>
<button onClick={()=>dispatch(decreseQty(id))} className='bg-slate-300 py-1 my-5 mt-2 rounded hover:bg-slate-400 p-1'><LuMinus/></button>
</div>
<div className='flex items-center gap-2 font-bold'>
<p>Total:</p>
<p>{total}</p>
</div>
</div>
</div>
        </div>
    );
}

export default CardProduct;
