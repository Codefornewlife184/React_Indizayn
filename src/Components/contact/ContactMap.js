import React from "react";

const ContactMap = () => {
  return (
    <>
      <section class="contact-map">
        <div class="container-fluid">
          <div class="google-map google-map__contact">
            <iframe
              title="template google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.89852592816!2d29.110653978348296!3d40.19088226341799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e94845f0ec3%3A0xbbc2811c417956fb!2sSALON%20YA%C4%9EMUR!5e0!3m2!1str!2str!4v1704665247209!5m2!1str!2str"
              class="map__contact"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
