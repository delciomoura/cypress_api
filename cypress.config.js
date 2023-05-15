const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  env: {
    contactID: "",
    session: ""
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
