import React from 'react'
import "./navbar.scss"
import logo from "../../assets/Logo.png"
import TemporaryDrawer from '../burger-drawer/burgerMenu'
import { useTranslation } from 'react-i18next'
import ButtonMe from "../reusable-btn/button"
const Navbar = () => {
const {t, i18n} = useTranslation()

    const handleChangeLanguage =(e)=>{
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div className='nav'>
            <div className="container">
                <div className="nav-box">
                    <div className="nav-logo">
                        <img width={160} src={logo} alt="logo" />
                        <h4>{t('main.logo')}</h4>
                    </div>
                    <div className="nav-links">
                        <ul className='nav-links_items'>
                            <li><a href="#main">{t('main.nav.one')}</a></li>
                            <li><a href="#aboutUs">{t('main.nav.two')}</a></li>
                            <li><a href="#service">{t('main.nav.three')}</a></li>
                            <li><a href="#faq">{t('main.nav.four')}</a></li>
                        </ul>
                        <div className="nav-select">
                            <select className='nav-select_items' onChange={handleChangeLanguage}>
                                <option value="uz">Uzbekcha</option>
                                <option value="ru">Русский</option>
                            </select>
                        </div>
                        <div className="nav-btn">
                            <a href="#connect"><ButtonMe btnString={t('main.btn')}/></a>
                        </div>
                    </div>

                    <div className='burger-menu'>
                        <TemporaryDrawer />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar