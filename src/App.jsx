import { useState } from 'react'
import './App.css'
import Blogss from './Components/Blogss/Blogss'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const isExist = bookmarks.find(bkmk => bkmk.id == blog.id);
    if(!isExist) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
    else{
      alert("This blog is already added to the bookmarks")
    }
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='max-w-[1170px] mx-auto overflow-x-hidden p-4'>
      <Header></Header>
      <div className='md:flex gap-5'>
        <Blogss handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogss>
        <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </div>
    </div>
  )
}

export default App
