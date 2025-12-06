import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Cinema from "../Cinemapage/Cinema";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MoviesOne from "./MoviesOne";
import Footer from "./Footer";
import Offer from "../Offeerspage/Offer";
import FB from "../FBPaga/FB";
import Ticket from "../Getticket/Ticket";
import History from "../Getticket/History";
import Logins from "../LoginSinginPage/Logins";
import LoginForm from "../LoginSinginPage/Logins";
import SignUp from "../LoginSinginPage/Signup";
import Comings from "../Coming/Comings";
import Feed from "./Feed";
import Detailpage1 from "./Detailpage1";
import Detailpagecoming from "../Coming/Detailpagecoming";
import About from "../Footer/About";
import Contact from "../Footer/Contact";
import Terms from "../Footer/Terms";
import Privacy from "../Footer/Privacy";
import Acivity from "../Footer/Acivity";


// LAYOUT: Header + Footer + Outlet
function WithHeaderAndFooter() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <MoviesOne />
      <Feed/>
    </>
  );
}

function Cominpage(){
  return (<>
      <HeroSection />
      <Comings/>
      <Feed/>
  </>)
}


function Main() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LAYOUT ROUTE */}
        <Route element={<WithHeaderAndFooter />}>

          {/* Home Page */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/movie/:id" element ={<Detailpage1/>}/>
          <Route path="/coming/:id" element={<Detailpagecoming/>}/>

          {/* Cinema Page */}
          <Route path="/cinema" element={<Cinema />} />

          {/* Offers Page */}
          <Route path="/offers" element={<Offer />} />

          {/* FB Page */}
          <Route path="/fb" element={<FB />} />

          {/* Ticket page */}

          <Route path="/ticket" element={<Ticket/>}/>

          <Route path="/history" element={<History/>}/>

          <Route path="/coming" element={<Cominpage/>}/>

          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/activity" element={<Acivity/>}/>

        </Route>
        <Route>
          <Route path="/login" element={<Logins/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Main;
