import React, { Component } from 'react';
import './footer.js';

let Header = ({homeClick}) => {
    return (
        <div>
            <nav>
                <ul className="navigation">
                    <li>
                        <div className="button_nav1" onClick={homeClick}>Home</div>
                    </li>
                    <li>
                        <a href="#about"><div className="button_nav1">About us</div></a>
                    </li>
                </ul>
            </nav>
            <hr class="headerHr"/>
        </div>
    );
}

export default Header;