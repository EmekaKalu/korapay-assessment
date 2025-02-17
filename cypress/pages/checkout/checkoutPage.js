import getEnv from "../../support/helpers/env";

export default class CheckoutPage {
    constructor() {
        const { checkoutUrl } = getEnv();
        this.url = `${checkoutUrl}`;
        this.elements = {
            customerNameInput: () => cy.get('input[name="customer-name"]'),
            emailInput: () => cy.get('input[name="customer-email"]'),
            amountInput: () => cy.get('input[name="link-amount"]'),
            proceedButton: () => cy.get('button').contains('Proceed').first(),
            payWithDebitCardButton: () => cy.get('span').contains('Pay with Debit Card'),
            cardNumberField: () => cy.get('input[name="card-number"]'),
            expiryDateField: () => cy.get('input[name="valid-till"]'),
            cvvField: () => cy.get('input[name="cvv"]'),
            payButton: () => cy.contains('span', 'Pay NGN'),
            errorMessage: (message) => cy.get('p.details-error').contains(message)
        }
    }

    visit() {
        cy.visit(this.url);
    }

    fillCustomerName(customerName) {
        this.elements.customerNameInput().type(customerName);
    }

    fillEmail(email) {
        this.elements.emailInput().type(email);
    }

    fillAmount(amount) {
        this.elements.amountInput().type(amount);
    }

    clickProceedButton() {
        this.elements.proceedButton().click();
    }

    verifyProceedButtonDisabled() {
        this.elements.proceedButton().should('be.disabled');
    }
    
}