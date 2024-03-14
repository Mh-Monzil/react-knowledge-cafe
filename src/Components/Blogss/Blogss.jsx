import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog'
import PropTypes from 'prop-types'

const Blogss = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    const getFakeData = async() => {
        const res = await fetch("../../../public/blogs.json");
        const data = await res.json();
        setBlogs(data);
    }

    useEffect(() => {
        getFakeData();
    },[])
    return (
        <div className='md:w-2/3'>
            {/* <h1 className='text-2xl'>Blog</h1> */}
            {
                blogs.map(blog => <Blog blog={blog} handleAddToBookmark={handleAddToBookmark} 
                handleMarkAsRead={handleMarkAsRead}
                key={blog.id}></Blog>)
            }
        </div>
    );
};

Blogss.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blogss;