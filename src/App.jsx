import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Nav";
import Business from "./components/Business";
import Individual from "./components/Individual";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/business' element={<Business />} />
          <Route path='/individual' element={<Individual />} />
          <Route path='/terms' element={<TermsOfUse />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
