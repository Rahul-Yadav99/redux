import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import context from '../context'


const Card = ({ image, title, price, description, item}) => {

    const navigate = useNavigate()

    const {product, setProduct} = useContext(context)

    const openproduct = (item) => {
        setProduct(item);
        navigate('/detail')
    }
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border">
      <img 
        className="w-72 h-72 object-cover m-auto" 
        src={image} 
        alt={title} 
      />
      <div className="p-4">
        <button onClick={()=>openproduct(item)}>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </button>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-500">${price}</span>
          <button 
            // onClick={onAddToCart} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
