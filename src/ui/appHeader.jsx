import { useLanguage } from "../hooks/languageHook";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScreenSize } from "../hooks/screenHook";
import { Link, useNavigate } from "react-router";

import Logo from "../assets/images/Logo-image.png";
import LanguageIcon from "@mui/icons-material/Language";

import Menu from "../assets/icons/icon-menu.svg";
import CloseMenu from "../assets/icons/icon-close-menu.svg";
export default function AppHeader() {
  const { language, changeLanguage } = useLanguage();
  const { i18n } = useTranslation();
  const { isMobile } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // console.log("isMobile:", isMobile);

  return isMobile ? (
    <header className="header-mobile">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1 className="font-bold text-xl">{i18n.t("AppName")}</h1>
      </div>
      <div className="menu-icon">
        {!isMenuOpen ? (
          <button onClick={() => setIsMenuOpen((prv) => !prv)}>
            <img src={Menu} alt="Menu" />
          </button>
        ) : (
          <div className="mobile-menu">
            <div className="mobile-header">
              <Link to="/" className="flex justify-center items-center">
                <img src={Logo} alt="Logo" />
                <h1 className="font-bold text-xl">{i18n.t("AppName")}</h1>
              </Link>

              <button onClick={() => setIsMenuOpen(false)}>
                <img src={CloseMenu} alt="Close Menu" />
              </button>
            </div>

            <ul className="mobile-menu-list">
              <li>
                <Link to="/subscription">
                  {i18n.t("appLayout.subscriptions")}
                </Link>
              </li>
              <li>
                <Link to="/stores">{i18n.t("appLayout.Stores")}</Link>
              </li>
              <li>
                <Link to="/about">{i18n.t("appLayout.about")}</Link>
              </li>
            </ul>

            <div className="language-switcher">
              <LanguageIcon sx={{ color: "white" }} />

              <button
                onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
              >
                {language === "en" ? "AR" : "EN"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="flex justify-center items-center">
            <img src={Logo} alt="Logo" />
            <h1 className="font-bold text-xl">{i18n.t("AppName")}</h1>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/subscription">
                {i18n.t("appLayout.subscriptions")}
              </Link>
            </li>
            <li>
              <Link to="/stores">{i18n.t("appLayout.Stores")}</Link>
            </li>
            <li>
              <Link to="/about">{i18n.t("appLayout.about")}</Link>
            </li>
          </ul>
        </div>
        <div className="header-actions">
          <button className="join-button">{i18n.t("appLayout.join")}</button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="login-button"
          >
            {i18n.t("appLayout.Login")}
          </button>
        </div>

        <div className="language-switcher">
          <LanguageIcon sx={{ fontSize: 30 }} />

          <button
            onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
          >
            {language === "en" ? "AR" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}
