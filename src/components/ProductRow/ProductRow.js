import React from 'react';
import useProducts from '../../CustomHooks/useProducts/useProducts';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const ProductRow = (props) => {
    const { product } = props
    const { products, setProducts } = useProducts([])

    const handleDelete = id => {
        const proceed = window.confirm('Sure?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }
    return (
        <div className='product__row'>
            <p className='product__name'>
                <img src={product.image} alt="" />
                {product.productname}</p>
            <p>{product.suppliername}</p>
            <p>{product.price}$</p>
            <p className='quantity__column'>{product.quantity}
                <span>
                    <button className='icon__button'><FiEdit /></button>
                    <button onClick={() => handleDelete(product._id)} className='icon__button'><RiDeleteBin5Line /></button>
                </span>
            </p>
        </div>
    );
};

export default ProductRow;