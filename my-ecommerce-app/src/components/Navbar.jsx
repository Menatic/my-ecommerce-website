import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { useDarkMode } from '../context/DarkModeContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishListContext'; // Import useWishlist

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { totalItems } = useCart();
  const { state: wishlistState } = useWishlist(); // Use the wishlist context

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">ShopMate</Link>
        <div className="d-flex">
          <button onClick={toggleDarkMode} className="btn btn-outline-secondary me-2">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link to="/wishlist" className="btn btn-outline-light me-2 position-relative">
            <AiOutlineHeart size={20} />
            {wishlistState.wishlist.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {wishlistState.wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="btn btn-outline-light position-relative">
            <AiOutlineShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;