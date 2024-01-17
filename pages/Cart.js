import React from 'react';
import { useSelector } from 'react-redux';
import CardProduct from './../components/CardProduct';

function Cart(props) {
    const productCartItem=useSelector((state)=>state.product.cartItem)
    console.log(productCartItem)
    
    return (
        <div className='p-2 md:p-4'>
           <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your cart items</h2> 
        {/*  display cart items*/} 
        <div className='w-full max-w-3xl'>
        {
            productCartItem.map(el=>{
                return(
            <CardProduct key={el._id}
            id={el._id}
            name={el.name}
            image={el.image}
            category={el.category} 
            qty={el.qty}
            total={el.total} 
            price={el.price}   />)
                
            })
        }
   

                {/*  total cart items*/} 

           <div className=''></div>
           </div>
        </div>
    );
}

export default Cart;