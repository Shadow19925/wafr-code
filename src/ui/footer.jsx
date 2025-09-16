import Logo from "../assets/images/Logo-image.png";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import FacebookIcon from "@mui/icons-material/Facebook";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  console.log(language);

  return (
    <div className={`footer ${language === "ar" ? "footer-Arabic" : "ltr"}`}>
      <div className="">
        <div className="footer-content">
          <Link to="/" className="flex flex-col items-center">
            <img src={Logo} alt="Logo" />
            <h2>{i18n.t("AppName")}</h2>
          </Link>
        </div>
      </div>

      <div className="footer-content">
        <p>{i18n.t("footer.contactUs")}</p>
        <p>{i18n.t("footer.ourStores")}</p>

        <p>{i18n.t("footer.termsOfService")}</p>
        <p>{i18n.t("footer.followUs")}</p>
      </div>

      <div className="footer-content">
        <p>{i18n.t("footer.frequentlyAskedQuestions")}</p>
        <p>{i18n.t("footer.subscription")}</p>
        <p>{i18n.t("footer.privacyPolicy")}</p>
        <div className="footer-socials">
          <a href="#" className="footer-social-link">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/" className="footer-social-link">
            <InstagramIcon />
          </a>
          <a href="#" className="footer-social-link">
            <XIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
