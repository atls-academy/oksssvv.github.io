const colors = {
  button: {
    transparentBackground: {
      default: {
        background: 'rgba(255, 255, 255, 0.2)',
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(255, 255, 255, 1)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 0.35)',
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(255, 255, 255, 1)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 0.5)',
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(255, 255, 255, 1)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(255, 255, 255, 0.2)',
      },
    },

    transparentBorder: {
      default: {
        font: '0',
        background: 'rgba(0,0,0,0)',
        border: 'rgba(255, 255, 255, 0.25)',
      },
      hover: {
        font: '0',
        background: 'rgba(0,0,0,0)',
        border: 'rgba(255, 255, 255, 0.25)',
      },
      pressed: {
        font: '0',
        background: 'rgba(0,0,0,0)',
        border: 'rgba(255, 255, 255, 0.25)',
      },
      disabled: {
        font: '0',
        background: 'rgba(0,0,0,0)',
        border: 'rgba(255, 255, 255, 0.25)',
      },
    },
  },
  text: {
    white: 'rgba(255, 255, 255, 1)',
    primary: 'rgba(58, 55, 93, 1)',
  },
  background: {
    darkGray: 'rgba(97, 97, 97, 1)',
    transparent: 'rgba(255, 255, 255, 0.08)',
  },
  divider: {
    transparent: 'rgba(255, 255, 255, 0.25)',
  },
}

export { colors }
