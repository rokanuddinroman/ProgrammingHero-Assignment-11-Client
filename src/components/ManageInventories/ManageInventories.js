import React from 'react';
import useProducts from '../../CustomHooks/useProducts/useProducts';
import './ManageInventories.css'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
const ManageInventories = () => {
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
        <div className='container inventory__container'>
            <div className='product__rows'>
                <div className='product__row__heading'>
                    <p>Product Name</p>
                    <p>Supplier</p>
                    <p>Price</p>
                    <p>Quantity</p>
                </div>
                {
                    products.map(product => <div className='product__row'>
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
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;