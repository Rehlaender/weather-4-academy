import React from 'react'

import happyBee from '../assets/bee/happy_bee.png';
import angryBee from '../assets/bee/angry_bee.png';

export const Bee = (props) => (
    <div key={props.bee.id}
      style={
        { position: 'absolute',
          top: props.bee.y,
          left: props.bee.x,
        }
      }>
      <img src={(props.bee.happy) ? happyBee : angryBee} style={{height: 'auto', width: '50px'}}/>
    </div>

);
