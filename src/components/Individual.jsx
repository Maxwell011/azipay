import { BiPhoneCall, BiWifi, BiBoltCircle } from "react-icons/bi";
import { FaMoneyBillWave, FaTelegram } from "react-icons/fa";
import IndividualHero from "/images/individual-hero.png";
import Enterprise from "/images/enterprise-loans.44b241cf.png";

const Individual = () => {
  return (
    <div>
      <img src={IndividualHero} alt='Individual Hero' />
      <div className='flex items-center flex-col justify-center'>
        <h2 className='text-red-500 text-lg'>EAZIPAY FOR INDIVIDUAL</h2>
        <h1 className='max-w-full h-auto text-4xl'>
          Pay all in <span className='text-red-500'>one click!</span>
        </h1>
        <p className='text-base text-center'>
          Add your service providers, personal assistants, chauffeurs, chefs,
          and more to your Eazipay. Pay all in one click
        </p>
        <button className='bg-slate-950 text-white p-3 h-10 text-center rounded-3xl m-5'>
          Start using Free, Forever
        </button>
        {/* Section 2 */}
        <h2 className='text-lg text-red-500'>LOANS</h2>
        <h1 className='text-4xl text-center'>
          Loans,<span className='text-red-500'>wherever you need them</span>{" "}
        </h1>
        <p className='text-center w-96'>
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
      <div className='flex items-center flex-col justify-center text-center'>
        <h2 className='text-red-500'>BILLS AND PAYMENTS</h2>
        <h1 className='text-4xl m-10'>Fast Transfer, Bills and Payments</h1>
        <p className='w-96 text-center'>
          Pay all relevant bills, send to anyone and save your loved ones as
          beneficiaries
        </p>
        <div className=''>
          <div className='bg-red-800 p-10 m-10 h-36 w-48 rounded-lg'>
            <div className='flex flex-col items-center'>
              <BiPhoneCall className='bg-[#f2f1f1] h-10 w-10 text-teal-400 ' />
              Airtime
            </div>
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-48 rounded-lg'>
            <div className='flex flex-col items-center'>
              <BiWifi className='bg-white h-10 w-10' />
              Data
            </div>
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-48 rounded-lg'>
            <BiBoltCircle className='bg-white h-10 w-10' />
            Electricity
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-48 rounded-lg'>
            Gotv/Dstv
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-48 rounded-lg '>
            <FaTelegram className='bg-white h-10 w-10 ' />
            Make a Transfer
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-48 rounded-lg'>
            <FaMoneyBillWave className='bg-white h-10 w-10' />
            Pay Salaries
          </div>
          <div className='bg-red-800 p-10 m-10 h-40 w-48 rounded-lg'>
            Get Loan
          </div>
          <button className='w-48 bg-black text-white rounded-3xl p-2'>
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Individual;
