import React, { useRef, useState } from 'react'
import { login, register } from '../useFetch'
import { useDispatch } from 'react-redux';
import { setUser } from '../state';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate, useParams } from 'react-router-dom';

function Form() {
    const dispatch = useDispatch();
    const [userData,setUserData] = useState()
    const [isreg,setIsreg] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    const handleInput = (e)=>{
        setUserData((pre)=>({
            ...pre,
            [e.target.name]:e.target.value,
        }))
    }

    // const handleSelect = (e)=>{
    //     console.log(e.target.value)
    //     setAcc((pre)=>({
    //         ...pre,[e.target.value]:text
    //     }))
    //     setText(null)
    //     console.log(acc)
    // }
    const handleSubmit = async(e)=>{

        e.preventDefault()
        const res =isreg ? await register(userData) : await login(userData)
        dispatch(setUser(res))
        navigate(-1)
    }
    
  return (
    <div className='cont2'>
    <h1>{isreg ? 'Welcome to hamuSite':'welcome back'}</h1>
    <h3>{isreg ? 'SIGN UP to continue':'LOG IN to continue'}</h3>
    <form onSubmit={handleSubmit}>
        {isreg && (
        <div>
            <div className='inputs'>
            <span><PersonIcon style={{color: 'white'}}/></span>
            <input type='text' name='firstname' onChange={handleInput} placeholder='enter your first name' required/>
        </div>
        <div className='inputs'>
            <span><PersonIcon style={{color: 'white'}}/></span>
            <input type='text' name='lastname' onChange={handleInput} placeholder='enter your last name' required/>
        </div>
        </div>
        )}
        <div className='inputs'>
        <span><AlternateEmailIcon style={{color: 'white'}}/></span>
            <input type='email' name='email' onChange={handleInput} placeholder='enter your email' required/>
        </div>
        <div className='inputs'>
        <span><LockOpenIcon style={{color: 'white'}}/></span>
            <input type='text' name='password' onChange={handleInput} placeholder='enter your password' required/>
        </div>
        <div className='inputs'>
            <button>{isreg ? 'SIGN UP':'LOG IN'}</button>
        </div>
        <p className='ifyou'>{isreg ? 'if you already sign up':'if you don\'t have account'}</p>
        <p className='change' onClick={()=>setIsreg(!isreg)}>{isreg ? 'LOG IN':'SIGN UP'}</p>
    </form>

    </div>
  )
}

export default Form



{/* <input type='text' name='accounts' value={text} onChange={(e)=>setText(e.target.value)}  placeholder='enter your Full name'/>
        {text &&    <select onChange={handleSelect}>
                <option value=''>Choose Bank</option>
                <option value='CBE'>CBE</option>
                <option value='Awash Bank'>Awash Bank</option>
                <option value='Abyssinia Bank'>Abyssinia Bank</option>
                <option value='Dashen Bank'>Dashen Bank</option>
                <option value='Bunna Bank'>Bunna Bank</option>
                <option value='Berhan Bank'>Berhan Bank</option>
            </select> */}