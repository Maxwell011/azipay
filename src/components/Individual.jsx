import { BiPhoneCall, BiWifi, BiBoltCircle } from "react-icons/bi";
import { FaMoneyBillWave, FaTelegram } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import IndividualHero from "/images/individual-hero.png";
import Enterprise from "/images/enterprise-loans.44b241cf.png";
import loanImage from "/images/loanimg.png";

const Individual = () => {
  return (
    <div>
      <img
        src={IndividualHero}
        alt='Individual Hero'
        className='bg-[#ffeeec]'
      />
      <div className='flex items-center flex-col justify-center'>
        <h2 className='text-red-500 text-lg'>EAZIPAY FOR INDIVIDUAL</h2>
        <h1 className='max-w-full h-auto text-4xl'>
          Pay all in <span className='text-red-500'>one click!</span>
        </h1>
        <p className='text-base text-center'>
          Add your service providers, personal assistants, chauffeurs, chefs,
          and more to your Eazipay. Pay all in one click
        </p>
        <button className='bg-[#292a29] text-white p-2 h-10 text-center rounded-3xl m-5'>
          Start using Free, Forever
        </button>
      </div>
      {/* Section 2 */}
      <section  className="pt-12 pb-12">
        <h2 className='text-lg text-red-500'>LOANS</h2>
        <h1 className='text-4xl text-center'>
          Loans,<span className='text-red-500'>wherever you need them</span>{" "}
        </h1>
        <p className='text-center w-96 mb-5'>
          Whenever you fall short of your monthly payroll budget you may easily
          request a loan to cover for it.
        </p>
        <img
          src={Enterprise}
          alt='Enterprise Loan'
          className='max-w-full h-auto'
        />
      </section>
      {/* Section 3 */}
      <section className="bg-[url('/images/patterns.icons.png')] bg-center bg-cover bg-[#ffeeec]">
        <div className='flex items-center flex-col justify-center text-center pt-20 pb-20'>
          <h2 className='text-red-500'>BILLS AND PAYMENTS</h2>
          <h1 className='text-4xl m-10'>Fast Transfer, Bills and Payments</h1>
          <p className='w-96 text-center'>
            Pay all relevant bills, send to anyone and save your loved ones as
            beneficiaries
          </p>
          <div>
            <div className='bg-white p-10 m-10 h-36 w-48 rounded-lg'>
              <div className='flex flex-col items-center'>
                <BiPhoneCall className='bg-[#f2f1f1] h-14 w-14 text-teal-400 text-base rounded-lg p-3' />
                Airtime
              </div>
            </div>
            <div className='bg-white p-10 m-10 h-40 w-48 rounded-lg'>
              <div className='flex flex-col items-center'>
                <BiWifi className='text-purple-900  h-14 w-14 bg-[#f2f1f1]  text-base rounded-lg p-3' />
                Data
              </div>
            </div>
            <div className='bg-white p-10 m-10 h-40 w-48 rounded-lg'>
              <div className='flex flex-col items-center'>
                <BiBoltCircle className='h-14 w-14 bg-[#f2f1f1]  text-base rounded-lg p-3 text-yellow-500' />
                Electricity
              </div>
            </div>
            <div className='bg-white p-10 m-10 h-40 w-48 rounded-lg'>
              <div className='flex flex-col items-center'>
                <FiMonitor className='h-14 w-14 bg-[#f2f1f1]  text-base rounded-lg p-3 text-slate-400' />
                Gotv/Dstv
              </div>
            </div>
            <div className='bg-white p-10 m-10 h-40 w-48 rounded-lg '>
              <div className='flex flex-col items-center'>
                <FaTelegram className='text-green-700 h-14 w-14 bg-[#f2f1f1]  text-base rounded-lg p-3 ' />
                Make a Transfer
              </div>
            </div>
            <div className='bg-white p-10 m-10 h-40 w-48 rounded-lg'>
              <div className='flex flex-col items-center'>
                <FaMoneyBillWave className='text-slate-600 h-14 w-14 bg-[#f2f1f1]  text-base rounded-lg p-3' />
                Pay Salaries
              </div>
            </div>
            <div className='bg-white p-10 m-10 h-40 w-48 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img
                  src={loanImage}
                  alt='loan image'
                  className='text-slate-600 h-14 w-14 bg-[#f2f1f1]  text-base rounded-lg p-3'
                />
                Get Loan
              </div>
            </div>
            <button className='w-48 bg-black text-white rounded-3xl p-2'>
              Get started now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Individual;
