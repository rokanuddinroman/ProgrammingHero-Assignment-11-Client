import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useMyProduct = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    useEffect(() => {

        const getProducts = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myproduct?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyProducts(data)
            console.log(data)
        }
        getProducts()

    }, [user])
    return { myProducts, setMyProducts };
};

export default useMyProduct;