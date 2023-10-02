import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

        const [blogs, setBlogs] = useState([])

        useEffect(() =>{
               fetch('blogs.json')
               .then(res => res.json())
               .then(data => setBlogs(data))
        },[])
    return (
        <div className="md: w-2/3">
            <h3 className="text-2xl font-bold text-blue-950 text-center p-2">Blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    blogs: PropTypes.array,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;