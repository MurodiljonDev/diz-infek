import React, { useEffect } from "react";
import "./navbar.scss";
import logo from "../../assets/Logo.png";
import TemporaryDrawer from "../burger-drawer/burgerMenu";
import { useTranslation } from "react-i18next";
import ButtonMe from "../reusable-btn/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langNow, setNalgNow] = React.useState(null)
  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  React.useEffect(() => {
    const lang = localStorage.getItem("i18nextLng") == "ru"
    ? "Русский"
    : "Uzbek"
    setNalgNow(lang)
  }, []);


 
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-box">
          <div className="nav-logo">
            <img width={160} src={logo} alt="logo" />
            <h4>{t("main.logo")}</h4>
          </div>
          <div className="nav-links">
            <ul className="nav-links_items">
              <li>
                <a href="#main">{t("main.nav.one")}</a>
              </li>
              <li>
                <a  onClick={()=> window.scrollTo(540,540)}  >{t("main.nav.two")}</a>
              </li>
              <li>
                <a onClick={()=> window.scrollTo(1100,1100)}>{t("main.nav.three")}</a>
              </li>
              <li>
                <a onClick={()=> window.scrollTo(2400,2400)}>{t("main.nav.four")}</a>
              </li>
            </ul>
            <div className="nav-select">
              <select
                className="nav-select_items"
                onChange={handleChangeLanguage}
              >
                <option selected hidden>
                  {" "}
                  {langNow}
                </option>
                <option value="uz">Uzbekcha</option>
                <option value="ru">Русский</option>
              </select>
            </div>
            <div className="nav-btn">
              <a href="#connect">
                <ButtonMe btnString={t("main.btn")} />
              </a>
            </div>
          </div>

          <div className="burger-menu">
            <TemporaryDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
