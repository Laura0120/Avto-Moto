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
      case TABS_NAME[0]:
        return <Characteristics />;
      case TABS_NAME[1]:
        return <Reviews />;
      case TABS_NAME[2]:
        return <Contacts />;
      default:
        return ``;
    }
  };

  return (
    <div className="about-product">
      <div className="about-product__tabs">
        {TABS_NAME.map((tab, index) => (
          <a
            href="#"
            className={`about-product__tab-item ${
              currentTab === tab ? `about-product__tab-item--active` : ``
            }`}
            key={index}
            onClick={onChangeTab}
          >
            {tab}
          </a>
        ))}
      </div>
      {getContentOnActiveTab()}
    </div>
  );
};

AboutProduct.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired,
};

export default AboutProduct;
