import React, {useState, useEffect} from 'react';
import logo from "../../BeforeLogInImages/logo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  {/* when scrollDown then header will be sticky to Top and add styles like box shadow and effect*/
  }
  const [top,
    setTop] = useState({position: 'absolute'});
  useEffect(() => {
    const handleScroll = () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setTop({position: 'fixed', boxShadow: "1px 5px 25px rgb(197, 197, 197)", backgroundColor: "white"});
      } else {
        setTop({position: 'absolute'});
      }
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);
  return (
    <React.Fragment>
      {/************************************** header part start ***************************************************/}
      <header className="main_menu home_menu" style={top}>
        <div className="container">
          <div className="row align-items-center" style={{height:'100px'}}>
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="logo" className="logo-landing-page"/>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item justify-content-center"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav align-items-center ml-auto">
                    <li className="nav-item active">
                      <Link className=" nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="mx-3 nav-link" to="/">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="mr-3 nav-link" to="/">Our Services</Link>
                    </li>
                    <li>
                    <Link
                        className="btn_2 d-none d-lg-block"
                        to="/login"
                        style={{
                        marginRight: '10px'
                      }}>Login</Link>
                    </li>
                    <li>
                    <Link className="btn_2 d-none d-lg-block" to="/register">Signup</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/*****************************************  Header part end *************************************************/}
    </React.Fragment>
  )
}
export default Navbar;