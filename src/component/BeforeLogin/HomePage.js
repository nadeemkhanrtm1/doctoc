import React from 'react';
import Image from "../../images/home-page-image.png";
import top_service from "../../BeforeLogInImages/top_service.png";
import banner_1 from "../../BeforeLogInImages/icon/banner_1.svg";
import banner_2 from "../../BeforeLogInImages/icon/banner_2.svg";
import banner_3 from "../../BeforeLogInImages/icon/banner_3.svg";
import feature_1  from "../../BeforeLogInImages/icon/feature_1.svg";
import feature_2  from "../../BeforeLogInImages/icon/feature_2.svg";
import service from "../../BeforeLogInImages/service.png";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NavigationBar = () => {
  return (
            <React.Fragment>
<Navbar/>
{/***************************************** banner part start ************************************************/}
    <section className="banner_part">
        <div className="home-container">
            <div className="home-row-1">
                <div className="home-col-1">
                    <h1 style={{   fontFamily: 'Playfair',
fontSize: '36px',
fontStyle: 'normal',
fontWeight: '900',
color:'#000000'}}>
                    Welcome to idoctoc,<br/>
                    your online hospital.
                    </h1>
                    <br/>
                    <br/>
                    <p className="p-0 m-0" style={{   fontFamily: 'Overpass',
fontSize: '17px',
fontStyle: 'normal',
fontWeight: '400',
color:'#666666'}}>
                    The more the better. So you will get also a lot of<br/>
                    keywords which you must pay for only the minimal<br/>
                    commandment of 5 cents.
                    </p>
                    <br/>
                    <button className="btn-3">Get started</button>
                </div>
                <div className="home-col-2">
                    <img src={Image} alt="..."/>
                </div>
            </div>
        </div>
    </section>
{/************************************** banner part end **************************************************/}
{/************************************* about us part start *************************************************/}
    <section className="about_us padding_top">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-6">
                    <div className="about_us_img">
                        <img src={top_service} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <h2>About us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
                            maecenas accumsan lacus vel</p>
                        <Link className="btn_2" to="/">learn more</Link>
                        <div className="banner_item">
                            <div className="single_item">
                                <img src={banner_1} alt="banner"/>
                                <h5>Emergency</h5>
                            </div>
                            <div className="single_item">
                                <img src={banner_2} alt="banner"/>
                                <h5>Appointment</h5>
                            </div>
                            <div className="single_item">
                                <img src={banner_3} alt="banner"/>
                                <h5>Qualfied</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/************************************ about us part end  ****************************************************/}
{/************************************ feature_part start ****************************************************/}
    <section className="feature_part">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="section_tittle text-center">
                        <h2>Our services</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon">
                                <img src={feature_1} alt="..."/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon">
                                <img src={feature_2} alt="..."/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                        <div className="single_feature_img">
                            <img src={service} alt=""/>
                        </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon">
                                <img src={feature_1} alt="..."/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon">
                                <img src={feature_2} alt="..."/></span>
                            <h4>Better Future</h4>
                            <p>Darkness multiply rule Which from without life creature blessed
                                give moveth moveth seas make day which divided our have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/********************************************* feature_part end *******************************************/}
<Footer/>
            </React.Fragment>
        )
}
export default NavigationBar;
