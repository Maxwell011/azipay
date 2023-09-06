// function Navbar() {
//   return (
//     <nav>
//
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Nav.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='top-nav'>
      <h1>Azipay</h1>
      <div className='hamburger-menu'>
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <Link to='/'>Azipay logo</Link>
            <Link to='/'>Home</Link>
            <Link to='/individual'>Individual</Link>
            <Link to='/business'>Business</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/'>Set your payroll</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
