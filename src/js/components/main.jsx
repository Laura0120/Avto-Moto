import React from 'react';

import Logo from './logo';
import Navigation from './navigation';
import Slider from './slider';
import Offer from './offer';
import withTabs from '../hocs/with-tabs';
import AboutProduct from './about-product';

import { NAV_HEADER, NAV_FOOTER } from '../const';
const AboutProductWrapped = withTabs(AboutProduct);

const Main = () => {
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-header__wrapper">
          <Logo />
          <Navigation navList={NAV_HEADER} modifier={`--header`} />
        </div>
      </header>
      <main className="page-content">
        <h1 className="visually-hidden">Avto-Moto</h1>
        <div className="page-content__wrapper">
          <Slider />
          <Offer />
        </div>
        <AboutProductWrapped />
      </main>
      <footer className="page-footer">
        <div className="page-footer__wrapper">
          <Navigation navList={NAV_FOOTER} modifier={`--footer`} />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Main;
