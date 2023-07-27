import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../useFetch'
import DePosts from '../components/DePosts'
import RateForm from '../components/RateForm'
import ShopForm from '../components/ShopForm'
import { useSelector } from 'react-redux'

function Product() {
  const user = useSelector((s)=> s.user)
  const navigate = useNavigate()
    const params = useParams()
    const [data,setData] = useState([])
    const [item,setItem] = useState()
    const [isShop,setIsShop] = useState(false)
  const [isRate,setIsRate] = useState(false)
    const getItems = async ()=>{
        const res = await getProductById(params.id)
        setData(res.data)
    }
    useEffect(()=>{
        getItems()
    },[])

    if((!user && isShop) || (!user && isRate)){
      navigate(`/auth`)
    }
    var key= Math.ceil(Math.random()*100)

  return (
    <div >
      <div className='desc'>
      <h1>hover to buy or add to cart</h1>
      <p>we have {data.length} similar items choose that you wish</p>
      </div>
    <div className='homecont'>
    {data.map((item)=>(
      <DePosts setIsShop={setIsShop} setItem={setItem} setIsRate={setIsRate} key={item.id} item={item}/>
    ))}
    </div>
    {isRate && (
          <div className='cont shop'>
            
            <RateForm key={item.id} product_id={item.id} setIsRate={setIsRate}/>
          </div>
        )}
        {isShop && (
          <div className='cont shop'>
            <ShopForm key={key} setIsShop={setIsShop}/>
          </div>)}
    </div>
  )
}

export default Product