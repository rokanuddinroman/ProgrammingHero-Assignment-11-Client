import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='home'>
            <div className="hero__section container">
                <div className="hero__title">
                    <h1>Marvel Bangladesh</h1>
                    <h1>Warehouse</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla animi molestias suscipit optio quod harum quisquam debitis cupiditate facere.
                    </p>
                </div>
                <div className="hero__image">
                    <img src="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Marvel%201-ck2casm5x018l01prannqymuo.png" alt="" />
                </div>
            </div>
            <div className="products__section container">
                <h2>Warehouse Products</h2>
                <div className="product__items">
                    {
                        products.slice(0, 5).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;