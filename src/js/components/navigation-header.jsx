import React from 'react';
import PropTypes from 'prop-types';

const NavigationHeader = () => {
  return (
    <nav className="navigation navigation--header">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#">Автомобили</a>
        </li>
        <li className="navigation__item">
          <a href="#">Контакты</a>
        </li>
        <li className="navigation__item">
          <a href="#">Услуги</a>
        </li>
        <li className="navigation__item">
          <a href="#">Вакансии</a>
        </li>
      </ul>
    </nav>
  );
};

NavigationHeader.propTypes = {};

export default NavigationHeader;
