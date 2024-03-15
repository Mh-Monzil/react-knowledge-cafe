import React from 'react';
import PropTypes from 'prop-types'
import SingleBookmark from '../SingleBookmark/SingleBookmark';

const Bookmark = ({bookmarks, readingTime}) => {
    console.log(bookmarks);
    return (
        <div className='mt-8'>
            <div className='text-center border-2 border-purple-400 p-5 rounded-lg bg-purple-50'>
                <p className='text-purple-500 text-xl font-semibold'>Spent time on read : {readingTime} min</p>
            </div>
            <div className='bg-purple-300 p-4 my-3 rounded-xl'>
                <p className='my-3 text-2xl font-semibold'>Bookmarked Blogs: {bookmarks.length}</p>
                {
                    bookmarks.map((bookmark, idx) =><SingleBookmark key={idx} bookmark={bookmark} ></SingleBookmark>)
                }
            </div>
        </div>
    );
};
Bookmark.propTypes ={
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.object.isRequired,
}
export default Bookmark;