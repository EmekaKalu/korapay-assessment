import DashboardPage from "../../pages/alphapay/dashboardPage";
import LandingPage from "../../pages/alphapay/landingPage";
import ProfilePage from "../../pages/alphapay/profilePage";
import SignInPage from "../../pages/alphapay/signInPage";
import getEnv from "../../support/helpers/env";
import getTestData from "../../support/helpers/testDataHandler";
import { faker } from '@faker-js/faker';

const { alphaPayPassword } = getEnv();
const landingPage = new LandingPage();
const signInPage = new SignInPage();
const dashboardPage = new DashboardPage();
const profilePage = new ProfilePage();
const emailStored = getTestData('email');
const newFullName = faker.person.fullName();
const newUserName = faker.person.firstName();

describe('Update Profile Test', () => {
  beforeEach(() => {
    landingPage.visit();
    landingPage.clickLogin();
    signInPage.fillEmail(emailStored);
    signInPage.fillPassword(alphaPayPassword);
    signInPage.clickSignIn();
  });

  it('should update full name successfully', () => {
    dashboardPage.clickProfileButton();
    profilePage.fillFullName(newFullName);
    cy.updateTestData('fullName', newFullName);
    profilePage.clickUpdateDetailsButton();
    profilePage.verifyPopUpMessage('Update Successful');
    profilePage.verifyFullName(newFullName);
  });

  it('should update username successfully', () => {
    dashboardPage.clickProfileButton();
    profilePage.fillUserName(newUserName);
    cy.updateTestData('userName', newUserName);
    profilePage.clickUpdateDetailsButton();
    profilePage.verifyPopUpMessage('Update Successful');
    profilePage.verifyUserName(newUserName);
  });

  it('should not leave full name field empty', () => {
    dashboardPage.clickProfileButton();
    profilePage.clearFullName();
    profilePage.clickUpdateDetailsButton();
    profilePage.verifyErrorMessage('Provide your full name please');
  });

  it('should not leave username field empty', () => {
    dashboardPage.clickProfileButton();
    profilePage.clearUserName();
    profilePage.clickUpdateDetailsButton();
    profilePage.verifyErrorMessage('Provide a username please');
  });
})