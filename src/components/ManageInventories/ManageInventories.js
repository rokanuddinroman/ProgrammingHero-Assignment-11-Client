import React from 'react';
import useProducts from '../../CustomHooks/useProducts/useProducts';
import './ManageInventories.css'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
const ManageInventories = () => {
    const { products, setProducts } = useProducts([])
    const { spinner } = useProducts()

    const navigate = useNavigate();

    const productDetails = id => {
        navigate(`/inventory/${id}`);
    }

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
        <div className="container inventory__container">
            <div className=''>
                <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Manage Items</h1>
                <div className='product__rows'>
                    <div className='product__row__heading'>
                        <p>Product Name ({products.length})</p>
                        <p>Supplier</p>
                        <p>Price</p>
                        <p style={{ display: "flex", justifyContent: "space-between" }}>Quantity
                            <Link style={{ display: "flex", alignItems: "center" }} className='thin__button' to="/addproduct"><MdAdd />Add new item</Link>
                        </p>
                    </div>
                    {spinner && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                            <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" />
                        </div>
                    )}
                    {
                        products.map(product => <div className='product__row'>
                            <p className='product__name'>
                                <img src={product.image} alt="" />
                                {product.productname}</p>
                            <p>{product.suppliername}</p>
                            <p>{product.price}$</p>
                            <p className='quantity__column'>{product.quantity}
                                <span>
                                    <button onClick={() => productDetails(product._id)} className='icon__button'><FiEdit /></button>
                                    <button onClick={() => handleDelete(product._id)} className='icon__button'><RiDeleteBin5Line /></button>
                                </span>
                            </p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;