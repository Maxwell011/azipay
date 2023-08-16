import { FaApple, FaGooglePlay } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <main>
        {/* Section 1  */}
        <section>
          <h1>Run your payroll easily in seconds</h1>
          <p>
            We have built an all-inclusive simple solution for individuals and
            business to manage staff, pay salaries, bills and relevant taxes all
            at ones.
          </p>
          ;{/*  Button */}
          <button>Start Using free, Forever</button>
          {/*  */}
          <p>Download The Eazipay App</p>
          <button>
            <FaApple />
            Download on the Apple store
          </button>
          <button>
            <FaGooglePlay />
            Get on Google Play
          </button>
        </section>
        {/* Section 2 */}
        <section>
          <h1>For Individuals and Businesses</h1>
          <small>Join 200+ businesses using Eazi pay easy solution</small>
          <div className=''>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box3'></div>
          </div>
          <small>
            We are happy to answer your queries. Please reach us at
            hello@eazipay.com and expect our response shortly
          </small>
        </section>
        {/* section 4  */}
        <h2>Free forever for your salary payment</h2>
        <p>Subscribe to the EaziLife today</p>
        <button>
          <FaApple />
          Download on the Apple store
        </button>
        <button>
          <FaGooglePlay />
          Get on Google Play
        </button>
      </main>
    </>
  );
};
export default Main;
