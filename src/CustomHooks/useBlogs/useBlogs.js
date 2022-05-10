import React from 'react';

const useBlogs = () => {
    const blogs = [
        {
            "thumbnail": "https://www.howtogeek.com/wp-content/uploads/csit/2021/02/c123ee3a.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1",
            "heading": "Deference between Javascript and Node?",
            "paragraph": "Node is primarily the running environment for Javascript. Where Javascript is mainly a Programming Language. On the other hand Javascript mostly used for Client Side unlike the NodeJs. NodeJS is a backend Framework. File handling in Database is posible with Nodejs. But Javascript can't do it."

        },
        {
            "thumbnail": "https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png",
            "heading": "When should you use node.js and when should you use mongodb?",
            "paragraph": "NodeJS is mainly a backend Framework. Which used to built server sides. Where MongoDB is NoSQL database. We use MongoDB to host our data. On the other hand NodeJS make us posibble to do that. We use NodeJS for building a server. And Host the Data in MongoDB."

        },
        {
            "thumbnail": "https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/5352985413550080/6335716377231360/image/6014788594302976",
            "heading": "Deference between SQL and NoSQL?",
            "paragraph": "SQL and NoSQL both are database types. SQL is mainly the Relational Database model and NoSQL is Non Relational Database model. SQL hoid the data in Structured tables. NoSQL saves data in Dynamic Schema. SQL is Table based but NoSQL is Document based."

        }
    ]
    return { blogs };
};

export default useBlogs;