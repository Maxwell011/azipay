// import { GoBackBtn } from "../../components";
import "../css/New.css";

const New = () => {
  return (
    <>
      {/* <GoBackBtn /> */}
      <section className='fixed-deposit-container'>
        <div className='fixed-deposit-content'>
          <h1 className='fixed-deposit-heading'>Fixed Deposit Request</h1>

          <div className='select-account'>
            <label htmlFor='choose-account' className='choose-account'>
              Select account to be debited
            </label>

            <div className='select'>
              <select name='pets' className='bank-select'>
                <option value=''>Select</option>
                <option value=''>Globus</option>
                <option value=''>Zenith</option>
              </select>
            </div>
          </div>

          <p className='place-info'>Placement Information</p>
          <div className='trial'>
            <label htmlFor='duration' className="Proposed-duration">Proposed Duration</label>
            <br />
            <select name='duration' className='duration'>
              <option value=''>Select</option>
              <option value='6 Months'>6 Months</option>
              <option value='1 Year'>1 Year</option>
              <option value='2 Year'>2 Year</option>
              <option value='3 Year'>3 Year</option>
              <option value='4 Year'>4 Year</option>
              <option value='5 Year'>5 Year</option>
            </select>
            <br />
            <label htmlFor='amount' className="deposited-amount">Amount</label>
            <br />
            <input className='amount2' placeholder='E.g $2,500,000.00' />
            <br />

            <label htmlFor='rate' className="rate">Rate (Based on duration & amount)</label>
            <br />
            <input
              id='rate'
              disabled
              placeholder='20%'
              className='rate-input'
            />
          </div>
          <br />
          <div className="content">
          <p className="return-heading">Upon Maturity Tick as Appropriate</p>
          <form>
            <div className='return-choice'>
              <div className='first-choice'>
                <input type='radio' id='html' name='' value='HTML' />
                <label htmlFor='interest'>
                  Roll Over Interest and Principal
                </label>
              </div>
              <div className='second-choice'>
                <input type='radio' id='css' name='' value='CSS' />
                <label htmlFor='interest'>
                  Drop Interest and Roll over Principal
                </label>
              </div>
              <div className='third-choice'>
                <input
                  type='radio'
                  id='javascript'
                  name=''
                  value='JavaScript'
                />
                <label htmlFor='interest'>
                  Drop Both Interest and Principal
                </label>
              </div>
            </div>
          </form>
          </div>

          <button className='continue-btn'>Continue</button>
        </div>
      </section>
    </>
  );
};

export default New;
