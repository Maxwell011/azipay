import { BiPhoneCall, BiWifi, BiBoltCircle } from "react-icons/bi";
import { FaMoneyBillWave, FaTelegram } from "react-icons/fa";
import IndividualHero from "/images/individual-hero.png";
import Enterprise from "/images/enterprise-loans.44b241cf.png";

const Individual = () => {
  return (
    <div>
      <img src={IndividualHero} alt='Individual Hero' />
      <div className='flex flex-col justify-center'>
        <h2 className='text-red-500 text-2xl'>EAZIPAY FOR INDIVIDUAL</h2>
        <h1 className='max-w-full h-auto'>
          Pay all in <span className='text-red-500'>one click!</span>
        </h1>
        <p className='text-2xl'>
          Add your service providers, personal assistants, chauffeurs, chefs,
          and more to your Eazipay. Pay all in one click
        </p>
        <button className='bg-slate-950 text-white p-3 h-10 text-center rounded-3xl m-5'>
          Start using Free, Forever
        </button>
      </div>
      {/* Section 2 */}
      <div>
        <h2>LOANS</h2>
        <h1>Loans, wherever you need them</h1>
        <p>
          Whenever you fall short of your monthly payroll budget you may easily
          request a loan to cover for it.
        </p>
      </div>
      <img
        src={Enterprise}
        alt='Enterprise Loan'
        className='max-w-full h-auto'
      />
      {/* Section 3 */}
      <div>
        <h2>BILLS AND PAYMENTS</h2>
        <h1>Fast Transfer, Bills and Payments</h1>
        <p>
          Pay all relevant bills, send to anyone and save your loved ones as
          beneficiaries
        </p>
        <div className=''>
          <div className='bg-red-800 p-10 m-10 h-40 w-40 rounded-lg'>
            <BiPhoneCall className='bg-white h-10 w-10 text-teal-400' />
            Airtime
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-40 rounded-lg'>
            <BiWifi className='bg-white h-10 w-10' />
            Data
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-40 rounded-lg'>
            <BiBoltCircle className='bg-white h-10 w-10' />
            Electricity
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-40 rounded-lg'>
            Gotv/Dstv
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-40 rounded-lg'>
            <FaTelegram className='bg-white h-10 w-10' />
            Make a Transfer
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-40 rounded-lg'>
            <FaMoneyBillWave className='bg-white h-10 w-10' />
            Pay Salaries
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-40 rounded-lg'>
            Get Loan
          </div>
          <button>Get started now</button>
        </div>
      </div>
    </div>
  );
};
export default Individual;
