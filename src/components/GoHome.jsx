import React from 'react'
import { Link } from 'react-router-dom';
export const GoHome = (props) => (
    (window.location.pathname !== '/') ? (
      <Link to="/react-portfolio" className="gohomebutton">
        <div style={{...style}}><i style={{color: 'white'}} className="fa fa-home"></i>
        </div>
      </Link>
    ) : null
);

const style = {
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 100,
  borderRadius: '0px 0px 0px 15px',
  padding: '1em',
  background: 'tomato',
};
