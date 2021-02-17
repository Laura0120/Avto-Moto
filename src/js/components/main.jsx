import React from 'react';

import Logo from './logo';
import NavigationHeader from './navigation-header';
import NavigationFooter from './navigation-footer';
import Slider from './slider';
import Offer from './offer';
import withTabs from '../hocs/with-tabs';
import AboutProduct from './about-product';

const AboutProductWrapped = withTabs(AboutProduct);

const Main = () => {
  return (
    <React.Fragment>
      <header className="page__header page-header">
        <div className="page-header__wrapper">
          <Logo />
          <NavigationHeader />
        </div>
      </header>
      <main className="page__content page-content">
        <div className="page-content__wrapper">
          <h1 className="visually-hidden">Avto-Moto</h1>
          <Slider />
          <Offer />
          <AboutProductWrapped />
        </div>
      </main>
      <footer className="page__footer page-footer">
        <div className="page-footer__wrapper">
          <NavigationFooter />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Main;
