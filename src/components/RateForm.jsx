import React, { useEffect, useRef, useState } from 'react'
import { getRate, postRate } from '../useFetch'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import { useSelector } from 'react-redux';
function RateForm({product_id,setIsRate}) {
    const user = useSelector((s)=>s.user)
    const [star,setstar] = useState(0)
    const [rates,setRates] = useState([])
    const descriptionRef = useRef()
    const getReview = async ()=>{
      const res = await getRate(product_id)
      setRates(res)
    }
    useEffect(()=>{
      getReview()
    },[])
    
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {
          value:star,
          comment:descriptionRef.current.value,
          user_id:user[0].id,
          product_id:product_id
        }
        const res = await postRate(data)
        setstar(0)
        descriptionRef.current.value = ""
    }
    return (
        <div className='cont2'>
        
        <form onSubmit={handleSubmit}>
        <div className='comments'>
        {rates.map((item)=>(
        <div className='comment'>
          <div>
            <p>{item.firstname}</p>
            <div className='star'>
        <p onClick={()=>setstar(1)}>{item.value >=1 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(2)}>{item.value >=2 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(3)}>{item.value >=3 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(4)}>{item.value >=4 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(5)}>{item.value >=5 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        </div>
          </div>
          <p className='com'>{item.comment}</p>
        </div>
        ))}
        </div>
        <div className='star'>
        <p onClick={()=>setstar(1)}>{star >=1 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(2)}>{star >=2 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(3)}>{star >=3 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(4)}>{star >=4 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        <p onClick={()=>setstar(5)}>{star >=5 ? <StarIcon style={{color:'rgb(255, 193, 89)'}}/>:<StarOutlineIcon />}</p>
        </div>
            <div className='inputs'>
            <span><DescriptionIcon style={{color: 'white'}}/></span>
                <textarea ref={descriptionRef} placeholder='write your comment ...' name="description" cols="40" rows="5"></textarea>
            </div>
            
            <div className='inputs'>
                <button> Post </button>
                <p onClick={()=>setIsRate(false)} className='change'>back</p>
            </div>
        </form>
    
        </div>
      )
}

export default RateForm