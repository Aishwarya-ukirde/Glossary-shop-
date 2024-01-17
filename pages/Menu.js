import React from 'react';
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import AllProduct from '../components/AllProduct';
import { addCartItem } from '../redux/CreateSlide';

function Menu(props) {
    const {filterBy}=useParams()
    const dispatch=useDispatch()
    const productData=useSelector(state=>state.product.productList)

    const productDisplay=productData.filter(el=>el._id === filterBy)
    const handleAddCartProduct=(e)=>{
       
        dispatch(addCartItem(productDisplay))
      

    }
    
    return (
        <>
        <div className='p-2 md:p-4'>
         <div className='w-full max-w-3xl m-auto bg-white md:p-4 md:flex'>
         <div className=' w-1/2 overflow:hidden '>
     <img src={productDisplay[0]?.image} alt='' className=' hover:scale-105 transition-all'/>
         </div>
         <div className='flex flex-col gap-1 ml-4'>
         <h3 className='font-semibold  capitalize text-3xl text-slate-600 md:text-4xl'>
         {productDisplay[0]?.name}
         </h3>
         <p className=' text-slate-500 font-medium text-2xl'>{productDisplay[0]?.category}</p>
         <p className=" font-bold text-2xl">
         <span className='text-red-500'>&#8377;</span>
         <span> {productDisplay[0]?.price}</span>
        
         </p>

         <div className='flex gap-3'>
         <button className='bg-yellow-500 py-1 my-5 mt-2 rounded hover:bg-yellow-700 min-w-[100px]'>Buy</button>
         <button onClick={handleAddCartProduct} className='bg-yellow-500 py-1 my-5 mt-2 rounded hover:bg-yellow-700 min-w-[100px]'>Add Cart</button>
         </div>
       <div className=''>
       <p className='text-slate-800 font-medium'>Description:</p>
       <p>{productDisplay[0]?.description}</p>
       </div>
         </div>
        
         
         </div>  

         <AllProduct heading="Related Product"/>
        </div>
        </>
    );
}

export default Menu;