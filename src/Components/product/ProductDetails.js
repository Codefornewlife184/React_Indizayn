/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactOwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";
import ProductCarousel from "./ProductCarousel";
import ProductTitleVideo from "./ProductTitleVideo";
import ProductShare from "./ProductShare";
import ProductDesc from "./ProductDesc";

function ProductDetails() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    handleSelect(activeIndex === 0 ? 5 : activeIndex - 1);
  };

  const handleNext = () => {
    handleSelect(activeIndex === 5 ? 0 : activeIndex + 1);
  };

  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <SRLWrapper>
        <section class="product-details section-space">
          <div class="container">
            <div class="row gutter-y-50">
              <div
                class="col-lg-6 col-xl-6 wow fadeInLeft"
                data-wow-delay="200ms"
              >
                <div class="product-details__img">
                  <div class="swiper product-details__gallery-top p-5">
                    <ProductCarousel />
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-xl-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div class="product-details__content">
                  <ProductTitleVideo title="Matbaa" video="" />
                  <div class="product-details__excerpt">
                    <ProductDesc
                      title1={t("Başlık1")}
                      desc1={t("Açıklama1")}
                      title2={t("Başlık2")}
                      desc2={t("Açıklama2")}
                    />
                  </div>

                  <div class="product-details__info mt-4">
                    <ProductShare />
                  </div>
                  <div class="product-details__buttons">
                    <Link
                      as={Link}
                      to="/Product"
                      class="product-details__btn boskery-btn"
                    >
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__hover"></span>
                      <span class="boskery-btn__text">
                        {" "}
                        diğer FAALİYETLERİMİZ
                      </span>
                      <i class="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-details__description-wrapper">
            <div class="container">
              <div class="product-details__description">
                <h3 class="product-details__description__title">
                  product Description
                </h3>
                <div
                  class="product-details__text__box wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <p class="product-details__description__text">
                    Neque porro est qui dolorem ipsum quia quaed inventor
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Aelltes port lacus quis enim var sed efficitur
                    turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </p>
                  <p class="product-details__description__text">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Aelltes port
                    lacus quis enim var sed efficitur turpis gilla sed sit{" "}
                    <br />
                    amet finibus eros. Neque porro est qui dolorem ipsum quia
                    quaed inventor veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Aelltes port lacus quis enim var sed
                    efficitur turpis gilla sed sit amet finibus eros. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry
                  </p>
                  <p class="product-details__description__text">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Aelltes port
                    lacus quis enim var sed efficitur turpis gilla sed sit amet
                    finibus eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default ProductDetails;
