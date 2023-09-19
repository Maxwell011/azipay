import Heroimage from "/images/hero-img.d91af7d7.png";
import Enterprise from "/images/enterprise-loans.44b241cf.png";
import Report from "/images/report.e1809efd.png";
import Compliance from "/images/compliance.0c890296.png";

const Business = () => {
  return (
    <div>
      {/* section 1 */}
      <section>
        <img src={Heroimage} alt='Hero Image' className='max-w-full h-auto' />
        <div className='flex items-center flex-col justify-center'>
          <h2 className='text-red-500 text-lg flex items-center justify-center mt-6'>
            EAZIPAY FOR BUSINESS
          </h2>
          <h1 className='text-4xl text-[#11453b] flex justify-center'>
            Simple Payroll
          </h1>
          <p className='text-xl text-[#11453b]'>
            Add your employee the simple way you know and run their payroll. All
            in seconds!
          </p>
          <button className='bg-[#11453b] text-white text-base w-135 rounded-full font-medium outline-none h-9 pl-8 pr-8 transition-transform duration-250 ease-in'>
            Start Using Free, Forever
          </button>
        </div>
      </section>
      {/* section 2 */}
      <img
        src={Enterprise}
        alt='Enterprise Loan'
        className='max-w-full h-auto'
      />
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-red-500 text-2xl'>ENTERPRISE LOANS</h2>
        <h1 className='text-3xl'>Payroll & Enterprise loans</h1>
        <p className='text-xl'>
          Easily access loans to cover your operations or payroll, right on your
          app!
        </p>
      </div>
      {/* section 3*/}
      <img src={Report} alt='Payroll Report' className='max-w-full h-auto' />
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-red-500 text-2xl'>REPORT</h2>
        <h1 className='text-3xl'>Accurate Payroll reports & Payslips</h1>
        <p className='text-xl'>
          For making intelligent business decisions, Get your payroll report,
          employee payslips, tax receipts, payroll analysis, compliance history
          - all in one place!{" "}
        </p>
      </div>
      {/* section 4*/}
      <img src={Compliance} alt='Compliance' className='max-w-full h-auto' />
      <div className='flex flex-col items-center justify-center my-10 mx-2'>
        <h2 className='text-red-500 text-2xl'>COMPLIANCE</h2>
        <h1 className='text-2xl'>Register an Remit compliances easily</h1>
        <p className='text-sm'>
          Register your business and employees for All your statutory deductions
          - PAYE, Pension, HMO, Insurances, NSITF, NHF.
        </p>
      </div>
      {/* section 5*/}
      <div className='flex flex-col items-center justify-center'>
        <h2>EAZIPAY PAYROLL CALCULATOR</h2>
        <h1>Run payroll in Five minutes or less</h1>
        <p>
          For making intelligent business decisions, Get your payroll report,
          employee payslips, tax receipts, payroll analysis, compliance history
          - all in one place!{" "}
        </p>
      </div>
      <div className='bg-cadetblue p-10 text-center rounded-2xl m-20 h-400'>
        <form action='' className=''>
          <h2>Payroll Calculator</h2>
          <p>Calculate your payroll either by amount or percentage</p>
          {/* Double button to switch between amount and percentage */}
          <input type='text' name='' id='' placeholder='Total Taxable Salary' />
          <label htmlFor=''>Allowances</label>
          <input type='text' placeholder='Basic' />
          <input type='text' placeholder='Housing' />
          <input type='text' placeholder='Transport' />
          <input type='text' placeholder='Others' />
          <label htmlFor=''>Deductions</label>
          <input type='text' placeholder='HMO ' />
          <div className='cl-toggle-switch'>
            <label className='cl-switch'>
              PAYE
              <input type='checkbox' />
              <span></span>
            </label>
          </div>
          <button className=''>Run Payroll</button>
        </form>
      </div>
    </div>
  );
};
export default Business;
