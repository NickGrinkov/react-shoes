import React from 'react';

import MainLogo from '../assets/img/ReactShoesLogo.png';
import Basket from '../assets/img/basketLogo.svg';
import Join from '../assets/img/joinLogo.svg';


function Header() {
    return (
        <header className="header">
            <img className="header_logo" src={MainLogo} width="300px" alt="Logo"/>
            <div className="header_buttons">
                <div className="header_buttons_basket">
                    <span className="header_count">1</span>
                    <img src={Basket} alt="Корзина"/>
                    <button className="header_button">Корзина</button>
                </div>
                <div className="header_buttons_join">
                     <img src={Join} width="60px" alt=""/>   
                    <button className="header_button">Войти</button>
                </div>
            </div>
        </header>
    )
}

export default Header
