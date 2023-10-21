import "../css/New.css";

const New = () => {
  return (
    <>
      <div className='transaction-history-div'>
        <div className='transaction-history-content'>
          <h2>Fixed Deposit Investment</h2>
          <div className='deposit-amount-container'>
            <p className='deposit-amount-heading'>Deposit Amount</p>
            <p className='amount-value'>NGN 2,500,000.00</p>
          </div>
          <div className='maturity-value-container'>
            <p className='maturity-value-heading'>Maturity Value</p>
            <p className='maturity-value'>NGN 3,000,000.00</p>
          </div>
          <div className='proposed-container'>
            <p className='proposed-heading'>Proposed Duration</p>
            <p className='proposed-value'>18 Months</p>
          </div>
          <div className='renewal-container'>
            <p className='renewal-heading'>Renewal Option</p>
            <p className='renewal-value'>Roll Over Interest and Capital</p>
          </div>
          <div className='interest-container'>
            <p className='interest-heading'>Interest Rate</p>
            <p className='interest-value'>20% Annually</p>
          </div>
          <div className='accrued-container'>
            <p className='accrued-heading'> Accrued Interest</p>
            <p className='accrued-value'>NGN 8,253,000</p>
          </div>
          {/* <div className='payment-container'>
            <p className='payment-heading'>Interest Payment Frequency</p>
            <p className='payment-value'>Quarterly</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default New;
