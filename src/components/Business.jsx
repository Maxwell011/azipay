import Nav from "./Nav";
import Heroimage from "/images/hero-img.d91af7d7.png";
import Enterprise from "/images/enterprise-loans.44b241cf.png";
import Report from "/images/report.e1809efd.png";
import Compliance from "/images/compliance.0c890296.png";

const Business = () => {
  return (
    <div>
      <Nav />
      {/* section 1 */}
      <img src={Heroimage} alt='Hero Image' className='business-heroimage' />
      <h2>EAZIPAY FOR BUSINESS</h2>
      <h1>Simple Payroll</h1>
      <p>
        Add your employee the simple way you know and run their payroll. All in
        seconds!
      </p>
      <button>Start Using Free, Forever</button>
      {/* section 2 */}
      <img src={Enterprise} alt='Enterprise Loan' className='enterprise-loan' />
      <h2>ENTERPRISE LOANS</h2>
      <h1>Payroll & Enterprise loans</h1>
      <p>
        Easily access loans to cover your operations or payroll, right on your
        app!
      </p>
      {/* section 3*/}
      <img src={Report} alt='Payroll Report' className='payroll-report' />
      <h2>REPORT</h2>
      <h1>Accurate Payroll reports & Payslips</h1>
      <p>
        For making intelligent business decisions, Get your payroll report,
        employee payslips, tax receipts, payroll analysis, compliance history -
        all in one place!{" "}
      </p>
      {/* section 4*/}
      <img src={Compliance} alt='Compliance' className="compliance" />
      <h2>COMPLIANCE</h2>
      <h1>Register an Remit compliances easily</h1>
      <p>
        Register your business and employees for All your statutory deductions -
        PAYE, Pension, HMO, Insurances, NSITF, NHF.
      </p>
      {/* section 5*/}
      <h2>EAZIPAY PAYROLL CALCULATOR</h2>
      <h1>Run payroll in Five minutes or less</h1>
      <p>
        For making intelligent business decisions, Get your payroll report,
        employee payslips, tax receipts, payroll analysis, compliance history -
        all in one place!{" "}
      </p>
      <form action=''>
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
        <button>Run Payroll</button>
      </form>
    </div>
  );
};
export default Business;
