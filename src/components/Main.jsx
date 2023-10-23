import "../App.css";
import FreeForever from "/images/free-forever.9a58e2e5.png";
import PhoneGif from "/images/payroll.372ea3c0.gif";
import GoogleStore from "/images/google-store.af961bc5.png";
import AppleStore from "/images/apple-store.1c73f0ba.png";
import PinkPattern from "/images/pink-pattern.png";
import New from "../components/New";

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
          <button className='start-btn'>Start Using free, Forever</button>
          <p className='download-eazipay'>Download The Eazipay App</p>
          <div className='download'>
            <img src={GoogleStore} alt='Google store' className='store' />
            <img src={AppleStore} alt='Apple store' className='store' />
          </div>
        </section>
        {/* Section 2 */}
        <section className='section2'>
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
                  payroll tasks.
                </li>
                <li>
                  Whether is Taxes, pension Insurances HMOS, trustfunds, Eazipay
                  has got you covered on All your compliances In one place and
                  easily, In seconds.
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
            hello@eazipay.com and expect our response shortly after.
          </p>
        </section>
        {/* section 4 */}
        <section className='section4'>
          <div className='section4-heading'>
            <h1 className='section4-title'>How Eazipay Works</h1>
            <h3>Get started in 3 simple steps</h3>
          </div>
          <img src={PhoneGif} alt='Free Forever image' className='iphone' />
          <div className='section4-bottom'>
            <div className='prepare-flex'>
              <p className='number'>03</p>
              <h2 className='prepare'>
                Prepare your <br />
                Transaction
              </h2>
            </div>
            <p className='run-payroll2'>
              Run payroll: Bulk salaried and Compliance are done at once.
            </p>
          </div>
        </section>
        {/* section 5 */}
        <div className='section5'>
          <img src={PinkPattern} alt='pink pattern' className='pink-pattern' />
          <div className='section5content'>
            <div className='section5firstdiv'>
              <h2 className='section5-heading'>
                Free forever for your{" "}
                <span className='salary'>salary payment</span>
              </h2>
              <br />
              <p className='mobile-only'>Get started in 3 simple steps</p>
            </div>

            <img src={FreeForever} alt='Free Forever image' />
            <div className='free-download'>
              <p className='download-eazipay'>Download The Eazipay App</p>
              <div className='download'>
                <img src={GoogleStore} alt='Google store' className='store' />
                <img src={AppleStore} alt='Apple store' className='store' />
              </div>
            </div>
          </div>
        </div>
        {/* Section 6 */}
        <New />

        {/* Trying */}
        {/* Section 6 */}
        <div className='section6'>
          <div className='desktop-view'>
            <div className='desktop-text'>
              <h2 className='section6heading'>
                Get an Exclusive Demo of Eazipay
              </h2>
              <h3 className='desktop-only'>
                Our greatest priority is to put you and your business first.
                Let’s show you how we can help.
              </h3>
            </div>
            <div className='input-div'>
              <form action='' className=''>
                <div className='demo-form'>
                  <h2 className='first-heading'>First things first</h2>
                  <p className='form-intro'>
                    We want to serve you better. Tell us a bit about yourself or
                    company
                  </p>
                  <div className='mid-form'>
                    <div className='switch-btn'>
                      <div className='individual'>By Individual</div>
                      <div className='company'>By Company</div>
                    </div>
                    <input
                      type='text'
                      name=''
                      className='total input'
                      placeholder='First Name'
                    />
                    <input
                      type='text'
                      name=''
                      className='total input'
                      placeholder='Last Name'
                    />
                    <input
                      type='text'
                      name=''
                      className='total input'
                      placeholder='Email'
                    />
                    <br />
                  </div>
                  <button className='run-payroll'>Request Demo</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </main>
    </>
  );
};
export default Main;

// this is the work of tomorrow is to fix the home page and not only fixing the home page i also have to start fixing and styling the desktop version yes even the form is not very well and the Terms Of use and the Register and the login page I have not really done much there I need to style more and even add the forms and  i need to finish the app this week latest.
