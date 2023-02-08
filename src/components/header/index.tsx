import React, { useState } from "react";
import FaixaInformativo from "../faixaInformativa/Index";
import './styles.css'
import logo from '../../assets/shopvisie-logo.png'



const Header = () => {
    const [busca, setBusca] = useState('')

    return (
        <>
            <FaixaInformativo />
            <div className="bloco-header">
                <div className="header__bar">
                    <div className="header__logo">
                        <img src={logo} alt="Logo ShopVisie" />
                    </div>
                    <div className="header__container">
                        <div className="header__search">
                            <input type="text" placeholder="O que você está procurando?" onChange={(ev) => setBusca(ev.target.value)}
                                value={busca} />
                        </div>

                        <div>
                            <a href="#">Login | Cadastre-se</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Header