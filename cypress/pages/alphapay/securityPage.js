export default class SecurityPage {
    constructor() {
        this.elements = {
            oldPasswordInput: () => cy.get('input[placeholder="Old Password"]'),
            newPasswordInput: () => cy.get('input[placeholder="New Password"]'),
            changePasswordButton: () => cy.get('button').contains('Change Password'),
            popUpMessage: (message) => cy.get('div[role="status"]').contains(message),
            errorMessage: (message) => cy.get('div[class="error modal_error"]').contains(message).scrollIntoView(),
        }
    }

    fillOldPassword(oldPassword) {
        this.elements.oldPasswordInput().type(oldPassword);
    }

    fillNewPassword(newPassword) {
        this.elements.newPasswordInput().clear().type(newPassword);
    }

    clickChangePasswordButton() {
        this.elements.changePasswordButton().click();
    }

    verifyPopUpMessage(message) {
        this.elements.popUpMessage(message).should('be.visible');
    }

    verifyErrorMessage(message) {
        this.elements.errorMessage(message).should('be.visible');
    }
    
}