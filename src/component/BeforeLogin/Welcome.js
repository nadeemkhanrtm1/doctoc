import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

export default function Welcome() {
  return (
    <React.Fragment>
    <Navbar/>
    <section className="contact-section section_padding">
      <div className="container">
        <h1>Welcome!</h1>
        <p>You have successfully registered a new account.</p>
        <p>We have sent you an email. Please click on the confirmation link in your email to verify your account.</p>
        <p>Then click here to login: <a class=""  href="/login">Login</a></p>
      </div>
    </section>
    <Footer/>
    </React.Fragment>
  )
}