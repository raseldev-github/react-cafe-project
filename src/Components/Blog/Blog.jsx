import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    // console.log(blog);
    const { id, cover, author, author_img, title, hashtags, posted_date, reading_time } = blog;
    return (
        <div className='mb-16 space-y-4'>
            <img className='mb-6 w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex justify-start items-center gap-4 mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-md'>{author}</h4>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog,id)} className='text-red-600'><FaBookmark/></button>
                </div>
            </div>
            {/* lower part part */}
              <h3 className='text-3xl font-medium mb-2'>{title}</h3>
              <p>
                {
                  hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash} </a></span>)
                }
              </p>
              <button className='text-red-500 underline' onClick={() =>handleMarkAsRead(reading_time,id)}>mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;