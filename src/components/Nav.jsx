import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
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
    </nav>
  );
}

export default Navbar;
