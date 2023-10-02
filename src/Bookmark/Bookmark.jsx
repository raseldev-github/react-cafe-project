import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div>
            <h3 className='text-md font-medium bg-orange-300 p-4 rounded-md m-2 '>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
     bookmark: PropTypes.object,

    
}
export default Bookmark;