import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setUser } from './state';
import { itemPost, login } from './useFetch';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Login from './page/Auth';
import Post from './page/Post';
import Product from './page/Product';
import Nav from './components/Nav';
import Carts from './page/Carts';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useEffect, useState } from 'react';
function App() {
  const token = useSelector((s)=>s.token);
  const [pre,setPre]=useState(true)
  useEffect(()=>{
    setTimeout(()=>setPre(false),3000)

  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Login />}/>
          <Route path='/post' element={<Post />} />
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart/:id' element={<Carts />}/>
        </Routes>
      </BrowserRouter>
      {pre && (
        <div className='preload'>
          <div>
            <p className='p'>HamuSite</p>
            <p className='span'><LocalGroceryStoreIcon style={{fontSize:'40px' ,paddingTop:'8px'}}/></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

