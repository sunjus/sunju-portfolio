import Particles from 'react-particles-js';

import React from 'react';

function Particle() {
  return (
    <>
      <Particles width="100%"
              params={{
                "particles": {
                  "number": {
                      "value": 60,
                      "density": {
                          "enable": true,
                          "value_area": 1500
                      }
                  },
                  "color": {
                    "value": "#fff"
                  },
                  "line_linked": {
                      "enable": true,
                      "opacity": 0.2,
                      "color": {
                        "value": "#fff"
                    },
                  },
                  "move": {
                      "direction": "right",
                      "speed": 1
                  },
                  "size": {
                      "value": 1
                  },
                  "opacity": {
                      "anim": {
                          "enable": true,
                          "speed": 30,
                          "opacity_min": 1
                      }
                  }
              },
              "interactivity": {
                  "events": {
                      "onclick": {
                          "enable": true,
                          "mode": "push"
                      }
                  },
                  "modes": {
                      "push": {
                          "particles_nb": 1
                      }
                  }
              },
              "retina_detect": true
              }}
      />
    </>
  )
}

export default Particle;