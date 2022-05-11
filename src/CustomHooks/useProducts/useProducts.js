import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        setSpinner(true);
        fetch('https://mighty-taiga-11756.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false);
            })
    }, [])
    return { products, setProducts, spinner };
};

export default useProducts;