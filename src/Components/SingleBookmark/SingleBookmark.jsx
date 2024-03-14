import React from 'react';
import PropTypes from 'prop-types'

const SingleBookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-lg'>
            <h3>{title}</h3>
        </div>
    );
};
SingleBookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default SingleBookmark;