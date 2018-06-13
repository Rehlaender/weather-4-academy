import React from 'react';
import { Route } from 'react-router-dom';

//routes
import About from '../about';
import HomeContainer from '../home/homeContainer';
import CityDetailContainer from '../city-detail/cityDetailContainer';
import BeesContainer from '../bees/beesContainer';

//homebutton
import { GoHome } from '../../components/GoHome';

const App = () => (
  <div className="mainContent">
    <GoHome />
    <main>
      <Route exact path="/" component={About} />
      <Route path="/bees" component={BeesContainer} />
      <Route path="/weather" component={HomeContainer} />
      <Route path="/city-detail/:id" component={CityDetailContainer} />
    </main>
  </div>
);

export default App;
