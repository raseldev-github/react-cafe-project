import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
      
    return (
        <div className='md: w-1/3 bg-gray-200 rounded-md ml-4 mt-4 p-4'>
              <div>
                <h4 className='text-xl font-bold text-amber-600'>Total Read Time: {readingTime}</h4>
              </div>
            <h2 className='text-xl font-bold text-white text-center bg-purple-400 p-2 rounded-md m-4'>Bookmarks Blogs: {bookmarks.length} </h2>
            {
              bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx} ></Bookmark>)  
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;