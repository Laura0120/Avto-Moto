import React from 'react';

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
      case TABS_NAME.REVIEW:
        return <Reviews />;
      case TABS_NAME.CONTACTS:
        return <Contacts />;
      default:
        return ``;
    }
  };

  return (
    <div className="about-product">
      <div className="about-product__tabs">
        <a
          href="#"
          className={`about-product__tab-item ${
            currentTab === TABS_NAME.CHARACTERISTICS
              ? `about-product__tab-item--active`
              : ``
          }`}
          onClick={onChangeTab}
        >
          {TABS_NAME.CHARACTERISTICS}
        </a>
        <a
          href="#"
          className={`about-product__tab-item ${
            currentTab === TABS_NAME.REVIEW
              ? `about-product__tab-item--active`
              : ``
          }`}
          onClick={onChangeTab}
        >
          {TABS_NAME.REVIEW}
        </a>
        <a
          href="#"
          className={`about-product__tab-item ${
            currentTab === TABS_NAME.CONTACTS
              ? `about-product__tab-item--active`
              : ``
          }`}
          onClick={onChangeTab}
        >
          {TABS_NAME.CONTACTS}
        </a>
      </div>
      {getContentOnActiveTab()}
    </div>
  );
};

AboutProduct.propTypes = {};

export default AboutProduct;
