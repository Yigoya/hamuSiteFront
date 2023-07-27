import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getFeed } from '../useFetch';
import { Link, useRoutes } from 'react-router-dom';
import Posts from '../components/Posts';

function Home() {
  const [data,setData] = useState([])

  const getFeeds = async ()=>{
    const res = await getFeed()
    setData(res.data)
  }
  useEffect(()=>{
    getFeeds()
  },[])
  return (
    <div >
    <div className='desc'>
      <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
    </div>
    <div className='homecont'>
      {data.map((item,index)=>(
        <Posts key={index} item={item}/>
      ))}
      </div>
    </div>
  )
}

export default Home