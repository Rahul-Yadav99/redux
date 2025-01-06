import React, { useEffect, useState } from 'react'
import Card from './Card'

const Product = () => {

    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProducts(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    
  return (
    <div className='bg-gray-100 py-6 min-h-screen'>
        <div className='bg-white p-6 rounded-lg w-8/12 m-auto'>
            <div className='grid grid-cols-4 gap-8'>
                {
                    products.map((item, index) => (
                        <Card 
                            key={index} 
                            image={item.image} 
                            title={item.title} 
                            price={item.price} 
                            description={item.description} 
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Product
