import React from "react";
import About from "../Components/about/About";
import PageHeader from "../Components/common/PageHeader";
import Contact from "../Components/contact/Contact";
import { useTranslation } from "react-i18next";
// import Spacer2 from "../Components/common/Spacer2";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("HAKKIMIZDA")} />
      <About />
    </>
  );
}

export default AboutPage;
