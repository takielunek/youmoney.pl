import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Questions from "../components/MainPage/Questions/Questions";
import Header from "../components/MainPage/Header/Header";
import HowItWorks from "../components/MainPage/HowItWorks/HowItWorks";
import Loan from "../components/MainPage/Loan/Loan";
import Opinions from "../components/MainPage/Opinions/Opinions";
import ThanksTo from "../components/MainPage/ThanksTo/ThanksTo";
import Benefits from "../components/MainPage/Benefits/Benefits";
import Footer from "../components/MainPage/Footer/Footer";
import LoanButton from "../components/MainPage/Buttons/LoanButton.jsx";
import "../components/MainPage/Buttons/index.js";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Navbar from "../components/MainPage/Navbar/Navbar.jsx";

const MainPage = () => {
  const sectionsWrapper = "wrapper w-11/12 md:w-10/12 mx-auto ";
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-darkMode"} relative`}
    >
      <Navbar />
      <Header />
      <HowItWorks />
      <ThanksTo />
      <div className={`${sectionsWrapper}`}>
        <AboutUs />
        <Opinions />
      </div>
      <Loan />
      <Questions />
      <Benefits />
      <Footer />
      <LoanButton />
    </div>
  );
};

export default MainPage;
