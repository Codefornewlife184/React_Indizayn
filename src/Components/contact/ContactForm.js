/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzhem5v",
        "template_q6tt0ps",
        e.target,
        "vHITrMwYs-OEE439x"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("Email başarıyla gönderildi!"));
        },
        (error) => {
          console.log(error.text);
          alert(t("Email gönderilirken bir hata oluştu!"));
        }
      );
    e.target.reset();
  }
  return (
    <>
      <section class="contact-page section-space-top">
        <div class="container">
          <div class="contact-page__wrapper">
            <div class="contact-page__content">
              <div class="contact-page__sec-title">
                <h2 class="contact-page__title">İletişim</h2>
                <p
                  class="contact-info__text contact-info__text--business-hours"
                  style={{
                    color: "#111117",
                  }}
                >
                  Soru, görüş, öneri ve istekleriniz için aşağıdaki bilgiler
                  aracılığıyla bize 7/24 ulaşabilirsiniz .
                </p>
              </div>
              <form
                onSubmit={sendEmail}
                action="assets/inc/sendemail.php"
                class="contact-page__form contact-form-validated form-one"
              >
                <div class="form-one__group">
                  <div
                    class="form-one__control wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="00ms"
                  >
                    <input type="text" placeholder={t("Adınız")} name="name" />
                  </div>
                  <div
                    class="form-one__control wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="50ms"
                  >
                    <input type="email" placeholder={t("Email")} name="email" />
                  </div>
                  <div
                    class="form-one__control wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="00ms"
                  >
                    <input type="text" placeholder={t("Gsm")} name="phone" />
                  </div>
                  <div
                    class="form-one__control wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="50ms"
                  >
                    <input type="text" placeholder={t("Konu")} name="subject" />
                  </div>
                  <div
                    class="form-one__control form-one__control--full wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                  >
                    <textarea
                      name="message"
                      placeholder={t("Mesajınız")}
                    ></textarea>
                  </div>
                  <div
                    class="form-one__control form-one__control--full wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="150ms"
                  >
                    <button type="submit" class="boskery-btn">
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__text">{t("Gönder")}</span>
                      <i class="icon-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div class="result"></div>
            </div>
            <div
              class="contact-page__image wow fadeInRight"
              data-wow-duration="1500ms"
            >
              <img
                src="assets/images/form.png"
                alt="contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
