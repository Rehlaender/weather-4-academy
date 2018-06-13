import React from 'react'

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
              <p>{JSON.stringify(bee)}</p>
            )
          })
        }
        </div>
    </div>
);
