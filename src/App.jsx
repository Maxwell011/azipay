import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Nav";
import Business from "./components/Business";
import Individual from "./components/Individual";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <Routes>
          <Route path='/business' element={<Business />} />
          <Route path='/individual' element={<Individual />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
