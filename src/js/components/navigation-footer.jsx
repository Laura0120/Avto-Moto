import React from 'react';
import PropTypes from 'prop-types';

const NavigationFooter = () => {
  return (
    <nav className="navigation navigation--footer">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#">Корпоративным клиентам</a>
        </li>
        <li className="navigation__item">
          <a href="#">Клиентам</a>
        </li>
        <li className="navigation__item">
          <a href="#">Аренда авто</a>
        </li>
        <li className="navigation__item">
          <a href="#">Каршеринг</a>
        </li>
        <li className="navigation__item">
          <a href="#">Как продать авто</a>
        </li>
        <li className="navigation__item">
          <a href="#">Traid-in</a>
        </li>
        <li className="navigation__item">
          <a href="#">Test draiv</a>
        </li>
      </ul>
    </nav>
  );
};

NavigationFooter.propTypes = {};

export default NavigationFooter;
