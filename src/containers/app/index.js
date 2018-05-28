import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeContainer from '../home/homeContainer';
import About from '../about';
import CityDetailContainer from '../city-detail/cityDetailContainer';

const App = () => (
  <div className="mainContent">
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/city-detail/1">city detail </Link>
    </header>

    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/city-detail/:id" component={CityDetailContainer} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
