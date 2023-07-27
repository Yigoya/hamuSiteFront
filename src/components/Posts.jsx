import React from 'react'
import { Link } from 'react-router-dom'

function Posts({item}) {
  return (
    <Link to={`/product/${item.id}`}>
        <div className='post'>
            <p className='title'>{item.name}</p>
            <img src={`${process.env.REACT_APP_SERVER}/assets/${item.productimage}`}/>
            <p className='click'>click to see more</p>
        </div>
    </Link>
  )
}

export default Posts