import HeroImage from "/images/hero-img.d91af7d7.png";
import Enterprise from "/images/enterprise-loans.44b241cf.png";
import Report from "/images/report.e1809efd.png";
import Compliance from "/images/compliance.0c890296.png";
import "../css/Business.css";

const Business = () => {
  return (
    <div>
      {/* section 1 */}
      <section className='bg-[#f2f1f1]'>
        <img src={HeroImage} alt='Hero Image' className='max-w-full h-auto' />
        <div className='flex items-center flex-col justify-center'>
          <h2 className='text-red-500 text-lg flex items-center justify-center mt-6'>
            EAZIPAY FOR BUSINESS
          </h2>
          <h1 className='text-4xl text-[#11453b] flex justify-center'>
            Simple Payroll
          </h1>
          <p className='text-base text-[#11453b] w-72 text-center'>
            Add your employee the simple way you know and run their payroll. All
            in seconds!
          </p>
          <div className='business-btn'>
            <button className='bg-black text-white mt-20 text-base w-135 rounded-full font-medium outline-none h-9 pl-8 pr-8 transition-transform duration-250 ease-in'>
              Start Using Free, Forever
            </button>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <img
        src={Enterprise}
        alt='Enterprise Loan'
        className='max-w-full h-auto mt-36'
      />
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-red-500 text-2xl'>ENTERPRISE LOANS</h2>
        <h1 className='text-3xl leading-10'>Payroll & Enterprise loans</h1>
        <p className='text-base text-center'>
          Easily access loans to cover your operations or payroll, right on your
          app!
        </p>
      </div>
      {/* section 3*/}
      <img src={Report} alt='Payroll Report' className='max-w-full h-auto' />
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-red-500 text-2xl'>REPORT</h2>
        <h1 className='text-3xl text-center'>
          Accurate Payroll reports & Payslips
        </h1>
        <p className='text-base text-center w-80'>
          For making intelligent business decisions, Get your payroll report,
          employee payslips, tax receipts, payroll analysis, compliance history
          - all in one place!{" "}
        </p>
      </div>
      {/* section 4*/}
      <img src={Compliance} alt='Compliance' className='max-w-full' />
      <div className='flex flex-col items-center justify-center my-10 mx-2'>
        <h2 className='text-red-500 text-2xl'>COMPLIANCE</h2>
        <h1 className='text-2xl text-center'>
          Register an Remit compliances easily
        </h1>
        <p className='text-base text-center w-10/12'>
          Register your business and employees for All your statutory deductions
          - PAYE, Pension, HMO, Insurances, NSITF, NHF.
        </p>
      </div>
      {/* section 5*/}
      <section className='section-5'>
        <div className='flex flex-col items-center justify-center'>
          <h2>EAZIPAY PAYROLL CALCULATOR</h2>
          <h1>Run payroll in Five minutes or less</h1>
          <p className='text-base text-center'>
            For making intelligent business decisions, Get your payroll report,
            employee payslips, tax receipts, payroll analysis, compliance
            history - all in one place!{" "}
          </p>
        </div>
        <form action='' className=''>
          <div className='business-form'>
            <h2 className='payroll-heading'>Payroll Calculator</h2>
            <p className='form-intro'>
              Calculate your payroll either by amount or percentage
            </p>
            <div className='mid-form'>
              <div className='switch-btn'>
                <div className='amount'>By Amount</div>
                <div className='percentage'>By Percentage</div>
              </div>
              <input
                type='text'
                name=''
                className='total'
                id=''
                placeholder='Total Taxable Salary'
              />
              <br />
              <label htmlFor='' className='allowance'>
                Allowances
              </label>
              <br />
              <div className='input-div'>
                <div className='first-input'>
                  <input
                    type='text'
                    placeholder='Basic'
                    className='small-input try'
                  />
                  <input
                    type='text'
                    placeholder='Housing'
                    className='small-input try'
                  />
                </div>
                <br />

                <div className='first-input'>
                  <input
                    type='text'
                    placeholder='Transport'
                    className='small-input'
                  />
                  <input
                    type='text'
                    placeholder='Others'
                    className='small-input'
                  />
                </div>
              </div>
              <label htmlFor='' className='allowance'>
                Deductions
              </label>
              <br />
              <input type='text' placeholder='HMO' className='total' />
            </div>

            <div className='second-input'>
              <div className='toggle-switch'>
                <h2 className='paye'>PAYE</h2>
                <input
                  type='checkbox'
                  id='toggle'
                  className='toggle-checkbox'
                />
                <label htmlFor='toggle' className='toggle-label'>
                  <span className='switch-text'>No</span>
                  <span className='toggle-slider'></span>
                  <span className='switch-text'>Yes</span>
                </label>
              </div>

              <div className='toggle-switch'>
                <h2 className='paye'>NSITF</h2>
                <input
                  type='checkbox'
                  id='toggle'
                  className='toggle-checkbox'
                />
                <label htmlFor='toggle' className='toggle-label'>
                  <span className='switch-text'>No</span>
                  <span className='toggle-slider'></span>
                  <span className='switch-text'>Yes</span>
                </label>
              </div>
            </div>

            <div className='second-input'>
              <div className='toggle-switch'>
                <h2 className='paye'>NHF</h2>
                <input
                  type='checkbox'
                  id='toggle'
                  className='toggle-checkbox'
                />
                <label htmlFor='toggle' className='toggle-label'>
                  <span className='switch-text'>No</span>
                  <span className='toggle-slider'></span>
                  <span className='switch-text'>Yes</span>
                </label>
              </div>

              <div className='toggle-switch pen'>
                <h2 className='paye'>Pension</h2>
                <input
                  type='checkbox'
                  id='toggle'
                  className='toggle-checkbox'
                />
                <label htmlFor='toggle' className='toggle-label'>
                  <span className='switch-text'>No</span>
                  <span className='toggle-slider'></span>
                  <span className='switch-text'>Yes</span>
                </label>
              </div>
            </div>
            <br />
            <button className='run-payroll'>Run Payroll</button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default Business;

// Things I have to do tomorrow is this I have to add a label or a text before the checkbox in the business page and fix the stylings or change it
