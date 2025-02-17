import DashboardPage from "../../pages/alphapay/dashboardPage";
import LandingPage from "../../pages/alphapay/landingPage";
import ProfilePage from "../../pages/alphapay/profilePage";
import SignInPage from "../../pages/alphapay/signInPage";
import getEnv from "../../support/helpers/env";
import getTestData from "../../support/helpers/testDataHandler";
import SecurityPage from "../../pages/alphapay/securityPage";
const { alphaPayPassword } = getEnv();
const landingPage = new LandingPage();
const signInPage = new SignInPage();
const dashboardPage = new DashboardPage();
const profilePage = new ProfilePage();
const securityPage = new SecurityPage();
const emailStored = getTestData('email');
const { alphaPayNewPassword } = getEnv();

describe('Change Password Tests', () => {
    beforeEach(() => {
        landingPage.visit();
        landingPage.clickLogin();
        signInPage.fillEmail(emailStored);
        signInPage.fillPassword(alphaPayPassword);
        signInPage.clickSignIn();
    });

    it('should not change password without old password', () => {
        dashboardPage.clickProfileButton();
        dashboardPage.clickSecurityButton();
        securityPage.fillNewPassword(alphaPayNewPassword);
        securityPage.clickChangePasswordButton();
        securityPage.verifyErrorMessage('Provide your old password please');
    });

    it('should not change password without new password', () => {
        dashboardPage.clickProfileButton();
        dashboardPage.clickSecurityButton();
        securityPage.fillOldPassword(alphaPayPassword);
        securityPage.clickChangePasswordButton();
        securityPage.verifyErrorMessage('Provide a password please');
    });

    it('should not change password with wrong old password', () => {
        dashboardPage.clickProfileButton();
        dashboardPage.clickSecurityButton();
        securityPage.fillOldPassword('123');
        securityPage.fillNewPassword(alphaPayNewPassword);
        securityPage.verifyErrorMessage('Password must be 9 characters or longer');
    });

    it('should not change password with invalid new password', () => {
        dashboardPage.clickProfileButton();
        dashboardPage.clickSecurityButton();
        securityPage.fillOldPassword(alphaPayPassword);
        securityPage.fillNewPassword('123');
        securityPage.clickChangePasswordButton();
        securityPage.verifyErrorMessage('Password must be 9 characters or longer');
        securityPage.fillNewPassword('123456789');
        
        securityPage.verifyErrorMessage('Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character');
    });

    it('should change password successfully', () => {
        dashboardPage.clickProfileButton();
        dashboardPage.clickSecurityButton();
        securityPage.fillOldPassword(alphaPayPassword);
        securityPage.fillNewPassword(alphaPayNewPassword);
        securityPage.clickChangePasswordButton();
        profilePage.verifyPopUpMessage('Password updated successfully');
    });
});

describe('Verify password change is successful', () => {
    it('Should login with new password', () => {
        landingPage.visit();
        landingPage.clickLogin();
        signInPage.fillEmail(emailStored);
        signInPage.fillPassword(alphaPayNewPassword);
        signInPage.clickSignIn();
        signInPage.verifyPopUpMessage('Login Successful');
        signInPage.verifyPopUpMessage('Welcome to your dashboard');
    });
});