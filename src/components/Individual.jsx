import { BiPhoneCall, BiWifi } from "react-icons/bi";

const Individual = () => {
  return (
    <div>
      {/* Background landing image */}
      <img src='' alt='' />
      <h2>EAZIPAY FOR INDIVIDUAL</h2>
      <h1>
        Pay all in <span>one click!</span>
      </h1>
      <p>
        Add your service providers, personal assistants, chauffeurs, chefs, and
        more to your Eazipay. Pay all in one click
      </p>
      <button>Start using Free, Forever</button>

      {/* Section 2 */}
      <div>
        <h2>LOANS</h2>
        <h1>Loans, wherever you need them</h1>
        <p>
          Whenever you fall short of your monthly payroll budget you may easily
          request a loan to cover for it.
        </p>
      </div>
      <img src='' alt='' />
      {/* Section 3 */}
      <div>
        <h2>BILLS AND PAYMENTS</h2>
        <h1>Fast Transfer, Bills and Payments</h1>
        <p>
          Pay all relevant bills, send to anyone and save your loved ones as
          beneficiaries
        </p>
        <div className='boxes'>
          <div className='box'>
            <BiPhoneCall />
          </div>
          <div className='box'><BiWifi/></div>
          <div className='box'>Electricity</div>
          <div className='box'>Gotv/Dstv</div>
          <div className='box'>Make a Transfer</div>
          <div className='box'>Pay Salaries</div>
          <div className='box'>Get Loan</div>
          <button>Get started now</button>
        </div>
      </div>
    </div>
  );
};
export default Individual;
