import React, { useEffect, useRef, useState } from 'react'
import { addCatagory, getCatagory, itemPost } from '../useFetch'
import { useSelector } from 'react-redux';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import CategoryIcon from '@mui/icons-material/Category';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
function PostForm() {
    const [userData,setUserData] = useState()
    const [add,setAdd] = useState(false)
    const [catagory,setCatagory] = useState([])
    const [text,setText] = useState(null)
    const nameRef = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()
    const catagoryRef = useRef()
    const formData = new FormData()
    const token = useSelector((s)=>s.token)
    console.log(token)
    // const handleInput = (e)=>{
    //     formData.append(e.target.name,e.target.value)
    //     // setUserData((pre)=>({
    //     //     ...pre,
    //     //     [e.target.name]:e.target.value,

    //     // }))

    // }
    const addCatagor = async (e)=>{
        await addCatagory({name:catagoryRef.current.value},token)
    }
        const getCatagories = async()=>{
            let value = await getCatagory(token)
            setCatagory(value)
        }
        useEffect(()=>{
            getCatagories()
        },[])
        console.log(catagory)
    const handleFile = (e)=>{
            formData.append('productimage',e.target.files[0].name,)
            formData.append('picture',e.target.files)
            for(let i =0; i < e.target.files.length; i++) {
                formData.append("files", e.target.files[i]);
            }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        formData.append('name',nameRef.current.value)
        formData.append('price',priceRef.current.value)
        formData.append('description',descriptionRef.current.value)
        formData.append('catagory_id',text)
        const res = await itemPost(formData,token)
        console.log(res)
        formData.delete('name')
        formData.delete('price')
        formData.delete('description')
        formData.delete('catagory')
        
    }
    return (
        <div className='cont2'>
        <h3>post your product to market</h3>
        <form onSubmit={handleSubmit}>
            <div>
                
            <div className='inputs'>
                <span><PriceChangeIcon style={{color: 'white'}}/></span>
                <input ref={priceRef} type='number' step='0.001' name='price'  placeholder='enter your Full name'/>
            </div>
            <div className='inputs'>
            <span><CategoryIcon style={{color: 'white'}}/></span>

                <select onChange={(e)=>setText(e.target.value)} name='calagory' onClick={()=>setAdd(!add)} >
                        <option value=''>catagory of the product</option>
                    {catagory.map((item)=>(
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
                {add && (<div className='inputsadd'>
                    <input ref={catagoryRef} onChange={(e)=>setText(catagory.length)} name='calagory' type='text' placeholder='add mode'/>
                    <button type='button' onClick={addCatagor} >add catagory</button>
                </div>)}
                
            </div>
                </div>
            <div className='inputs'>
            <span><ImageIcon style={{color: 'white'}}/></span>

                <input type='file' placeholder='click to select or drag and drop' name='picture' onChange={handleFile} />
            </div>
            <div className='inputs'>
            <span><DescriptionIcon style={{color: 'white'}}/></span>
                <textarea ref={descriptionRef} placeholder='write product description ...' name="description" cols="40" rows="5"></textarea>
            </div>
            
            <div className='inputs'>
                <button> Post </button>
            </div>
        </form>
    
        </div>
      )
}

export default PostForm