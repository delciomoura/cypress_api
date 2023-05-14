const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  env: {
    contactID: "",
    session: ""
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
