import React from 'react'
import { useEffect } from 'react'

const Login = () => {

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res)=>{
      return res.json()
    }
    )
  
    .then((data)=>{
      console.log(data)
    })
  
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Login
