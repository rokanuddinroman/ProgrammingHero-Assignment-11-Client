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
        axios.post('http://localhost:5000/myproduct', myProduct)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product Added')
                }
            })


    }

    return (
        <div className='container'>
            <form onSubmit={handleAddItem}>
                <input type="text" name="productname" id="" placeholder='Product Name' required />
                <br />
                <input type="text" name="description" id="" placeholder='Description' required />
                <br />
                <input type="text" name="image" id="" placeholder='Image URL' required />
                <br />
                <input type="text" name="suppliername" id="" placeholder='Supplier Name' required />
                <br />
                <input type="number" name="price" id="" placeholder='Price' required />
                <br />
                <input type="number" name="quantity" id="" placeholder='Quantity' required />
                <br />
                <input type="submit" value="Add Product" />
            </form>

        </div>
    );
};

export default AddProduct;