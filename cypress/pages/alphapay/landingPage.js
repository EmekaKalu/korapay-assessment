import getEnv from "../../support/helpers/env";

export default class LandingPage {
    constructor() {
        const { alphaPayUrl } = getEnv();
        this.url = `${alphaPayUrl}`;
        this.elements = {
            signUpButton: () => cy.get('a[href="/auth/signup"]').first(),
            loginButton: () => cy.get('a[href="/auth/login"]').first(),
        }
    }

    visit() {
        cy.visit(this.url);
    }

    clickSignUp() {
        this.elements.signUpButton().click();
    }

    clickLogin() {
        this.elements.loginButton().click();
    }
}
