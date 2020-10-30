import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Warning from './components/warning/warning.component';
import HomePage from './pages/homepage/homepage.component';
import ItemPage from './pages/itempage/itempage.component';
import SearchPage from './pages/searchpage/searchpage.component';
import WorldPage from './pages/worldpage/worldpage.component';

function App() {

  return (
    <div>
      <Header />
      <Warning />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/item/:id" component={ItemPage} />
        <Route path="/monster/:id" component={ItemPage} />
        <Route path="/world" component={WorldPage} />
      </Switch>
    </div>
  );
}

export default App;
