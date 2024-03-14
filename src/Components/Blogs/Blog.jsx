import React, { useEffect, useState } from 'react';

const Blogs = () => {

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
        <div>
            
        </div>
    );
};

export default Blogs;