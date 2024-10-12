import React from "react";
import Contact from "../Components/contact/Contact";
import Spacer2 from "../Components/common/Spacer2";
import PageHeader from "../Components/common/PageHeader";
import { t } from "i18next";

function ContactPage() {
  return (
    <>
    <PageHeader title={t("İletişim")}/>
      <Spacer2/>
      <Contact />  
    </>
  );
}

export default ContactPage;
