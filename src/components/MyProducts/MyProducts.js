import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
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
        <div className='container'>
            <p>Your Products {myProducts.length}</p>
        </div>
    );
};

export default MyProducts;