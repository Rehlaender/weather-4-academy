import React from 'react';
import { Route } from 'react-router-dom';

//routes
import HomeContainer from '../home/homeContainer';
import About from '../about';
import CityDetailContainer from '../city-detail/cityDetailContainer';

//homebutton
import { GoHome } from '../../components/GoHome';

const App = () => (
  <div className="mainContent">
    <GoHome />
    <main>
      <Route exact path="/" component={About} />
      <Route path="/weather" component={HomeContainer} />
      <Route path="/city-detail/:id" component={CityDetailContainer} />
    </main>
  </div>
);

export default App;
