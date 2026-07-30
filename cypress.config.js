const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: { 
    baseUrl: 'https://sadeq.org',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
