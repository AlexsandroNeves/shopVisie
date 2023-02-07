import React from "react";
import FaixaInformativo from "../faixaInformativa/Index";
import './styles.css'

const Header = () => {
    return (
        <>
            <FaixaInformativo />
            <div className="bloco-header">
                <div className="header__bar">
                    <div>
                        ShopVisie
                    </div>
                    <div className="header__search">
                        <input type="text" placeholder="O que você está procurando?" name="" id="" />
                    </div>

                    <div>
                        <a href="#">Login | Cadastre-se</a>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Header