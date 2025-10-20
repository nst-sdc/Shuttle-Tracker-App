import { createTamagui } from 'tamagui'

const appConfig = createTamagui({
  themes: {
    light: {
      background: '#ffffff',
      color: '#000000',
    },
  },
  tokens: {
    color: {
      blue: '#007AFF',
    },
    space: {
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
    },
  },
})

export default appConfig