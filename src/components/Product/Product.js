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
        <div>
            <Link to="inventory/:id"><img src={image} alt="" /></Link>
            <Link className='fancy__link' style={{ textDecoration: 'none', color: 'black' }} to="inventory/:id">
                <h2>{productname}</h2>
            </Link>
            <p>{description}</p>
            <div>{suppliername}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "0.5rem" }}><p>{quantity} items remaining</p>
                <h3 style={{ fontSize: "32px", marginRight: "0.5rem" }}>{price}$</h3></div>
            <button onClick={() => productDetails(_id)} className='update__button'>Update</button>
        </div>
    );
};

export default Product;