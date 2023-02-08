import './styles.css'
import LogoBranco from '../../assets/Shopvisie-logo-branco.png'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='footer__logo'>
                    <Link to={'/'}>
                        <img src={LogoBranco} alt="Logo ShopVisie branco" />
                    </Link>
                </div>

                <div className='footer__legenda'>
                    <p> Copyright © 2023. Todos os direitos reservados.</p>
                </div>

                <div className='footer__legenda'>
                    redes sociais
                </div>
            </div>
        </>
    )

}