import React, { useState, useEffect } from 'react';

import Logo from './logo';
import Navigation from './navigation';
import Slider from './slider';
import Offer from './offer';
import withTabs from '../hocs/with-tabs';
import AboutProduct from './about-product';

import { NAV_HEADER, NAV_FOOTER, NOT_DESKTOP_WIDTH } from '../const';
const AboutProductWrapped = withTabs(AboutProduct);

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > NOT_DESKTOP_WIDTH
  );

  window.onresize = () => {
    setIsDesktop(window.innerWidth > NOT_DESKTOP_WIDTH);
  };

  useEffect(() => {
    isDesktop ? setIsOpen(true) : setIsOpen(false);
  }, [isDesktop]);

  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-header__wrapper">
          <Logo />
          <Navigation
            navList={NAV_HEADER}
            modifier={`--header`}
            isOpen={isOpen}
            isDesktop={isDesktop}
            onChangeToggle={setIsOpen}
          />
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
          <Navigation
            navList={NAV_FOOTER}
            modifier={`--footer`}
            isOpen={true}
          />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Main;
