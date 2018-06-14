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
      <Route exact path="/react-portfolio" component={About} />
      <Route path="/react-portfolio/bees" component={BeesContainer} />
      <Route path="/react-portfolio/weather" component={HomeContainer} />
      <Route
        path="/react-portfolio/city-detail/:id"
        component={CityDetailContainer}
      />
    </main>
  </div>
);

export default App;
