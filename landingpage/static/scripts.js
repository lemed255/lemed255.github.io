tsParticles.load("particles", {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 60,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        distance: 80,
        duration: 0.1,
      },
    },
  },
  particles: {
    color: {
      value: "#03a9f4",
    },
    animation: {
      enable: true,
      speed: 50,
      sync: false,
    },
    links: {
      color: {
        value: "random",
      },
      distance: 100,
      enable: true,
      frequency: 1,
      opacity: 0.7,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 50,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 0.5,
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
        startValue: "random",
        sync: false,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 3,
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 1,
        speed: 3,
        startValue: "random",
        sync: false,
      },
    },
  },
  pauseOnBlur: true,
});
