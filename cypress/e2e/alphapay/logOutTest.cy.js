import LandingPage from "../../pages/alphapay/landingPage";
import SignInPage from "../../pages/alphapay/signInPage";
import DashboardPage from "../../pages/alphapay/dashboardPage";
import getEnv from "../../support/helpers/env";
import getTestData from "../../support/helpers/testDataHandler";

const landingPage = new LandingPage();
const signInPage = new SignInPage();
const dashboardPage = new DashboardPage();
const emailStored = getTestData('email');
const { alphaNewPayPassword } = getEnv();

describe('Logout Tests', () => {   
    beforeEach(() => {
        landingPage.visit();
        landingPage.clickLogin();
        signInPage.fillEmail(emailStored);
        signInPage.fillPassword(alphaNewPayPassword);
        signInPage.clickSignIn();
    });

    it('should logout successfully', () => {
        dashboardPage.clickProfileButton();
        dashboardPage.clickLogoutButton();
        signInPage.verifyEmailInput();
        signInPage.verifyPasswordInput();
    });


});