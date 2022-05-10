import React from 'react';
import useBlogs from '../../CustomHooks/useBlogs/useBlogs';
import './Blogs.css'
const Blogs = () => {
    const { blogs } = useBlogs()
    return (
        <div className='container blogs__container'>

            {
                blogs.map(blog => <div>
                    <h2>{blog.heading}</h2>
                    <p>{blog.paragraph}</p>
                </div>)
            }

        </div>
    );
};

export default Blogs;