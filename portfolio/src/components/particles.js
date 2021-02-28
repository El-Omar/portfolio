import React, { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';

const P = () => {
  const WIDTH = useRef(1920);
  const HEIGHT = useRef(1080);

  useEffect(() => {
    WIDTH.current = window.innerWidth - 60;
    HEIGHT.current = window.innerHeight - 60;
  }, []);

  return (
    <Particles className="particles" 
      width={WIDTH.current}
      height={HEIGHT.current}
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