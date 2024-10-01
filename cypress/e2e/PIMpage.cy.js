describe("Employee Information", () => {
    it('Adding New Employee', () => {
        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(2) > a").click();
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
        cy.get("input[placeholder='First Name']").type("Irfan");
        cy.get("input[placeholder='Middle Name']").type("J.");
        cy.get("input[placeholder='Last Name']").type("Nasir");
        cy.get("button[type='submit']").click();
        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div.oxd-form-actions > button").click();
   
    });
});