import React, { useCallback, useMemo } from 'react';
import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export function ParticlesAnim() {
  const options: RecursivePartial<IOptions> | undefined = useMemo(() => {
    return {
      fullScreen: {
        zIndex: -1,
      },
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#2ec0ee',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 1.5,
            color: '#e11720',
          },
          polygon: {
            nb_sides: 7,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 4,
            size_min: 0.3,
            sync: true,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 143.70110170844643,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
  }, []);

  const particlesINit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return <Particles init={particlesINit} options={options} />;
}
