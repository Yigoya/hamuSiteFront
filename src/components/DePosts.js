import React, { useEffect, useState } from 'react'
import { addCart, getRate } from '../useFetch'
import { useSelector } from 'react-redux'
import ShopForm from './ShopForm'
import { useNavigate } from 'react-router-dom'
import RateForm from './RateForm'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
function DePosts({ item,setIsRate,setIsShop,setItem }) {
  const user = useSelector((s)=> s.user)
  const navigate = useNavigate()
  const [rates,setRates] = useState([])
  const [star,setstar] = useState(0)
  const getReview = async ()=>{
    const res = await getRate(item.id)
    setRates(res)
  }
  useEffect(()=>{
    getReview()
  },[])
  const addToCart = async (e)=>{
    if(user){
    const res = await addCart({user_id:user[0].id,product_id:item.id})
    }else{
      navigate(`/auth`)
    }
  }
  let value = 0
  rates.forEach(element => {
    value = value + element.value
  });
  value = Math.ceil(value/rates.length)
  
  return (
    <div className='post'>
        <img src={`${process.env.REACT_APP_SERVER}/assets/${item.productimage}`}/>
        <div>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}  <span>birr</span></p>
            <p>Description: {item.description}</p>
        </div>
        <div className=' button purch'>
            <button onClick={addToCart}>{item.user_id ? 'Remove':'Add to Carts'}</button>
            <p onClick={()=>setIsShop(true)} className='change'>Shop Now</p>
            <p onClick={()=>{
              setIsRate(true)
              setItem(item)
            }} className='change'>give rating</p>
        </div>
        <div className='starpage'>
        <p onClick={()=>setstar(1)}>{value >=1 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(2)}>{value >=2 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(3)}>{value >=3 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(4)}>{value >=4 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(5)}>{value >=5 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        </div>
    </div>
  )
}

export default DePosts