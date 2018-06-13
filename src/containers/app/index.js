import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeContainer from '../home/homeContainer';
import About from '../about';
import CityDetailContainer from '../city-detail/cityDetailContainer';

const App = () => (
  <div className="mainContent">
    <main>
      <Route exact path="/" component={About} />
      <Route path="/weather" component={HomeContainer} />
      <Route path="/city-detail/:id" component={CityDetailContainer} />
    </main>
  </div>
);

export default App;
