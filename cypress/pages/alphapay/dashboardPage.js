export default class DashboardPage {
    constructor() {
        this.elements = {
            profileButton: () => cy.get('img[alt="profile_image"]'),
            securityButton: () => cy.get('a').contains('Security').first(),
            logoutButton: () => cy.get('a').contains('Log Out').first(),
        }
    }

    clickProfileButton() {
        this.elements.profileButton().click();
    }

    clickSecurityButton() {
        this.elements.securityButton().click();
    }

    clickLogoutButton() {
        this.elements.logoutButton().click();
    }
    
}