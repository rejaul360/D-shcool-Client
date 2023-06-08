import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-4'>
        <footer className="footer p-10 shadow-lg text-base-content">
            <div>
                <Link to="/" className="logo flex items-center gap-2 h-auto w-auto">
                <img style={{ width: "100px", borderRadius: "50%" }} src="https://img.freepik.com/premium-vector/letter-d-logo-icon-design-template_487414-3688.jpg?w=2000" alt="" />
                </Link>
                <p>Baby school Summer camp.<br />we have best teacher to train our student</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    </div>
    );
};

export default Footer;