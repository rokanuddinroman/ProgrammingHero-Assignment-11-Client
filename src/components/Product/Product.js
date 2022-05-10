import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const navigate = useNavigate();

    const productDetails = id => {
        navigate(`/inventory/${id}`);
    }

    const { _id, image, productname, description, suppliername, quantity, price } = props.product;
    return (
        <div style={{
            border: " 2px solid gray",
            borderRadius: "5px"
        }}>
            <img className='product__thumbnail' style={{ cursor: "pointer" }} onClick={() => productDetails(_id)} src={image} alt="" />
            <div style={{ paddingBlock: "0px" }}>
                <h2 className='fancy__link'>{productname}</h2>
                <p>{description}</p>
            </div>
            <div style={{ paddingBlock: "0px" }}>{suppliername}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "0.5rem" }}><p style={{ fontWeight: "600" }}>{quantity} items remaining</p>
                <h3 style={{ fontSize: "32px", marginRight: "0.5rem" }}>{price}$</h3></div>
            <button onClick={() => productDetails(_id)} className='update__button'>Update</button>
        </div >
    );
};

export default Product;