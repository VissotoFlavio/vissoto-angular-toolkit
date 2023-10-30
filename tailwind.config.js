module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts,js}'],
  theme: {
    fontFamily: {
      roboto: ['roboto'],
    },
    screens: {
      '2xs': '320px',
      // => @media (min-width: 320px) { ... }
      xsm: '480px',
      // => @media (min-width: 480px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'type-grass': "url('src/assets/img/details_type_bg_grass.png')",
        'type-fire': "url('src/assets/img/details_type_bg_fire.png')",
        'type-water': "url('src/assets/img/details_type_bg_water.png')",
        'type-poison': "url('src/assets/img/details_type_bg_poison.png')",
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
      margin: {
        16.25: '4.25rem',
      },
      spacing: {
        16.25: '4.25rem',
      },
      inset: {
        16.25: '4.25rem',
      },
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
    },
  },
  variants: {
    extend: {
      margin: ['last', 'even'],
    },
  },
  plugins: [],
};
