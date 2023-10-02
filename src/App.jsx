import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

       const [bookmarks, setBookmarks] = useState([])
       const [readingTime, setReadingTime] = useState(0)
      

const handleAddToBookmark = (blog,id) =>{
      const newBookmark = [...bookmarks,blog]
            const singleBookmark = bookmarks.find(bookmark => bookmark.id === id);
               if(singleBookmark){
                   return alert('You Do not add a item multiple time')
               }else{

                 setBookmarks(newBookmark)
               }
}

const handleMarkAsRead = (time,id) =>{
        const newReadingTime = readingTime + time;
           
        

          //  remove title 
  const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
           setBookmarks(remainingBookmark)

          
        if(readingTime >= '200'){
         
           return alert('No more read at a time')
        }else{
          setReadingTime(newReadingTime)
        }
}

  return (
    <>
      <Header></Header>
      <main className='flex max-w-4xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
