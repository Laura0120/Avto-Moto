import React from 'react';

const Contacts = () => {
  return (
    <div className="about-product__contacts contacts">
      <h2 className="visually-hidden">Контакты</h2>
      <div className="contacts__context">
        <dl className="contacts__address">
          <dt>Адрес</dt>
          <dd>Санкт-Петербург, набережная реки Карповки, дом 5</dd>
        </dl>
        <dl className="contacts__operating-mode">
          <dt>Режим работы</dt>
          <dd>Ежедневно, с 10:00 до 21:00</dd>
        </dl>
        <dl className="contacts__telephone">
          <dt>Телефон</dt>
          <dd>8 (800) 333-55-99</dd>
        </dl>
        <dl className="contacts__email">
          <dt>E-mail</dt>
          <dd>info@avto-moto.ru</dd>
        </dl>
      </div>
      <div className="contacts__map-wrapper">
        <picture>
          <source media="(min-width: 1223px)" srcSet={'/img/map.png'} />
          <source media="(min-width: 768px)" srcSet={'/img/map-tablet.png'} />
          <img
            src={'/img/map-mobile.png'}
            loading="lazy"
            alt="мы на карте"
            width="288"
            height="288"
          />
        </picture>
        {/* <iframe
        className="contacts__map-google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.830012543241!2d30.31430331650673!3d59.96814316667979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1613410886659!5m2!1sru!2sru"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Contacts;
