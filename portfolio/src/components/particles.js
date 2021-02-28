import React from 'react';
import Particles from 'react-particles-js';

const P = () => {

  return (
    <Particles className="particles" 
      width={window.innerWidth - 60}
      height={window.innerHeight - 60}
      params={{
        background: {
          color: {
            value: "red",
          },
        },
        retina_detect: true,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 1500
            },
            max: 100,
          },
          
          color: {
            value: '#f24738'
          },
          links: {
            color: {
              value: "#1c1b20",
            }
          },
          size: {
            value: 4
          },
          opacity: {
            value: 1
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract",
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true,
          }
        },
      }}
    />
  );
};

export default P;