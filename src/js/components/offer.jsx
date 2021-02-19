import React from 'react';

const Offer = () => {
  return (
    <section className="page-content__offer offer">
      <h2 className="offer__title">Марпех 11</h2>
      <ul className="offer__properties properties-list">
        <li className="properties-list__item">бензин</li>
        <li className="properties-list__item">механика</li>
        <li className="properties-list__item">100 л.с.</li>
        <li className="properties-list__item">1.4 л</li>
      </ul>
      <div className="offer__price-tag">
        <span className="offer__current-price">2 300 000 ₽</span>
        <span className="offer__old-price">2 400 000 ₽</span>
      </div>
      <a href="#" className="offer__button button button--active">
        оставить заявку
      </a>
      <a href="#" className="offer__button button">
        в кредит от 11 000 ₽
      </a>
    </section>
  );
};

export default Offer;
