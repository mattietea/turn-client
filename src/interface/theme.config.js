import Color from 'color'

export const theme = {
  spacers: {
    get: (size = 'base') => {
      switch (size) {
        case 'small':
          return theme.spacers.all[1]
        case 'base':
          return theme.spacers.all[3]
        case 'large':
          return theme.spacers.all[5]
        default:
          return theme.spacers.all[size]
      }
    },
    all: [0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.75, 2.0].map(n => n + 'rem')
  },
  radius: {
    small: '.125rem',
    base: '.25rem',
    large: '.75rem'
  },
  colors: {
    purple: {
      light: Color('#7672f6')
        .lighten(0.2)
        .hex(),
      base: Color('#7672f6').hex(),
      dark: Color('#7672f6')
        .darken(0.2)
        .hex()
    },
    blue: {
      light: Color('#4bb1ea')
        .lighten(0.2)
        .hex(),
      base: Color('#4bb1ea').hex(),
      dark: Color('#4bb1ea')
        .darken(0.2)
        .hex()
    },
    red: {
      light: Color('#f07b84')
        .lighten(0.2)
        .hex(),
      base: Color('#f07b84').hex(),
      dark: Color('#f07b84')
        .darken(0.2)
        .hex()
    },
    green: {
      light: Color('#72e4b4')
        .lighten(0.2)
        .hex(),
      base: Color('#72e4b4').hex(),
      dark: Color('#72e4b4')
        .darken(0.2)
        .hex()
    },
    section: {
      light: Color('#eef2f5')
        .lighten(0.2)
        .hex(),
      base: Color('#eef2f5').hex(),
      dark: Color('#eef2f5')
        .darken(0.2)
        .hex()
    }
  },
  text: {
    white: '#FFFFFF',
    light: '#6c757d',
    base: '#2d3436'
  },
  glow: {
    small: '0 0 0 2px',
    base: '0 0 0 5px',
    large: '0 0 0 5px'
  }
}

export const style = {
  radius: (size = 'base') => {
    return theme['radius'][size]
  },
  color: (color = 'primary', shade = 'base') => {
    return theme['colors'][color][shade]
  },
  text: (color = 'base') => {
    return theme['text'][color]
  },
  glow: (color, size = 'base', shade = 'light') => {
    return theme['glow'][size] + style.color(color, shade)
  }
}
