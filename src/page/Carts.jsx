import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMyCart } from '../useFetch'
import DePosts from '../components/DePosts'

function Carts() {
    const params = useParams()
    const [data,setdData] = useState([])
    const getMycart = async ()=>{
        const res = await getMyCart(params.id)
        setdData(res)
    }
    useEffect(()=>{
        getMycart()
    },[])
    console.log(data)
  return (
    <div>
        {data.map((item)=>(
            <DePosts key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default Carts