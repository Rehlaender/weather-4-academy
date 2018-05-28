import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeContainer from '../home/homeContainer';
import About from '../about';
import CityDetailContainer from '../city-detail/cityDetailContainer';

const App = () => (
  <div className="mainContent">
    <header>
      <h1 style={{ textAlign: 'center' }}>
        temperature for saved cities with redux n thunk
      </h1>
    </header>

    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/city-detail/:id" component={CityDetailContainer} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
