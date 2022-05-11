import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddProduct.css'
const AddProduct = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault()
        const myProduct = {
            email: user.email,
            productname: event.target.productname.value,
            description: event.target.description.value,
            image: event.target.image.value,
            suppliername: event.target.suppliername.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value
        }
        axios.post('https://mighty-taiga-11756.herokuapp.com/product', myProduct)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product Added')
                }
            })


    }

    return (
        <div className="background__fluid">
            <div className='container addproduct__form'>
                <div className='background'></div>
                <div style={{
                    backgroundColor: "white",
                }}>
                    <form onSubmit={handleAddItem}>
                        <h2 style={{ marginBottom: "0.5rem" }}>Add Item</h2>
                        <input className='addproduct__input' type="text" name="productname" id="" placeholder='Product Name' required />
                        <br />
                        <input className='addproduct__input' type="text" name="description" id="" placeholder='Description' required />
                        <br />
                        <input className='addproduct__input' type="text" name="image" id="" placeholder='Image URL' required />
                        <br />
                        <input className='addproduct__input' type="text" name="suppliername" id="" placeholder='Supplier Name' required />
                        <br />
                        <input className='addproduct__input' type="number" name="price" id="" placeholder='Price' required />
                        <br />
                        <input className='addproduct__input' type="number" name="quantity" id="" placeholder='Quantity' required />
                        <br />
                        <input style={{ width: "50%", marginLeft: "-3px", padding: "10px", borderRadius: "8px", marginTop: "0.5rem", cursor: "pointer", backgroundColor: "black", fontWeight: "600", color: "white" }} className='' type="submit" value="Add Product" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;