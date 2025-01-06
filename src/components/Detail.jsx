import React, { useContext } from 'react';
import context from '../context';
import { Navigate } from 'react-router-dom';

const Detail = () => {

//   const product = {
//     title: "Stylish Sneakers",
//     price: "79.99",
//     description:
//       "Experience unmatched comfort and style with these trendy sneakers. Perfect for casual outings, these sneakers are designed to keep you looking sharp and feeling great all day.",
//     images: [
//       "https://via.placeholder.com/300x200",
//       "https://via.placeholder.com/300x200",
//       "https://via.placeholder.com/300x200",
//     ],
//   };

    const {product, setProduct} = useContext(context)

    if(!product)
        return <Navigate to={'/product'} />

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="flex flex-col items-center">
            <img
              className="w-full h-96 object-contain rounded-lg shadow-md"
              src={product.image}
              alt={product.title}
            />
            {/* <div className="flex space-x-2 mt-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg border hover:opacity-75 cursor-pointer"
                />
              ))}
            </div> */}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="mt-2 text-lg text-gray-600">{product.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-blue-500">
                ${product.price}
              </span>
            </div>
            <div className="mt-6 space-x-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Details
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This sneaker features a breathable upper, cushioned sole, and
            durable build for everyday wear. It's available in various sizes and
            colors to match your style. Don't miss out on this perfect blend of
            comfort and fashion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
