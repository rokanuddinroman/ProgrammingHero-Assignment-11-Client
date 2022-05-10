import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ProductDetail.css'
const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    const handleUpdateStock = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        if (parseInt(quantity) < 0) {
            toast("Your input is not acceptable")
            return;
        }
        console.log("Quantity", quantity)
        const newQuantityNumber = parseInt(quantity) + parseInt(product.quantity);
        const newQuantityString = String(newQuantityNumber);
        console.log("newQuantityString", newQuantityString)
        const updatedStock = { newQuantityString };
        const url = `http://localhost:5000/product/${productId}`
        console.log(updatedStock, url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                // alert('updated')
                event.target.reset()
            })

    }

    const handleDelivered = id => {
        if (product.quantity <= 0) {
            toast("This Product is Sold Out")
            return;
        }
        const currentQuantity = parseInt(product.quantity) - 1;
        const newQuantityString = String(currentQuantity)
        const updatedStock = { newQuantityString };
        const url = `http://localhost:5000/product/${id}`
        console.log(updatedStock, url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                // alert('updated')
                // event.target.reset()
            })
    }


    return (
        <div className='container '>
            <div className="product__detail">
                <img src={product.image} alt="" />
                <div className='product__info'>
                    <h1>{product.productname}</h1>
                    <small style={{ display: "block", marginBlock: "0.5rem" }}>ProductId is {product._id}</small>
                    <p>{product.description}</p>
                    <span className="blue__badge">{product.suppliername}</span>
                    <p className="quantity">{
                        product.quantity <= 0 ?
                            "No" : product.quantity
                    } items available.</p>
                    <h1 className="price">{product.price}$</h1>
                    <button onClick={() => handleDelivered(productId)} className='second__btn'>Delivered</button>
                    <br />
                    <div><h1 className="heading">Update Stocks</h1></div>
                    <div style={{ marginBlock: "0.8rem" }}>
                        <form onSubmit={handleUpdateStock}>
                            <input className='' type="number" name="quantity" placeholder='Enter Stocks' id="" />
                            <button className='dark__button' type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ marginBlock: "1rem", textAlign: "center" }}>
                <Link style={{ textDecoration: "none", padding: "5px 12px", borderRadius: "8px", backgroundColor: "#e70c0f", color: "white", fontWeight: "600" }} to="/manageinventory">Manage All Inventories</Link >
            </div>

        </div>
    );
};

export default ProductDetail;