import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import '../css/Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact-us">
          <p className="contact">Contact Us</p>
          <ul>
            <li className="gmail">ezipay@gmail.com</li>
            <li className="number">+2348168768762</li>
            <input type='text' placeholder="Your Email Address" />
          </ul>
        </div>

        <div className="services">
        <div>
          <p className="contact">Product</p>
          <ul>
            <li>Individual</li>
            <li>Business</li>
            <l className="desktop">Request Demo</l>
            <li className="desktop">Pricing</li>
          </ul>
        </div>
        <div>
          <p className="contact">Legal</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
          </ul>
        </div>
        </div>       
        <div className="desktop">
          <p>Resources</p>
          <ul>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Customer Stories</li>
          </ul>
        </div>
        <div className=''>
          <p>Azipay logo</p>
          <p>&copy; 2023 Your Website. All rights reserved.</p>
          <FaInstagram className="social-icons"/>
          <FaTwitter className="social-icons"/>
          <FaLinkedinIn className="social-icons"/>
          <FaFacebookF className="social-icons"/>
        </div>
      </footer>
    </>
  );
};
export default Footer;
