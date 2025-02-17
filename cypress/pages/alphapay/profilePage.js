export default class ProfilePage {
    constructor() {
        this.elements = {
            updateDetailsButton: () => cy.get('button').contains('Update Details'),
            fullNameInput: () => cy.get('input[name="full_name"]'),
            userNameInput: () => cy.get('input[name="username"]'),
            phoneNumberInput: () => cy.get('input[name="phone_number"]'),
            emailInput: () => cy.get('input[name="email"]'),
            saveButton: () => cy.get('button').contains('Save'),
            popUpMessage: (message) => cy.get('div[role="status"]').contains(message),
            errorMessage: (message) => cy.get('div[class="error"]').contains(message).scrollIntoView(),
        }
    }

    clickUpdateDetailsButton() {
        this.elements.updateDetailsButton().click();
    }

    fillFullName(fullName) {
        this.elements.fullNameInput().clear().type(fullName);
    }

    fillUserName(userName) {
        this.elements.userNameInput().clear().type(userName);
    }

    verifyPopUpMessage(message) {
        this.elements.popUpMessage(message).should('be.visible');
    }

    verifyFullName(fullName) {
        this.elements.fullNameInput().should('have.value', fullName);
    }

    verifyUserName(userName) {
        this.elements.userNameInput().should('have.value', userName);
    }

    verifyErrorMessage(message) {
        this.elements.errorMessage(message).should('be.visible');
    }

    clearFullName() {
        this.elements.fullNameInput().clear();
    }

    clearUserName() {
        this.elements.userNameInput().clear();
    }

}