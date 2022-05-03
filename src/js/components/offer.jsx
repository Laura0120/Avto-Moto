import React from 'react';
import { MAIN_URL } from '../const';

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
      <div className="offer__wrapper">
        <a
          href={MAIN_URL}
          className="offer__button offer__button--application button button--active"
        >
          оставить заявку
        </a>
        <a href={MAIN_URL} className="offer__button offer__button--credit button">
          в кредит от 11 000 ₽
        </a>
      </div>
    </section>
  );
};

export default Offer;
