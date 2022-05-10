import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        setSpinner(true);
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false);
            })
    }, [])
    return { products, setProducts, spinner };
};

export default useProducts;