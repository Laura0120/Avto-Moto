import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  const { navList, modifier } = props;
  return (
    <nav className={`navigation ${modifier ? `navigation${modifier}` : ``}`}>
      <ul className="navigation__list">
        {navList.map((item, index) => (
          <li className="navigation__item" key={index}>
            <a href="#" >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navList: PropTypes.array.isRequired,
  modifier: PropTypes.string,
};

export default Navigation;
