import { Link } from "react-router-dom";
import "../App.css";
import Freeforever from "/images/free-forever.9a58e2e5.png";
import Phonegif from "/images/payroll.372ea3c0.gif";
import Googlestore from "/images/google-store.af961bc5.png";
import Applestore from "/images/apple-store.1c73f0ba.png";
// import AudiencePattern from "/images/audience-patterns.5d18a20d.png"

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
          <p className='download-eazipay'>Download The Eazipay App</p>
          <div className='download'>
            <img
              src={Googlestore}
              alt='Google store'
              className='google-store'
            />
            <img src={Applestore} alt='Apple store' />
          </div>
        </section>
        {/* Section 2 */}
        <section className="section2 bg-[url('/images/audience-patterns.5d18a20d.png')] object-cover ">
          <div className='section2-headline'>
            <h1 className='section2heading'>For Individuals and Businesses</h1>
            <h3 className='small'>
              Join 200+ businesses using Eazi pay easy solution
            </h3>
          </div>
          <div className='boxes'>
            <div className='box1'>
              <h2 className='box-heading'>Tamper-proof Payroll for Life</h2>
              <ul className='box-content'>
                <li>Your staff payroll history is kept in one place forever</li>
                <li>No more excel sheet or manual records</li>
                <li>Download your payroll history anytime you need it</li>
              </ul>
            </div>

            <div className='box2'>
              <h2 className='box-heading box2heading'>
                All Payroll, Anytime Anywhere
              </h2>
              <ul className='box-content'>
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
              <ul className='box-content'>
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
        <section className='section4'>
          <div className='section4-heading'>
            <h1 className='section4-title'>How Eazipay Works</h1>
            <h3>Get started in 3 simple steps</h3>
          </div>
          <img src={Phonegif} alt='Free Forever image' className='iphone' />
          <div className='section4-bottom'>
            <div className='prepare-flex'>
              <p>03</p>
              <h2 className='prepare'>Prepare your Transaction</h2>
            </div>
            <p className='run-payroll'>
              Run payroll: Bulk salaried and Compliance are done at once
            </p>
          </div>
        </section>
        {/* section 5 */}
        <div className='section5'>
          <h2 className='section5-heading'>
            Free forever for your <span className='salary'>salary payment</span>
          </h2>
          <p>Get started in 3 simple steps</p>

          <img src={Freeforever} alt='Free Forever image' />
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
            <form className='form'>
              <p className='title'>Register </p>
              <p className='message'>
                Signup now and get full access to our app.{" "}
              </p>
              <div className='flex'>
                <label>
                  <input
                    required
                    placeholder='Enter FirstName'
                    type='text'
                    className='input'
                  />
                  <span>FirstName</span>
                </label>

                <label>
                  <input
                    required
                    placeholder='Enter Lastname'
                    type='text'
                    className='input'
                  />
                  <span>LastName</span>
                </label>
              </div>

              <label>
                <input
                  required
                  placeholder='Enter Email'
                  type='email'
                  className='input'
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required
                  placeholder='Enter Password'
                  type='password'
                  className='input'
                />
                <span>Password</span>
              </label>
              <label>
                <input
                  required
                  placeholder='Confirm password'
                  type='password'
                  className='input'
                />
                <span>Confirm password</span>
              </label>
              <button className='submit'>Submit</button>
              <p className='signin'>
                Already have an account ? <Link to='/signin'>Signin</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;

// this is the work of tomorrow is to fix the home page
