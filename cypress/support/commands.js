// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

import LandingPage from "../pages/alphapay/landingPage";
import SignInPage from "../pages/alphapay/signInPage";
//
const landingPage = new LandingPage();
const signInPage = new SignInPage();
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('signIn', (email, password) => {
    cy.session([email, password], () => {
        landingPage.visit();
        landingPage.clickLogin();
        signInPage.fillEmail(email);
        signInPage.fillPassword(password);
        signInPage.clickSignIn();
    });
});

Cypress.Commands.add('updateTestData', (key, value) => {
    cy.readFile('cypress/fixtures/testData.json').then((data) => {
        data[key] = value;
        cy.writeFile('cypress/fixtures/testData.json', data);
    });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })