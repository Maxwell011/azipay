import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=''>
          <p>Azipay logo</p>
          <p>&copy; 2023 Your Website. All rights reserved.</p>
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaFacebookF />
        </div>
        <div>
          <p>Product</p>
          <ul>
            <li>Individual</li>
            <li>Business</li>
            <li>Request Demo</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <p>Legal</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
          </ul>
        </div>
        <div>
          <p>Resources</p>
          <ul>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Customer Stories</li>
          </ul>
        </div>
        <div>
          <p>Contact Us</p>
          <ul>
            <li>ezipay@gmail.com</li>
            <li>+2348168768762</li>
						<input type="text" />
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
