import React from 'react';
import PropTypes from 'prop-types';
import { BiSolidBookmarks } from "react-icons/bi";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    const {author, author_img, cover, hashtags, posted_date, reading_time, title} = blog;
    return (
        <div className='border-t-[1px] border-gray-300 pt-7 '>
            <img className='w-full rounded-lg ' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6 mt-8'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='font-semibold text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='font-medium text-xl text-gray-500'>{reading_time} min read
                    </p>
                    <div onClick={() => handleAddToBookmark(blog)}  className='text-2xl text-rose-500 cursor-pointer'>
                        <BiSolidBookmarks />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-[40px] font-bold'>{title}</h2>
                <div className='space-x-4'>
                    {
                        hashtags.map((hash, idx) => <span key={idx} className='text-xl font-medium text-gray-500'>{hash}</span>)
                    }
                </div>
                <button onClick={() => handleMarkAsRead(reading_time)}  className='text-xl text-purple-600 font-semibold my-4 underline'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;