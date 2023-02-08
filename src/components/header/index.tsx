import React, { useState } from "react";
import FaixaInformativo from "../faixaInformativa/Index";
import './styles.css'
import logo from '../../assets/shopvisie-logo.png'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <FaixaInformativo />
            <div className="bloco-header">
                <div className="header__bar">
                    <div className="header__logo">
                        <Link to={'/'}>
                            <img src={logo} alt="Logo ShopVisie" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header