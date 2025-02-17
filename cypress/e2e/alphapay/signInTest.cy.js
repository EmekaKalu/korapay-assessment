import LandingPage from "../../pages/alphapay/landingPage";
import SignInPage from "../../pages/alphapay/signInPage";
import getEnv from "../../support/helpers/env";
import getTestData from "../../support/helpers/testDataHandler";

const { alphaPayPassword } = getEnv();
const landingPage = new LandingPage();
const signInPage = new SignInPage();

const emailStored = getTestData('email');
describe('Sign In Test', () => {
    beforeEach(() => {
        landingPage.visit();
        landingPage.clickLogin();
    });

    it('should not sign in without email and password', () => {
        signInPage.clickSignIn();
        signInPage.verifyErrorMessage('Provide your email please');
        signInPage.verifyErrorMessage('Provide a password please');
    });

    it('should not sign in without email', () => {
        signInPage.fillPassword('password');
        signInPage.clickSignIn();
        signInPage.verifyErrorMessage('Provide your email please');
    });

    it('should not sign in without password', () => {
        signInPage.fillEmail('test@test.com');
        signInPage.clickSignIn();
        signInPage.verifyErrorMessage('Provide a password please');
    });

    it('should not sign in with invalid email and password', () => {
        signInPage.fillEmail('invalidEmail');
        signInPage.fillPassword('invalidPassword');
        signInPage.clickSignIn();
        signInPage.verifyErrorMessage('Provide a valid email please');
    });

    it('should not sign in with wrong credentials', () => {
        signInPage.fillEmail('test@test.com');
        signInPage.fillPassword('invalidPassword');
        signInPage.clickSignIn();
        signInPage.verifyPopUpMessage('Invalid Credentials');
    });

    it('should sign in successfully', () => {
        signInPage.fillEmail(emailStored);
        signInPage.fillPassword(alphaPayPassword);
        signInPage.clickSignIn();
        signInPage.verifyPopUpMessage('Login Successful');
        signInPage.verifyPopUpMessage('Welcome to your dashboard');
    });
    
});