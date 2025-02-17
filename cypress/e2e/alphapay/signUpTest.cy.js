import LandingPage from "../../pages/alphapay/landingPage";
import SignUpPage from "../../pages/alphapay/signUpPage";
import getEnv from "../../support/helpers/env";
import { faker } from '@faker-js/faker';

const { alphaPayPassword } = getEnv();
const username = `${faker.person.firstName()}${faker.number.int({ min: 100, max: 999 })}`;
const email = `${faker.person.firstName()}${faker.number.int({ min: 100, max: 999 })}@mailsac.com`;

const signUpPage = new SignUpPage();
describe('Sign Up Test', () => {
    beforeEach(() => {
        const landingPage = new LandingPage();
        
        landingPage.visit();
        landingPage.clickSignUp();
    });

    it('should sign up successfully', () => {
        
        signUpPage.fillForm(username, email, alphaPayPassword, alphaPayPassword);
        signUpPage.clickCreateAccount();
        
        cy.updateTestData('email', email);
        
        signUpPage.verifySuccessMessage('Signup Successful');
        signUpPage.verifySuccessMessage('Welcome to your dashboard');
    });

    it('should not sign up with invalid password', () => {
        signUpPage.fillForm(username, email, 1234, 1234);
        
        signUpPage.verifyErrorMessage('Password must be 9 characters or longer');

        signUpPage.fillPasswords(123456789, 123456789);
        signUpPage.verifyErrorMessage('Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character');
    });

    it('should not sign up without password', () => {
        signUpPage.fillWithoutPassword(username);
        signUpPage.clickCreateAccount();
        
        signUpPage.verifyErrorMessage('Provide a password please');
        
    });

    it('should not sign up with invalid email', () => {
        signUpPage.fillForm(username, email, alphaPayPassword, alphaPayPassword);
        signUpPage.fillEmail('invalidEmail');
        signUpPage.clickCreateAccount();
        
        signUpPage.verifyErrorMessage('Hey,just letting you know that your email is quite weird');
        
    });

    it('should not sign up with not matching passwords', () => {
        signUpPage.fillForm(username, email, alphaPayPassword, alphaPayPassword);
        signUpPage.fillConfirmPassword('invalidPassword');
        signUpPage.clickCreateAccount();

        signUpPage.verifyErrorMessage('Both password need to be the same');
        
    });

    it('should not sign up without full name', () => {
        signUpPage.fillWithoutFullName(username, email, alphaPayPassword, alphaPayPassword);
        signUpPage.clickCreateAccount();
        
        signUpPage.verifyErrorMessage('Provide your full name please');
        
    });

    it('should not sign up without phone number', () => {
        signUpPage.fillWithoutPhoneNumber(username, email, alphaPayPassword, alphaPayPassword);
        signUpPage.clickCreateAccount();
        
        signUpPage.verifyErrorMessage('Provide your phone number please');
        
    });

    it('should not sign up without user name', () => {
        signUpPage.fillWithoutUserName(email, alphaPayPassword, alphaPayPassword);
        signUpPage.clickCreateAccount();
        
        signUpPage.verifyErrorMessage('Provide a username please');
        
    });

    it('should not sign up without email', () => {
        signUpPage.fillWithoutEmail(username, alphaPayPassword, alphaPayPassword);
        signUpPage.clickCreateAccount();
        
        signUpPage.verifyErrorMessage('Provide your email please');
    });

});