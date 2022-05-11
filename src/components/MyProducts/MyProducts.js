import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ProductRow from '../ProductRow/ProductRow';
import './MyProducts.css'

const MyProducts = () => {
    const [spinner, setSpinner] = useState(false);
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    useEffect(() => {

        const getProducts = async () => {
            setSpinner(true);
            const email = user.email;
            const url = `https://mighty-taiga-11756.herokuapp.com/myproduct?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setSpinner(false);
            setMyProducts(data)
            console.log(data)
        }
        getProducts()

    }, [user])

    return (
        <div className="container">
            <h1 style={{ textAlign: "center", marginTop: "2rem" }}>My Items</h1>

            <div className='product__rows'>
                <div className='product__row__heading'>
                    <p>Product Name ({myProducts.length})</p>
                    <p>Supplier</p>
                    <p>Price</p>
                    <p style={{ display: "flex", justifyContent: "space-between" }}>Quantity
                        <Link style={{ display: "flex", alignItems: "center" }} className='thin__button' to="/addproduct">Add new item</Link>
                    </p>
                </div>
                {
                    spinner && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                        <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" />
                    </div>
                }
                {
                    myProducts.map(myProduct => <ProductRow product={myProduct}></ProductRow>)
                }
            </div>
        </div>
    );
};

export default MyProducts;