import React, { useState } from 'react';

import { TABS_NAME } from '../const';

const withTabs = (Component) => {
  const WithTabs = (props) => {
    const [currentTab, setCurrentTab] = useState(TABS_NAME[0]);

    return (
      <Component
        {...props}
        currentTab={currentTab}
        onChangeTab={(evt) => {
          evt.preventDefault();
          const tab = evt.target;
          setCurrentTab(tab.textContent);
        }}
      />
    );
  };

  return WithTabs;
};

export default withTabs;
