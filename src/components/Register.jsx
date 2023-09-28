import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div>
        <h1>Welcome to Eazipay</h1>
        <p>Please choose an account to sign up and get started.</p>
        <div className=''>
          <h2>Personal Account</h2>
          <p>For individual who pay their personal and domestic stuff</p>
        </div>
        <div className=''>
          <h2>Business Account</h2>
          <p>
            For registered business SMEs, startups, corporate and large
            companies
          </p>
        </div>
        <button>Get Started</button>
        <Link>
          <p>Already have an account? Sign In</p>
        </Link>
      </div>
    </>
  );
};
export default Register;
