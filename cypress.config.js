const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {}
  },
  env: {
    OWASP_PROD: 'https://juice-shop.herokuapp.com/#',
    OWASP_STG: '' // this is the example in the real usecase that we must have at least 1 test env
  },
  viewportWidth: 1280,
  viewportHeight: 1100
})
