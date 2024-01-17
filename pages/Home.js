import React, { useRef,useState,useEffect } from 'react';
import {LiaBicycleSolid} from 'react-icons/lia'
import HomeCard from './HomeCart';
import { useSelector } from 'react-redux';
import CardFeature from '../components/CardFeature';
import {GrPrevious,GrNext} from 'react-icons/gr';
import {PiForkKnifeBold} from 'react-icons/pi'
import FilterProduct from '../components/FilterProduct';
import AllProduct from '../components/AllProduct';

function Home(props) {
const productData=useSelector((state)=>state.product.productList)
console.log(productData)

const homeproductList=productData.slice(0,5);
const homeProductCartListVegetable=productData.filter(el=>el.category==='vegetable',[])


const loadingArray=new Array(4).fill(null)
const loadingArrayFeature=new Array(10).fill(null)

const slideProductRef=useRef()
function previousProduct(){
    slideProductRef.current.scrollLeft+=200 

}

function nextProduct(){

    slideProductRef.current.scrollLeft-=200 
}

const categoryList=[...new Set(productData.map(el=>el.category))]




    return (
        <div className='p-2 md:p-4'>
        <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
        <div className='flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full'>
        <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
        <LiaBicycleSolid className='text-2xl text-green-800'/>
        </div>

        <h2 className='text-4xl font-bold md:text-7xl py-3'>The Fasted Delivery  in<span className='text-red-500 text-7xl'> Your Home</span></h2>
        <p className='py-3 text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button className='font-bold bg-red-600 text-slate-200 px-4 py-2 rounded-md '>Order Now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>

        {
        
            homeproductList[0] ? homeproductList.map(el=>{
                return (
                    <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}/>
                    )       

            })
            :loadingArray.map((el,index )=>{
                return(
                    <HomeCard
                    key={index +"loading"}
                    loading={"Loading..."}/>
                )
            })
        }

        </div>
       
        </div>

        <div className=''>
        <div className='flex w-full items-center'>
        <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetable</h2>
        <div className='ml-auto flex gap-4'>
        <button onClick={previousProduct} className='bg-slate-300 hover:bg-slate-600 text-lg p-1 rounded '><GrPrevious/></button>
        <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-600 text-lg p-1 rounded'><GrNext/></button>
        </div>

        </div>
        <div className='flex gap-3 overflow-scroll scrollbar-none scroll-smooth transition' ref={slideProductRef}>
        {
            homeProductCartListVegetable[0] ?  homeProductCartListVegetable.map(el=>{
                return (
                    <CardFeature
                    key={el._id + "vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}/>
                )
            }):
            loadingArrayFeature.map((el,index)=> (
                <CardFeature loading="Loading..." key={index + "cartloading"}/>)
    )}
       
        
        </div>
        </div>

  <AllProduct heading="Your Product"/>
            
        </div>
    );
}

export default Home;