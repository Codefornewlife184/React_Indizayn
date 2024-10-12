/* eslint-disable no-unused-vars */
import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PageHeader(props) {
  const { t } = useTranslation();

  return (
    <>
      <section className="page-header mt--120">
        <div
          class="contact-info__business-hours__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/contact-bg-1-2.png)",
          }}
        ></div>
        <div className="container justify-content-center align-items-center mb-3">
          <h2 className="page-header__title text-center">{t(props.title)}</h2>
          <ul className="page-header__breadcrumb list-unstyled text-center">
            <li>
              <Link to="/">{t("Anasayfa")}</Link>
            </li>
            <li>
              <span>{t(props.title)}</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default PageHeader;
