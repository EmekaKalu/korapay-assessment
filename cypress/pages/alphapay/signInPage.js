export default class SignInPage {
    constructor() {
        this.elements = {
            emailInput: () => cy.get('input[name="email"]'),
            passwordInput: () => cy.get('input[name="password"]'),
            signInButton: () => cy.get('button').contains('Sign In'),
            errorMessage: (message) => cy.get('div[class="error"]').contains(message).scrollIntoView(),
            popUpMessage: (message) => cy.get('div[role="status"]').contains(message).scrollIntoView(),
        }
    }

    fillEmail(email) {
        this.elements.emailInput().type(email);
    }

    verifyEmailInput() {
        this.elements.emailInput().should('be.visible');
    }

    verifyPasswordInput() {
        this.elements.passwordInput().should('be.visible');
    }

    fillPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickSignIn() {
        this.elements.signInButton().click();
    }

    verifyErrorMessage(message) {
        this.elements.errorMessage(message).should('be.visible');
    }

    verifyPopUpMessage(message) {
        this.elements.popUpMessage(message).should('be.visible');
    }


}