
import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between p-4 border-b-2 max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;