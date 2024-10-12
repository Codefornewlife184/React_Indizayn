/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [showSubMenu, setShowSubMenu] = useState(false); // Alt menünün görünürlüğünü saklar

  const handleMouseEnter = () => {
    setShowSubMenu(true); // Mouse üstüne geldiğinde alt menüyü göster
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false); // Mouse menünün üstünden çıktığında alt menüyü gizle
  };

  return (
    <>
      <header className="main-header sticky-top fixed-top">
        <div className="topbar fixed-top sticky-top" style={{ padding: "7px" }}>
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span className="topbar__wrapper">
                  <ul className="list-unstyled topbar__list">
                    <li>
                      <span className="fas fa-envelope"></span>
                      <a href="mailto:info@indizayn.com.tr">
                        info@indizayn.com.tr
                      </a>
                    </li>
                  </ul>
                </span>
              </div>

              <div className="d-flex">
                <div class="footer-widget__socials">
                  <Link as={Link} to="" onClick={() => changeLanguage("tr")}>
                    {t("TR")}
                  </Link>
                  <Link as={Link} to="" onClick={() => changeLanguage("en")}>
                    {t("EN")}
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar-light"
          expanded={expanded}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" className="main-menu__logo" onClick={handleClick}>
                <img src="assets/images/indi-logo.png" alt="Logo" />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="navbarCollapse"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse
              expanded={expanded}
              className="justify-content-center py-3"
              id="basic-navbar-nav"
            >
              <Nav className="navbar-nav mx-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={handleClick}
                  className="nav-item nav-link active"
                >
                  {t("ANASAYFA")}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Aboutus"
                  className="nav-link scrollto"
                  onClick={handleClick}
                >
                  {t("HAKKIMIZDA")}
                </Nav.Link>

                <NavDropdown
                  title={t("FAALİYETLERİMİZ")}
                  id="basic-nav-dropdown"
                  className="nav-item nav-link"
                  onMouseEnter={handleMouseEnter} // Mouse üstüne gelince alt menüyü göster
                  onMouseLeave={handleMouseLeave} // Mouse menünün üstünden çıkınca alt menüyü gizle
                  show={showSubMenu} //
                >
                 <NavDropdown.Item
                    as={Link}
                    to="/Endustriyel"
                    onClick={handleClick}
                  >
                    {t("ENDÜSTRİYEL")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Endustriyel"
                    onClick={handleClick}
                  >
                    {t("tEKSTİL - GİYİM")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/ETİKET"
                    onClick={handleClick}
                  >
                    {t("ETİKET")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/BROŞÜR"
                    onClick={handleClick}
                  >
                    {t("BROŞÜR")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/KozmetikUrunleri"
                    onClick={handleClick}
                  >
                    {t("KATALOG")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/BitkiselUrunler"
                    onClick={handleClick}
                  >
                    {t("DAVETİYE")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Ambalaj"
                    onClick={handleClick}
                  >
                    {t("İÇECEK")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Gida" onClick={handleClick}>
                    {t("GIDA")}
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="/Sidebar"
                  className="nav-item nav-link"
                  onClick={handleClick}
                >
                  {t("SİDEBAR")}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Contact"
                  className="nav-item nav-link"
                  onClick={handleClick}
                >
                  {t("İLETİŞİM")}
                </Nav.Link>

                {/* <Nav.Link
                  href="https://wa.me/905321621647"
                  title={t("Bize Whatsapptan Ulaşın")}
                  target={"_blank"}
                  className="social-links"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ fontSize: "24px" }}
                  ></i>
                </Nav.Link> */}
              </Nav>

              <div class="footer-widget__social">
                <a href="../index-3.htm">
                  <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  <span class="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                  <span class="sr-only">Twitter</span>
                </a>
                <a href="../index-7.htm" aria-hidden="true">
                  <i class="fas fa-mobile-alt"></i>
                  <span class="sr-only">Youtube</span>
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <hr style={{ marginTop: "121px", border:"2px solid #1c3844" }} />
        <hr style={{ marginTop: "-18px", border:"2px solid #369159" }} /> */}
      </header>
    </>
  );
}

export default Header;
