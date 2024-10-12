/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

const Footer = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const phoneNumber = "905465341963"; // Hedef telefon numarası

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      "Merhaba, size bir mesaj gönderiyorum!"
    )}`;

    // Yeni pencerede WhatsApp iletişim penceresini aç
    window.open(whatsappURL, "_blank");
  };

  const images = [
    {
      small: "assets/images/footer/1.png",
      big: "assets/images/1.png",
    },
    {
      small: "assets/images/footer/2.png",
      big: "assets/images/2.png",
    },
    {
      small: "assets/images/footer/3.png",
      big: "assets/images/3.png",
    },
    {
      small: "assets/images/footer/4.png",
      big: "assets/images/4.png",
    },
    {
      small: "assets/images/footer/5.png",
      big: "assets/images/5.png",
    },
    {
      small: "assets/images/footer/6.png",
      big: "assets/images/6.png",
    },
  ];

  return (
    <>
      <footer class="main-footer">
        <div
          class="main-footer__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/footer-bg.png)",
          }}
        ></div>
        <div class="container">
          <div class="main-footer__top">
            <div class="row gutter-y-10 justify-content-center align-items-center">
              <div
                class="col-md-1 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              ></div>
              <div
                class="col-md-5 wow fadeInUp justify-content-center align-items-center"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <Link
                  as={Link}
                  to="/"
                  class="main-footer__logo justify-content-center"
                  onClick={scrollToTop}
                >
                  <img
                    src="assets/images/indizayn-logo-3.png"
                    width="220"
                    alt="Boskery HTML Template"
                    class="justify-content-center"
                  />
                </Link>
              </div>
              <div
                class="col-md-1 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              ></div>
              <div
                class="col-md-5 wow fadeInUp ms-auto"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div class="footer-widget__social">
                  <a href="../index-3.htm">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    <span class="sr-only">Facebook</span>
                  </a>
                  <a href="https://twitter.com">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                    <span class="sr-only">Twitter</span>
                  </a>
                  <a href="../index-6.htm">
                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                    <span class="sr-only">Linkedin</span>
                  </a>
                  <a href="../index-7.htm" aria-hidden="true">
                    <i class="fab fa-youtube"></i>
                    <span class="sr-only">Youtube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="main-footer__widget">
            <div class="row gutter-y-50">
              <div
                class="col-lg-3 col-md-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div class="footer-widget footer-widget--links">
                  <h2 class="footer-widget__title">KURUMSAL</h2>
                  <ul class="list-unstyled footer-widget__links">
                    <li>
                      <Link as={Link} to="/" onClick={scrollToTop}>
                        Anasayfa
                      </Link>
                    </li>
                    <li>
                      <Link as={Link} to="/about" onClick={scrollToTop}>
                        Hakkımızda
                      </Link>
                    </li>
                    <li>
                      <Link as={Link} to="/Product" onClick={scrollToTop}>
                        Faaliyetlerimiz
                      </Link>
                    </li>
                    <li>
                      <Link as={Link} to="/Contact" onClick={scrollToTop}>
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-4 col-xl-2 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div class="footer-widget footer-widget--links">
                  <h2 class="footer-widget__title">Faaliyetlerimiz</h2>
                  <ul class="list-unstyled footer-widget__links">
                    <li>
                      <Link as={Link} to="about.html" onClick={scrollToTop}>
                        Endüstriyel
                      </Link>
                    </li>
                    <li>
                      <Link as={Link} to="checkout.html" onClick={scrollToTop}>
                        Tekstil - Giyim
                      </Link>
                    </li>
                    <li>
                      <Link as={Link} to="team.html" onClick={scrollToTop}>
                        Kutu
                      </Link>
                    </li>
                    <li>
                      <Link as={Link} to="blog.html">
                        Etiket
                      </Link>
                    </li>
                    <li>
                      <Link as={Link} to="contact.html" onClick={scrollToTop}>
                        Broşür
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-5 col-xl-4 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <div class="footer-widget footer-widget--contact">
                  <h2 class="footer-widget__title">iletişim</h2>
                  <div class="footer-widget__contact">
                    <address class="footer-widget__address">
                      Duaçınarı, Yüksek İhtisas Kavşağı,
                      <br />
                      Doruk Tıp Aralığı No:13, 16350 Yıldırım/Bursa
                    </address>
                    <ul class="list-unstyled footer-widget__info">
                      <li>
                        <span class="icon-paper-plane"></span>{" "}
                        <a href="mailto:info@indizayn.com.tr">
                          info@indizayn.com.tr
                        </a>
                      </li>
                      <li>
                        <span class="icon-phone-call"></span>{" "}
                        <a href="tel:+902243611166">+90 224 361 1166</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-5 col-md-4 col-sm-8 col-xl-3 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="footer-widget footer-widget--gallery">
                  <h2 className="footer-widget__title">GALERİ</h2>
                  <SRLWrapper>
                    <div className="footer-widget__gallery">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className="footer-widget__gallery__item"
                        >
                          <img src={image.small} alt={`Galeri ${index + 1}`} className="rounded-circle border border-light p-2" />
                          <span className="footer-widget__gallery__icon icon-plus"></span>
                        </div>
                      ))}
                    </div>
                  </SRLWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="main-footer__bottom">
          <div class="container">
            <div class="main-footer__bottom__inner">
              <p class="main-footer__copyright">
                <span class="dynamic-year">&copy;2024 -</span> İndizayn
                Matbaacılık <br />
                <br />
                Tüm Hakları Saklıdır.{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="back d-flex align-items-center justify-content-center active"
        alt="Up-down"
        aria-label="Up-down"
      >
        <i className="fas fa-arrow-up"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>

      <a
        href="#"
        className="whatsapp-button"
        onClick={openWhatsApp}
        rel="noopener noreferrer"
        alt="Whatsapp"
        aria-label="Whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>
    </>
  );
};

export default Footer;
