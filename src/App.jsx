import { useState } from 'react'
import './App.css'
import Blogss from './Components/Blogss/Blogss'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time);
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
