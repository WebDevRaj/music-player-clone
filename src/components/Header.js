import React from 'react';

import boyImg from '../imgs/boy.png';

import "../css/Header.css";


const Header = (props) => {
    return(
        <div className="header">
            <div className="header__btn-left"></div>
            <div className="header__left">
                <img className="header__img" src={boyImg} alt="boy"/>
                <div className="header__text">
                    <div className="header__text-light">CURT</div>
                    <div className="header__text-dark">SHEARD</div>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right-list">
                    <ul className="header__right-list-upper">
                        <li>Vocalist</li>
                        <li>Guitar</li>
                        <li className="header__ul-dark">Bass</li>
                        <li>Drums</li>
                        <li>Electronics</li>
                    </ul>
                    <ul className="header__right-list-lower">
                        <li>Lawrie Alton</li>
                        <li>Charles Timmy</li>
                        <li className="header__ul-dark">Curt Sheard</li>
                        <li>Cade ryker</li>
                        <li>Tommie Brendan</li>
                    </ul>
                </div>
                <div className="header__band">
                    <h2 className="header__band-head">Meet our band</h2>
                    <p>Court Sheard, swag iPhone neutra williamsburg, sriracha you probably heaven't heard of them 
                        PBR&B marfa seitan. Four dollar toast wayfarers helvetica etsy, affogato pinterest schlitz. 
                        Squid yr mlkshk, pin-terest pour-over polaroid photo booth. Yr fixie plaid kogi.</p>
                </div>
            </div>
            <div className="header__btn-right"></div>
        </div>
    )
}

export default Header;
