import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  const { navList, modifier, isOpen, onChangeToggle, isDesktop } = props;

  return (
    <React.Fragment>
      {modifier === `--header` && !isDesktop ? (
        <button
          type="button"
          className={`navigation__toggle ${
            isOpen ? `navigation__toggle--open` : `navigation__toggle--closed`
          }`}
          onClick={() => onChangeToggle(!isOpen)}
        >
          <span className="visually-hidden">
            {isOpen ? `Закрыть навигацию` : `Открыть навигацию`}
          </span>
        </button>
      ) : (
        ``
      )}
      {isOpen ? (
        <nav className={`navigation navigation${modifier}`}>
          <ul className="navigation__list">
            {navList.map((item, index) => (
              <li className="navigation__item" key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        ``
      )}
    </React.Fragment>
  );
};

Navigation.propTypes = {
  navList: PropTypes.array.isRequired,
  modifier: PropTypes.string.isRequired,
};

export default Navigation;
