import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  plugins: ['~/plugins/hello'],
  serverMiddleware: [
    '~/serverMiddleware/api'
  ],
  router: {
   base: '/pwm-ui/',
  },
}

export default config
