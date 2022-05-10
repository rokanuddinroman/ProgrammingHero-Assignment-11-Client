import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBlogs from '../../CustomHooks/useBlogs/useBlogs';
import Overview from '../Overview/Overview';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([])
    const { blogs } = useBlogs()
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    if (window.location.reload == true) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" />
        </div>
    }

    return (
        <div>
            <div className="home">
                <div className="hero__section container">
                    <div className="hero__title">
                        <h1>Marvel Bangladesh</h1>
                        <h1>Warehouse</h1>
                        <p>Action! Packed! Discover the best Marvel merchandise at Marvel Bangladesh. The official site for Marvel clothes. toys. entertainment. collectibles and more. Your one-stop shop for all exciting, epic new items from the Marvel Cinematic Universe.
                        </p>
                    </div>
                    <div className="hero__image">
                        <img src="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Marvel%201-ck2casm5x018l01prannqymuo.png" alt="" />
                    </div>
                </div>
            </div>
            <Overview />
            <div className="products__section container">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 className='heading__2' style={{ marginBlock: "2rem", display: "inline" }}>Warehouse Products</h2>
                    <div style={{ textAlign: "center", display: "inline" }}>
                        <Link style={{ textDecoration: "none", padding: "5px 12px", borderRadius: "8px", backgroundColor: "black", color: "white", fontWeight: "600" }} to="/manageinventory">Manage All Inventories</Link >
                    </div>
                </div>
                <div className="product__items">
                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>

            </div>
            <div className='container'>
                <h2 className='heading__2' style={{ marginBlock: "2rem" }}>Blogs</h2>
                <div className="blogs">
                    {
                        blogs.map(blog => <article>
                            <img src={blog.thumbnail} alt="" />
                            <h2>
                                <Link to="/blogs">{blog.heading}</Link>
                            </h2>
                        </article>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;