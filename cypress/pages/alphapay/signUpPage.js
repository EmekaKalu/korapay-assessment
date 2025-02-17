import { faker } from '@faker-js/faker';

export default class SignUpPage {
    constructor() {
        this.elements = {
            fullNameInput: () => cy.get('input[name="full_name"]'),
            userNameInput: () => cy.get('input[name="username"]'),
            phoneNumberInput: () => cy.get('input[name="phone_number"]'),
            emailInput: () => cy.get('input[name="email"]'),
            passwordInput: () => cy.get('input[name="password"]'),
            confirmPasswordInput: () => cy.get('input[name="confirmPassword"]'),
            createAccountButton: () => cy.get('button').contains('Create Account'),
            successMessage: (message) => cy.get('div[role="status"]').contains(message),
            errorMessage: (message) => cy.get('div[class="error"]').contains(message).scrollIntoView(),
        }
    }
    
    fillForm(userName, email, password, confirmPassword) {
        this.elements.fullNameInput().type(faker.person.fullName());
        this.elements.userNameInput().type(userName);
        this.elements.phoneNumberInput().type(`0803300${faker.number.int({ min: 1000, max: 9999 })}`);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    fillWithoutPassword(userName) {
        this.elements.fullNameInput().type(faker.person.fullName());
        this.elements.userNameInput().type(userName);
        this.elements.phoneNumberInput().type(`0803300${faker.number.int({ min: 1000, max: 9999 })}`);
        this.elements.emailInput().type(`${faker.person.firstName()}${faker.number.int({ min: 100, max: 999 })}@mailsac.com`);
    }

    fillWithoutFullName(userName, email, password, confirmPassword) {
        this.elements.userNameInput().type(userName);
        this.elements.phoneNumberInput().type(`0803300${faker.number.int({ min: 1000, max: 9999 })}`);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    fillWithoutPhoneNumber(userName, email, password, confirmPassword) {
        this.elements.fullNameInput().type(faker.person.fullName());
        this.elements.userNameInput().type(userName);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    fillWithoutUserName(email, password, confirmPassword) {
        this.elements.fullNameInput().type(faker.person.fullName());
        this.elements.phoneNumberInput().type(`0803300${faker.number.int({ min: 1000, max: 9999 })}`);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    fillWithoutEmail(userName, password, confirmPassword) {
        this.elements.fullNameInput().type(faker.person.fullName());
        this.elements.userNameInput().type(userName);
        this.elements.phoneNumberInput().type(`0803300${faker.number.int({ min: 1000, max: 9999 })}`);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    clickCreateAccount() {
        this.elements.createAccountButton().click(); 
    }

    verifySuccessMessage(message) {
        this.elements.successMessage(message).should('be.visible');
        cy.wait(2000);
    }

    verifyErrorMessage(message) {
        this.elements.errorMessage(message).should('be.visible');
    }

    fillPasswords(password, confirmPassword) {
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    fillConfirmPassword(confirmPassword) {
        this.elements.confirmPasswordInput().type(confirmPassword);
    }

    fillEmail(email) {
        this.elements.emailInput().clear().type(email);
    }
}
