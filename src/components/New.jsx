// import { GoBackBtn } from "../../components";
import "../css/New.css";

// const New = () => {
//   return (
//     <>
//       {/* <GoBackBtn /> */}
//       <section className='fixed-deposit-container'>
//         <div className='fixed-deposit-content'>
//           <h1 className='fixed-deposit-heading'>Fixed Deposit Request</h1>

//           <div className='select-account'>
//             <label htmlFor='choose-account' className='choose-account'>
//               Select account to be debited
//             </label>

//             <div className='select'>
//               <select name='pets' className='bank-select'>
//                 <option value=''>Select</option>
//                 <option value=''>Globus</option>
//                 <option value=''>Zenith</option>
//               </select>
//             </div>
//           </div>

//           <p className='place-info'>Placement Information</p>
//           <div className='trial'>
//             <label htmlFor='duration' className="Proposed-duration">Proposed Duration</label>
//             <br />
//             <select name='duration' className='duration'>
//               <option value=''>Select</option>
//               <option value='6 Months'>6 Months</option>
//               <option value='1 Year'>1 Year</option>
//               <option value='2 Year'>2 Year</option>
//               <option value='3 Year'>3 Year</option>
//               <option value='4 Year'>4 Year</option>
//               <option value='5 Year'>5 Year</option>
//             </select>
//             <br />
//             <label htmlFor='amount' className="deposited-amount">Amount</label>
//             <br />
//             <input className='amount2' placeholder='E.g $2,500,000.00' />
//             <br />

//             <label htmlFor='rate' className="rate">Rate (Based on duration & amount)</label>
//             <br />
//             <input
//               id='rate'
//               disabled
//               placeholder='20%'
//               className='rate-input'
//             />
//           </div>
//           <br />
//           <div className="content">
//           <p className="return-heading">Upon Maturity Tick as Appropriate</p>
//           <form>
//             <div className='return-choice'>
//               <div className='first-choice'>
//                 <input type='radio' id='html' name='' value='HTML' />
//                 <label htmlFor='interest'>
//                   Roll Over Interest and Principal
//                 </label>
//               </div>
//               <div className='second-choice'>
//                 <input type='radio' id='css' name='' value='CSS' />
//                 <label htmlFor='interest'>
//                   Drop Interest and Roll over Principal
//                 </label>
//               </div>
//               <div className='third-choice'>
//                 <input
//                   type='radio'
//                   id='javascript'
//                   name=''
//                   value='JavaScript'
//                 />
//                 <label htmlFor='interest'>
//                   Drop Both Interest and Principal
//                 </label>
//               </div>
//             </div>
//           </form>
//           </div>

//           <button className='continue-btn'>Continue</button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default New;

const New = () => {
  return (
    <>
      <div className='second-form'>
        <h1 className='second-form-heading'>Fixed Deposit Request</h1>

        <p className='confirm-request-heading'>Confirm your request</p>
        <div className='confirming-request'>
          <div className='confirm-details'>
            <h3 className='request-heading1'>Debited Account</h3>
            <p className='request-choice'>Savings - 0046329533</p>
          </div>
          <div className='confirm-details'>
            <h3 className='request-heading1'>Proposed Duration</h3>
            <p className='request-choice'>2 Years </p>
          </div>
          <div className='confirm-details'>
            <h3 className='request-heading1'>Amount</h3>
            <p className='request-choice'>2,500,000.00</p>
          </div>
          <div className='confirm-details'>
            <h3 className='request-heading2'>Rate</h3>
            <p className='request-choice'>12% per annum </p>
          </div>
          <div className='confirm-details'>
            <h3 className='request-heading2'>Maturity Value</h3>
            <p className='request-choice'>3,000,000.00</p>
          </div>
          <div className='confirm-details'>
            <h3 className='request-heading2'>Upon Maturity</h3>
            <p className='request-choice'>Roll Over Interest and Principal </p>
          </div>
          <div className='note-div'>
            <p className='note'>NOTE:</p>
            <p className='note'>
              Pre-liquidation will attract a 40% penalty on accrued interest.
            </p>
          </div>

          <div className='confirm-buttons'>
            <button className='previous-btn'>Previous</button>
            <button className='submit-btn'>Submit Request</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;

// const New = () => {
//   return (
//     <>
//       <div className='transaction-history-div'>
//         <div className='transaction-history-content'>
//           <h2>Fixed Deposit Investment</h2>
//           <div className='deposit-amount-container'>
//             <p className='deposit-amount-heading'>Deposit Amount</p>
//             <p className='amount-value'>NGN 2,500,000.00</p>
//           </div>
//           <div className='maturity-value-container'>
//             <p className='maturity-value-heading'>Maturity Value</p>
//             <p className='maturity-value'>NGN 3,000,000.00</p>
//           </div>
//           <div className='proposed-container'>
//             <p className='proposed-heading'>Proposed Duration</p>
//             <p className='proposed-value'>18 Months</p>
//           </div>
//           <div className='renewal-container'>
//             <p className='renewal-heading'>Renewal Option</p>
//             <p className='renewal-value'>Roll Over Interest and Capital</p>
//           </div>
//           <div className='interest-container'>
//             <p className='interest-heading'>Interest Rate</p>
//             <p className='interest-value'>20% Annually</p>
//           </div>
//           <div className='accrued-container'>
//             <p className='accrued-heading'> Accrued Interest</p>
//             <p className='accrued-value'>NGN 8,253,000</p>
//           </div>
//           <div className='payment-container'>
//             <p className='payment-heading'>Interest Payment Frequency</p>
//             <p className='payment-value'>Quarterly</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default New;
