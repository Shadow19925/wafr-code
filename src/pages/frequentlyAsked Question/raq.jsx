import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppHeader from "../../ui/appHeader";
import Footer from "../../ui/footer";

import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { i18n, t } = useTranslation();
  const language = i18n.language;

  return (
    <>
      <AppHeader />
      <div className="faq-page">
        <div className="faq-container" dir={language === "ar" ? "rtl" : "ltr"}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            <h1>{t("FAQ.title")}</h1>
          </Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel0-content"
              id="panel0-header"
            >
              <Typography fontWeight="bold">
                <h2>{t("FAQ.q1.question")} </h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{t("FAQ.q1.answer")}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontWeight="bold">
                <h2>{t("FAQ.q2.question")}</h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{t("FAQ.q2.answer")}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
}
