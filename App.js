import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import  { Toaster } from 'react-hot-toast';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setDataProduct} from './redux/CreateSlide'

function App() {
  
  
  const dispatch=useDispatch()
  const productData=useSelector((state)=>state.product)
  useEffect(()=>{
    (async()=>{
      const res=await fetch(`${process.env.REACT_APP_SERVICE_DOMAIN}products`)
      const resData=await res.json()
      console.log(res)
      dispatch(setDataProduct(resData))
    })()
  },[])
  console.log(productData)

  return (
    <>
    <Toaster/>
    <div >
      <Header/>
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
      <Outlet/>
      </main>
    </div>
    </>
  );
}

export default App;
