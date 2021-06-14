import React, { Component } from 'react';
import SearchBox from './searchbox.js';
import { ClientSigninForm } from './SignIn.js';
import Footer from './footer';
import { ClientSignupForm } from './Form';

let Body = ({ value, signInClick,SearchBox, input, signUpClick }) => {
    switch (value) {
        case 1:
            return (
                <ClientSigninForm/>
            );
            break;
        case 2:
            return (
                <div>
                    <div className="cover background">
                        <ul className="navigation">
                            <li className="toright"><button className="button_nav"
                                onClick={signInClick}>
                                <div className="extra">Sign In</div>
                            </button></li>
                            <li><button className="button_nav"
                                onClick={signUpClick}>
                                <div className="extra">Sign Up</div>
                            </button></li>
                        </ul>
                    </div>
                    <Footer />
                </div>
            );
        case 3:
            return (
                <ClientSignupForm />
            );


    }
}
export default Body;