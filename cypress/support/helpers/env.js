const getEnv = () => {
    return {
        alphaPayUrl: Cypress.env('ALPHA_PAY_URL'),
        alphaPayPassword: Cypress.env('ALPHA_PAY_PASSWORD'),
        alphaPayNewPassword: Cypress.env('ALPHA_PAY_NEW_PASSWORD'),
        checkoutUrl: Cypress.env('CHECKOUT_URL'),
    }
}

export default getEnv;