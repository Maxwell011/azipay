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
      <svg
        width='122'
        height='33'
        viewBox='0 0 122 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        data-v-836a08ee=''
      >
        <g clipPath='url(#clip0_463_19041)'>
          <path
            d='M34.4103 18.5811C34.3639 20.9874 32.8117 22.5842 30.2625 22.5842C28.6406 22.5842 27.6439 21.7975 27.6439 20.5477C27.6439 19.0672 28.8025 18.234 30.8416 18.234H34.4102V18.5811H34.4103ZM40.3423 21.7975C39.5777 21.7975 39.2069 21.6121 39.2069 20.6867V14.4162C39.2069 10.1587 36.3339 7.96094 31.375 7.96094C26.6709 7.96094 23.4966 10.2282 23.1491 13.6757H27.8527C28.0613 12.3802 29.3359 11.5242 31.2358 11.5242C33.2749 11.5242 34.4104 12.5423 34.4104 14.1387V14.9949H30.8881C25.5585 14.9949 22.7319 17.1236 22.7319 20.8946C22.7319 24.2732 25.4893 26.1007 29.3359 26.1007C32.0933 26.1007 33.9008 24.9673 35.1287 23.0007C35.1055 24.6898 35.8935 25.8928 38.4193 25.8928H40.8984V21.7975H40.3425H40.3423Z'
            fill='#11453B'
          ></path>
          <path
            d='M42.7987 12.2652H51.2794L42.4048 22.5847V25.8936H58.2546V21.7982H48.9624L57.8374 11.4785V8.16992H42.7987V12.2652Z'
            fill='#11453B'
          ></path>
          <path
            d='M59.6909 25.8936H64.6033V8.16992H59.6909V25.8936Z'
            fill='#11453B'
          ></path>
          <path
            d='M62.1468 6.27313C63.7228 6.27313 64.9738 5.09292 64.9738 3.54285C64.9738 1.96928 63.7227 0.789062 62.1468 0.789062C60.5482 0.789062 59.3198 1.96928 59.3198 3.54285C59.3198 5.09292 60.5482 6.27313 62.1468 6.27313Z'
            fill='#11453B'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M75.7031 22.1445C73.0381 22.1445 71.3697 20.039 71.3697 16.9848C71.3697 13.9998 73.0381 11.9174 75.7031 11.9174C78.3445 11.9174 80.0824 13.9998 80.0824 16.9848C80.0824 20.039 78.3444 22.1445 75.7031 22.1445ZM76.7685 7.96105C74.2432 7.96105 72.4588 9.0948 71.3005 10.6217V8.16903H66.5728V32.7877H71.4389V23.6487C72.5745 25.1059 74.3359 26.1009 76.7922 26.1009C81.565 26.1009 85.0181 22.5842 85.0181 17.0544C85.0181 11.4777 81.5651 7.93788 76.7686 7.96105H76.7685Z'
            fill='#11453B'
          ></path>
          <path
            d='M97.3683 18.5811C97.3219 20.9874 95.7692 22.5842 93.2205 22.5842C91.5982 22.5842 90.6018 21.7975 90.6018 20.5477C90.6018 19.0672 91.7605 18.234 93.7996 18.234H97.3682V18.5811H97.3683ZM103.3 21.7975C102.536 21.7975 102.165 21.6121 102.165 20.6867V14.4162C102.165 10.1587 99.2919 7.96094 94.3094 7.96094C89.6289 7.96094 86.4546 10.2282 86.1066 13.6757H90.7875C90.9959 12.3802 92.2935 11.5242 94.1706 11.5242C96.2097 11.5242 97.3684 12.5423 97.3684 14.1387V14.9949H93.8462C88.5165 14.9949 85.6899 17.1236 85.6899 20.8946C85.6899 24.2732 88.447 26.1007 92.2935 26.1007C95.0513 26.1007 96.8351 24.9673 98.0867 23.0007C98.0399 24.6898 98.8515 25.8928 101.354 25.8928H103.856V21.7975H103.3Z'
            fill='#11453B'
          ></path>
          <path
            d='M109.904 25.9858L109.464 27.166C108.977 28.3689 108.56 28.6929 107.309 28.6929H104.621V32.7882H109.348C112.105 32.7882 113.009 31.3309 114.121 28.4153L122 8.16992H116.786L112.569 20.7798L108.259 8.16992H103.068L109.904 25.9858H109.904Z'
            fill='#11453B'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.1559 21.0592C15.0614 22.4243 6.62708 16.5242 0 18.5834V23.3496C6.62708 21.2903 15.0614 27.1906 21.1559 25.8255V21.0592Z'
            fill='#11453B'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.1559 13.1687C15.0614 14.5337 6.62708 8.63356 0 10.6927V15.4595C6.62708 13.3998 15.0614 19.3 21.1559 17.958V13.1686V13.1687Z'
            fill='#11453B'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.1559 5.34788C15.0614 6.68984 6.62708 0.789582 0 2.84899V7.63833C6.62708 5.57915 15.0614 11.4794 21.1559 10.1143V5.34799V5.34788Z'
            fill='#11453B'
          ></path>
        </g>
        <defs>
          <clipPath id='clip0_463_19041'>
            <rect
              width='122'
              height='32'
              fill='white'
              transform='translate(0 0.789062)'
            ></rect>
          </clipPath>
        </defs>
      </svg>{" "}
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
            <Link to='/'>Azipay logo</Link>
            <div className="">
          <ul className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/individual'>Individual</Link>
            <Link to='/business'>Business</Link>
            <Link to='/login' className="login-btn">Login</Link>
            <Link to='/register' className="register-btn">Register</Link>
          </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
