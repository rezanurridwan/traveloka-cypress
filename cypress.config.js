const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://traveloka.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
