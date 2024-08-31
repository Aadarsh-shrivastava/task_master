const palette = {
  purple: '#5A31F4',
  green: '#0CA996',
  red: '#CD0E61',
  black: '#202421',
  white: '#F0F2F3',
  grey: '#aeb1b5',
  blue: '#101D25',
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.white,
    primary: palette.green,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    inactive: palette.grey,
  },
  spacing: {s: 8, sm: 12, m: 16, ml: 20, l: 24, xl: 32, xxl: 40},
  size: {s: 8, sm: 12, m: 16, ml: 20, l: 24, xl: 32, xxl: 40},
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.blue,
    foreground: palette.white,
  },
};
