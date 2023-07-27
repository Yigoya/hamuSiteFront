import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { userLogout } from '../state';
function Nav() {
    const user = useSelector((s)=> s.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Logout = ()=>{
        dispatch(userLogout())
        navigate('/auth')
    }
  return (
    <nav>
        <div className='navleft'>
            <h2 onClick={()=>navigate('/')}>hamuSite</h2>
            <div className='search '>
            <span><SearchIcon style={{color: 'rgb(13, 189, 189)'}}/></span>
                <input type='text' placeholder='search to product ...' />
            </div>
        </div>
        <div className='inputs button'>
            <button>{user ? <Link to={`/cart/${user[0].id}`}>Carts</Link>:<Link to={`/auth`}>sign in</Link>}</button>
            <p onClick={()=> Logout()} className='change'>{user ? 'Logout':'sign up'}</p>
        </div>
    </nav>
  )
}

export default Nav