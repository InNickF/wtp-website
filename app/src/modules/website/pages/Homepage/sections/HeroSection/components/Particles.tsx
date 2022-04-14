import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import TSParticles from 'react-tsparticles'

const Particles = () => {
  const [options, setOptions] = useState<any>({
    particles: {
      number: {
        value: 20
      },
      color: {
        value: '#fc7e2c'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0
        }
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: false,
          speed: 7,
          opacity_min: 0.1,
          sync: true
        }
      },
      size: {
        value: 2.5,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: '#fc6c58',
        opacity: 0.35,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'bounce',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 280,
          line_linked: {
            opacity: 0.5
          }
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    retina_detect: true
  })
  useEffect(() => {
    if (window.screen.width > 800) {
      setOptions({
        particles: {
          number: {
            value: 120
          },
          color: {
            value: '#fc7e2c'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0
            }
          },
          opacity: {
            value: 0.7,
            random: false,
            anim: {
              enable: false,
              speed: 7,
              opacity_min: 0.1,
              sync: true
            }
          },
          size: {
            value: 2.5,
            random: true,
            anim: {
              enable: false
            }
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: '#fc6c58',
            opacity: 0.35,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 280,
              line_linked: {
                opacity: 0.5
              }
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        retina_detect: true
      })
    }
  }, [])
  useEffect(() => {
    gsap.set('#particles canvas', {
      position: 'absolute',
      zIndex: 1
    })
    gsap.fromTo(
      '#particles',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.7,
        delay: 0.7,
        ease: 'Porwer1.easeInOut'
      }
    )
  })
  return (
    <>
      <TSParticles id="particles" options={options} />
    </>
  )
}

export default Particles
