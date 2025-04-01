const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://httpbin.org",
    specPattern: "cypress/e2e/**/*.cy.js", // Adaugă acest rând
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
