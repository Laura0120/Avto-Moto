import React from 'react';
import PropTypes from 'prop-types';

import { TABS_NAME } from '../const';
import Characteristics from '../components/characteristics';
import Contacts from '../components/contacts';
import Reviews from '../components/reviews';

const AboutProduct = (props) => {
  const { currentTab, onChangeTab } = props;

  const getContentOnActiveTab = () => {
    switch (currentTab) {
      case TABS_NAME.CHARACTERISTICS:
        return <Characteristics />;
      case TABS_NAME.REVIEWS:
        return <Reviews />;
      case TABS_NAME.CONTACTS:
        return <Contacts />;
      default:
        return ``;
    }
  };

  const getValueTab = () => {
    switch (currentTab) {
      case TABS_NAME.CHARACTERISTICS:
        return `charactetistics`;
      case TABS_NAME.REVIEWS:
        return `reviews`;
      case TABS_NAME.CONTACTS:
        return `contacts`;
      default:
        return ``;
    }
  };

  return (
    <React.Fragment>
      <div className={`page-content__tabs-product tabs-product`}>
        <div
          className={`tabs-product__wrapper tabs-product__wrapper--${getValueTab()}`}
        >
          {Object.entries(TABS_NAME).map((tab, index) => (
            <a
              href="#"
              className={`tabs-product__item ${
                currentTab === tab[1] ? `tabs-product__item--active` : ``
              }`}
              key={index}
              onClick={onChangeTab}
            >
              {tab[1]}
            </a>
          ))}
        </div>
      </div>
      <div className="about-product">{getContentOnActiveTab()}</div>
    </React.Fragment>
  );
};

AboutProduct.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired,
};

export default AboutProduct;
