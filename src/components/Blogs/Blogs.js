import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container blogs__container'>

            <div>
                <h2>Deference between Javascript and Node?</h2>
                <p>Node is primarily the running environment for Javascript. Where Javascript is mainly a Programming Language. On the other hand Javascript mostly used for Client Side unlike the NodeJs. NodeJS is a backend Framework. File handling in Database is posible with Nodejs. But Javascript can't do it.</p>
            </div>
            <div>
                <h2>When should you use node.js and when should you use mongodb??</h2>
                <p>NodeJS is mainly a backend Framework. Which used to built server sides. Where MongoDB is NoSQL database. We use MongoDB to host our data. On the other hand NodeJS make us posibble to do that. We use NodeJS for building a server. And Host the Data in MongoDB.</p>
            </div>
            <div>
                <h2>Deference between SQL and NoSQL?</h2>
                <p>SQL and NoSQL both are database types. SQL is mainly the Relational Database model and NoSQL is Non Relational Database model. SQL hoid the data in Structured tables. NoSQL saves data in Dynamic Schema. SQL is Table based but NoSQL is Document based.</p>
            </div>

        </div>
    );
};

export default Blogs;