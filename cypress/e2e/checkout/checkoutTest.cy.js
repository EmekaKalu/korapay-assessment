import CheckoutPage from "../../pages/checkout/checkoutPage";
import getTestData from "../../support/helpers/testDataHandler";

const checkoutPage = new CheckoutPage();
const emailStored = getTestData('email');
const customerName = getTestData('fullName');

describe('Checkout Test', () => {
    it('should not proceed with invalid email', () => {
        checkoutPage.visit();
        checkoutPage.fillCustomerName(customerName);
        checkoutPage.fillEmail('1111');
        checkoutPage.fillAmount('100');
        checkoutPage.verifyProceedButtonDisabled();
    });
});