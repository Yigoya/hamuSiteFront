import React, { useEffect, useRef, useState } from 'react'
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FlagIcon from '@mui/icons-material/Flag';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useSelector } from 'react-redux';
import { ShopItem, getBank, postPayment } from '../useFetch';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function ShopForm({ setIsShop}) {
    const user = useSelector((s)=>s.user)
    const [userData,setUserData] = useState()
    const [isreg,setIsreg] = useState(false)
    const [catagory,setCatagory] = useState([])
    const catagoryRef = useRef()
    const [text,setText] = useState(null)
    const nameRef = useRef()

    const getCatagories = async()=>{
        let value = await getBank()
            setCatagory(value)
        }
        useEffect(()=>{
            getCatagories()
        },[])
    const handleInput = (e)=>{
        setUserData((pre)=>({ 
            ...pre,
            [e.target.name]:e.target.value,
            ['user_id']:user[0].id
        }))
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(userData)
        await ShopItem(userData)
        const data = {
            user_id:user[0].id,
            payment_type_id:text,
            accountno:nameRef.current.value
        }
        await postPayment(data)
        setIsShop(false)
    }
  return (
    <div className='cont2'>
        <form onSubmit={handleSubmit}>
            <div className='inputs'>
            <span><PublicIcon style={{color: 'white'}}/></span>
            <input type='text' name='country' onChange={handleInput} placeholder='enter your country' required/>
        </div>
        <div className='inputs'>
            <span><FlagIcon style={{color: 'white'}}/></span>
            <input type='text' name='region' onChange={handleInput} placeholder='enter your region' required/>
        </div>
        <div className='inputs'>
        <span><LocationCityIcon style={{color: 'white'}}/></span>
            <input type='text' name='city' onChange={handleInput} placeholder='enter your city' required/>
        </div>
        <div className='inputs'>
        <span><ContactMailIcon style={{color: 'white'}}/></span>
            <input type='text' name='address_line' onChange={handleInput} placeholder='enter your address line' required/>
        </div>
        
        <p>enter your account number</p>
        <div className='inputs'>
            <span><CategoryIcon style={{color: 'white'}}/></span>

                <select onChange={(e)=>setText(e.target.value)} name='calagory' >
                        <option value=''>choose BANK</option>
                    {catagory.map((item)=>(
                        <option value={item.id}>{item.value}</option>
                    ))}
                </select>
            </div>

        <div className='inputs'>
                <span><AccountBalanceIcon style={{color: 'white'}}/></span>
                <input ref={nameRef} type='text' name='name' placeholder='enter your Full name'/>
            </div>
            <button>Shop</button><p className='change' onClick={()=>setIsShop(false)}>Back</p>
       
    </form>
    </div>
  ) 
}

export default ShopForm