const { NEXT_THEME_COLOR } = process.env

import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: NEXT_THEME_COLOR || 'white',
  },
}
