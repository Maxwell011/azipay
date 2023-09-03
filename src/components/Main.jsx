import { FaApple, FaGooglePlay } from "react-icons/fa";
import "../App.css";

const Main = () => {
  return (
    <>
      <main>
        {/* Section 1  */}
        <section className='first-section'>
          <h1 className='main-heading'>
            <span className='run'>Run your</span>{" "}
            <span className='payroll'>payroll</span>
            <br />
            <span className='easily'>easily</span>
            <span className='in'> in</span>
            <span className='seconds'> seconds</span>
          </h1>
          <p className='heading-paragraph'>
            We have built an all-inclusive simple solution for individuals and
            business to manage staff, pay salaries, bills and relevant taxes all
            at ones.
          </p>
          {/*  Button */}
          <button className='start-btn'>Start Using free, Forever</button>
          {/*  */}
          <p>Download The Eazipay App</p>
          <div className='download'>
            <button className='download-btn'>
              <FaGooglePlay className='googleplay-icon' />
              Get on Google Play
            </button>
            <button className='download-btn'>
              <FaApple />
              Download on Apple store
            </button>
          </div>
        </section>
        {/* Section 2 */}
        <section>
          <h1 className='section2heading'>For Individuals and Businesses</h1>
          <small>Join 200+ businesses using Eazi pay easy solution</small>
          <div className='boxes'>
            <div className='box1'>
              <h2 className='box-heading'>Tamper-proof Payroll for Life</h2>
              <ul>
                <li>Your staff payroll history is kept in one place forever</li>
                <li>No more excel sheet or manual records</li>
                <li>Download your payroll history anytime you need it</li>
              </ul>
            </div>
            <div className='box2'>
              <h2 className='box-heading'>All Payroll, Anytime Anywhere</h2>
              <ul>
                <li>
                  Wherever you are, Eazipay has got you covered on All your
                  payroll tasks
                </li>
                <li>
                  Whether is Taxes, pension Insurances HMOS, trustfunds, Eazipay
                  has got you covered on All your compliances In one place and
                  easily, In seconds
                </li>
              </ul>
            </div>
            <div className='box3'>
              <h2 className='box-heading'>Payroll In Seconds</h2>
              <ul>
                <li>
                  Never again will you spend more than 2 minutes to payroll
                </li>
                <li>Just click on your staff and bulk-pay them at once</li>
                <li>Payment is done permanently</li>
              </ul>
            </div>
          </div>
          <p className='small'>
            We are happy to answer your queries. Please reach us at
            hello@eazipay.com and expect our response shortly
          </p>
        </section>
        {/* section 4 */}
        <h1>How Eazipay Works</h1>
        <h3>Get started in 3 simple steps</h3>
        {/* Iphone image animation */} TODO:
        <h2>03 Prepare your Transaction</h2>
        <p>Run payroll: Bulk salaried and Compliance are done at once</p>
        {/* section 5 */}
        <h2>
          Free forever for your <span>salary payment</span>
        </h2>
        {/* Image */}
        <div className=''>
          <p>Download the Eazipay App today</p>
          <div className='btn'>
            <button className='download-btn'>
              <FaApple />
              Download on the Apple store
            </button>
            <button className='download-btn'>
              <FaGooglePlay />
              Get on Google Play
            </button>
          </div>
        </div>
        {/* Section 6 */}
        <div className='section-six'>
          <h2>Get an Exclusive Demo of Eazipay</h2>
          <div className='input-div'>
            <h3>First things first</h3>
            <p>
              We want to serve you better. Tell us a bit about yourself or
              company
            </p>
            <form action=''>
              {/* individual and companies */}
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Last Name' />
              <input type='email' placeholder='Email' />
              <button>Request Demo</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
