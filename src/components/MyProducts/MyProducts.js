import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProductRow from '../ProductRow/ProductRow';
import './MyProducts.css'

const MyProducts = () => {

    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    useEffect(() => {

        const getProducts = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myproduct?email=${email}`
            const { data } = await axios.get(url);
            setMyProducts(data)
            console.log(data)
        }
        getProducts()

    }, [user])

    return (
        <div className='container product__rows'>
            <div className='product__row__heading'>
                <p>Product Name ({myProducts.length})</p>
                <p>Supplier</p>
                <p>Price</p>
                <p>Quantity</p>
            </div>
            {
                myProducts.map(myProduct => <ProductRow product={myProduct}></ProductRow>)
            }
        </div>
    );
};

export default MyProducts;