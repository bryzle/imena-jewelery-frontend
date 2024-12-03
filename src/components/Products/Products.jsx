import React,{useEffect,useState} from 'react';
import { loadStripe } from '@stripe/stripe-js';
/* import { products } from '../../utils/products'; */
import './Products.css';
import {getProducts} from '../../utils/api';


function Products() {
  const [products, setProducts] = useState([]);

  

 useEffect(() => {
  getProducts().then((data) => {
    console.log(data);
    setProducts(data.data);
  })
  console.log(products);
  

 },[])
  
  return (
    <div className='product-page'>
      <h1>Products</h1>
      <div className='product-list'>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.images} alt={product.name} className='product-item' />
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* const Products = () => {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              {product.currency.toUpperCase()} ${(product.price / 100).toFixed(2)}
            </p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}; */

export default Products;
