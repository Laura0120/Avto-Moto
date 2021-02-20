import React from 'react';

const Contacts = () => {
  return (
    <div className="about-product__contacts contacts">
      <h2 className="visually-hidden">Контакты</h2>
      <div className="contacts__context">
        <dl>
          <dt>Адрес</dt>
          <dd>Санкт-Петербург, набережная реки Карповки, дом 5</dd>
        </dl>
        <dl>
          <dt>Режим работы</dt>
          <dd>Ежедневно, с 10:00 до 21:00</dd>
        </dl>
        <dl>
          <dt>Телефон</dt>
          <dd>8 (800) 333-55-99</dd>
        </dl>
        <dl>
          <dt>E-mail</dt>
          <dd>info@avto-moto.ru</dd>
        </dl>
      </div>
      <div className="contacts__map-wrapper">
        <img src={'img/map.png'} alt="мы на карте" width="431" height="271" />
      </div>
      <iframe
        className="contacts__map-google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.830012543241!2d30.31430331650673!3d59.96814316667979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1613410886659!5m2!1sru!2sru"
        width="431"
        height="271"
      ></iframe>
    </div>
  );
};

export default Contacts;
