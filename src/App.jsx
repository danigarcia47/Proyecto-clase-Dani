import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BootstrapHeader from '.components/BootstrapHeader';
import { Menu } from '.data/Menu';

export function App() {
  return (
    <Router>
      <BootstrapHeader />
      {Menu.map((item) => {
        return (
          <Route
            key = {item.id}
            path = {item.path}
            exact
            component = {item.component}
          />
        )
      })}
    </Router>
  );
}