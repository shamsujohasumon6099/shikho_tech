import React from 'react';
import './NavBar.scss'
import logo from '../../../asset/image/navbar/shikho.png'

const NavBar = () => {
    return (
        <div className="Navbar">
            <div className="left">
                <img className="logo" src={logo} alt="" />
            </div>

            <div className="right">
                <div className="menu">
                        <a href="/">হোম</a>
                        {/* <Link to="/course"><li class="">কোর্স</li></Link> */}
                        <a href="/course">কোর্স</a>
                        <a href="/scholarship">স্কলারশিপ</a>
                        <a href="/animated-lessons">অ্যানিমেটেড লেসনস</a>
                        <a href="/online-coaching">অনলাইন কোচিং</a>
                        <a href="/special-offer">স্পেশাল অফার</a>
                        <a href="https://blog.shikho.tech/">ব্লগ</a>
                        <a href="/skills">স্কিলস</a>
                        <a href="https://bohubrihi.com/">বহুব্রীহি</a>
                </div>
                <a className="login-btn" href="/">লগ ইন / সাইন আপ</a>
            </div>
        </div>
    );
};

export default NavBar;