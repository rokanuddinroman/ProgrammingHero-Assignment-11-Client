import React from 'react';
import useProducts from '../../CustomHooks/useProducts/useProducts';
import './ManageInventories.css'
const ManageInventories = () => {
    const { products } = useProducts([])
    return (
        <div className='container inventory__container'>
            <div className='product__rows'>
                <div className='product__row__heading'>
                    <p> Product Name</p>
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
                                <button>Delete</button>
                                <button>Edit</button>
                            </span>
                        </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;