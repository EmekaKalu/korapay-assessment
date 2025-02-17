const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 30000,
    specPattern: [
      'cypress/e2e/alphapay/signUpTest.cy.js',
      'cypress/e2e/alphapay/signInTest.cy.js',
      'cypress/e2e/alphapay/updateProfileTest.cy.js',
      'cypress/e2e/alphapay/changePasswordTest.cy.js',
      'cypress/e2e/alphapay/logOutTest.cy.js',
      'cypress/e2e/checkout/checkoutTest.cy.js'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...config.env,
        ...process.env,
      };
      return config;
    },
  },
});
