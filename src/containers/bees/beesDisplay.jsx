import React from 'react'
import { Bee } from '../../components/Bee';

export const beesDisplay = ({
  bees
  }) => (
    <div className="beesContainer">
        <header>
          <h1 style={{ textAlign: 'center' }}>
            bees
          </h1>
        </header>
        <div className="bees">
        {
          bees.map((bee, i) => {
            return (
              <Bee bee={bee} key={i}/>
            )
          })
        }
        </div>
    </div>
);
