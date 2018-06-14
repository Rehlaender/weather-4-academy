import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <h1>react portfolio by rehlaender</h1>
    <hr />
    <Link to="/react-portfolio/bees">
      <button>
        <i style={{ color: 'white' }} className="fa fa-forumbee" />{' '}
        <span style={{ color: 'white' }}>bees example</span>
      </button>
    </Link>
    <Link to="/react-portfolio/weather">
      <button>
        <i style={{ color: 'white' }} className="fa fa-bolt" />{' '}
        <span style={{ color: 'white' }}>weather example</span>
      </button>
    </Link>
    <p>random keywords about the proyect for random people</p>
    <ul>
      <li>create-react-app</li>
      <li>
        <i style={{ color: 'white' }} className="fa fa-heart" />
        <strong> react </strong>
        <i style={{ color: 'white' }} className="fa fa-heart" />
      </li>
      <li>redux</li>
      <li>thunk</li>
      <li>react-motion</li>
      <li>es6</li>
      <li>responsive</li>
      <li>css-animate</li>
    </ul>
  </div>
);

export default About;
