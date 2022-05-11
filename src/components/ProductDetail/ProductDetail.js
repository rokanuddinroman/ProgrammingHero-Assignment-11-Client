import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ProductDetail.css'
const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const url = `https://mighty-taiga-11756.herokuapp.com/product/${productId}`
        setSpinner(false);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSpinner(false);
                setProduct(data)
            })
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
        const url = `https://mighty-taiga-11756.herokuapp.com/product/${productId}`
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
        const url = `https://mighty-taiga-11756.herokuapp.com/product/${id}`
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
            {
                !spinner &&
                <div className="product__detail">
                    <img src={product.image} alt="" />
                    <div className='product__info'>
                        <h1>{product.productname}</h1>
                        <small style={{ display: "block", marginBlock: "0.5rem" }}>ProductId is {product._id}</small>
                        <div style={{ marginBlock: "0.5rem" }}><span style={{ fontWeight: "500" }}>Product of </span><span className="blue__badge">{product.suppliername}</span></div>
                        <hr />
                        <p>{product.description}</p>
                        <p className="quantity">{
                            product.quantity <= 0 ?
                                "No" : product.quantity
                        } items available.</p>
                        <h1 className="price">{product.price}$</h1>
                        <button onClick={() => handleDelivered(productId)} className='second__btn'>Delivered</button>
                        <br />
                        <div className="update__form" style={{ marginBlock: "0.8rem" }}>
                            <div><h1 className="heading">Update Stocks</h1></div>
                            <form onSubmit={handleUpdateStock}>
                                <input className='' type="number" name="quantity" placeholder='Enter Stocks' id="" />
                                <br />
                                <button className='dark__button' type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>

            }
            {
                spinner && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                    <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" />
                </div>
            }

            <div style={{ marginBlock: "1rem", textAlign: "center" }}>
                <Link style={{ textDecoration: "none", padding: "5px 12px", borderRadius: "8px", backgroundColor: "#e70c0f", color: "white", fontWeight: "600" }} to="/manageinventory">Manage All Inventories</Link >
            </div>

        </div>
    );
};

export default ProductDetail;