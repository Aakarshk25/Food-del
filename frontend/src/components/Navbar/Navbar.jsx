// import React, { useState, useContext } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext); // Accessing getTotalCartAmount from StoreContext

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/")
//   }

//   return (
//     <div className='navbar'>
//       <Link to='/home'><img src={assets.logo} alt="Logo" className='logo' /></Link>
//       <ul className="navbar-menu">
//         <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
//         <a to='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//         <a to='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
//         <a to='#contact-us' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
//       </ul>
//       <div className='navbar-right'>
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//           <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
//           {/* Conditional rendering for the cart dot based on getTotalCartAmount */}
//           <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//         </div>
//         {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
//           : <div className='navbar-profile'>
//             <img src={assets.profile_icon} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//               <hr />
//               <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//             </ul>
//           </div>}

//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext); // Accessing getTotalCartAmount from StoreContext
  const navigate = useNavigate(); // Hook for navigation

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/"); // Navigate to home after logout
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;



