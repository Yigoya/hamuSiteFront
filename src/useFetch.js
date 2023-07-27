import axios from "axios"



export const itemPost = async(data,token)=>{
    const url = `${process.env.REACT_APP_SERVER}/item/post`
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
  }
    }
    const res = await axios.post(url,data)
    return res
}
export const ShopItem = async(data,token)=>{
    const url = `${process.env.REACT_APP_SERVER}/item/shop`
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`,
  }
    }
    const res = await axios.post(url,data)
    return res
}
export const getCatagory = async (token)=>{

    const url = `${process.env.REACT_APP_SERVER}/item/getCatagory`
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
            }
    }

    const res = await axios.get(url,options)
    return res.data
}
export const addCatagory = async (data,token)=>{

    const url = `${process.env.REACT_APP_SERVER}/item/addCatagory`
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
            }
    }
    const res = await axios.post(url,data,options)
}
export const addCart = async (data,token)=>{

    const url = `${process.env.REACT_APP_SERVER}/item/addCart`
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
            }
    }
    const res = await axios.post(url,data,options)
}
export const login = async(post)=>{
    const url = `${process.env.REACT_APP_SERVER}/auth/login`
    const config = {
        header:{
            'Authorization':'Bearer '
        }
    }
    const res = await axios.post(url,post,config)
    const data = res.data
    return data
}
export const register = async(post)=>{
    const url = `${process.env.REACT_APP_SERVER}/auth/register`
    const config = {
        header:{
            'Authorization':'Bearer '
        }
    }
    const res = await axios.post(url,post,config)
    const data = res.data
    return data
}
export const getFeed = async ()=>{
   const url = `${process.env.REACT_APP_SERVER}/item/get`
   const res = await axios.get(url)
   return res
}
export const getMyCart = async (id)=>{
    const url = `${process.env.REACT_APP_SERVER}/item/getMyCart/${id}`
    const res = await axios.get(url)
    return res.data
 }
export const getProductById= async (id) =>{
    const url = `${process.env.REACT_APP_SERVER}/item/get/${id}`
   const res = await axios.get(url)
   
   return res
}
export const postRate = async (data)=>{

    const url = `${process.env.REACT_APP_SERVER}/item/review`
    const options = {
        headers: {
            'Authorization': `Bearer `
            }
    }
    const res = await axios.post(url,data,options)
}
export const getRate= async (id) =>{
    const url = `${process.env.REACT_APP_SERVER}/item/review/${id}`
   const res = await axios.get(url)
   
   return res.data
}
export const postPayment = async (data)=>{

    const url = `${process.env.REACT_APP_SERVER}/item/bank`
    const options = {
        headers: {
            'Authorization': `Bearer `
            }
    }
    const res = await axios.post(url,data,options)
}
export const getBank= async (id) =>{
    const url = `${process.env.REACT_APP_SERVER}/item/bank`
   const res = await axios.get(url)
   
   return res.data
}
// axios.get('https://api.example.com/data')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   axios.delete('https://api.example.com/data/1')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   axios.post('https://api.example.com/data', { name: 'John', age: 25 }, {
//     headers: {
//       'Authorization': 'Bearer your-access-token',
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'User-Agent': 'Your User Agent String',
//       'Cache-Control': 'no-cache',
//       'Cookie': 'your-cookie=cookie-value'
//     }
//   })
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
  
// app.post('/data', (req, res) => {
//   const authorizationHeader = req.headers.authorization;
//   console.log(authorizationHeader);
//   // Process the authorization header or perform authentication/authorization logic
//   // ...
// });



// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'your-host',
//   user: 'your-user',
//   password: 'your-password',
//   database: 'your-database'
// });

// const databaseName = 'your-database-name';

// connection.query(
//   `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${databaseName}';`,
//   (error, results) => {
//     if (error) {
//       console.error(error);
//       return;
//     }

//     if (results.length > 0) {
//       console.log(`Database '${databaseName}' exists.`);
//     } else {
//       console.log(`Database '${databaseName}' does not exist.`);
//     }
    
//     connection.end();
//   }
// );
