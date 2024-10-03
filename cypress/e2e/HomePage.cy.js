describe("Handling Dropdowns", () => {
    it('Dropdown with select', () => {
          cy.get('.oxd-userdropdown-tab').click();
          cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
          cy.get(".oxd-dialog-close-button.oxd-dialog-close-button-position").click();
    });
    it('Navigation to admin section', () => {
        debugger
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click();
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
        cy.get("div[class='oxd-grid-2 orangehrm-full-width-grid'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)").click();
        cy.get('.oxd-select-dropdown') // Replace this with the correct dropdown container selector
        .contains('Admin')           // Replace with the option you want to select
        .click();
        cy.request('GET',"https://opensource-demo.orangehrmlive.com/api/v2/pim/employees?nameOrId=a").then((response) => {
            console.log(response.data,"response.data")  
            expect(response.status).to.eq(200); //verifying the API response with it assertion
             const firstUser = `${response?.body?.data[0]?.firstName} ${response?.body?.data[0]?.lastName}`;
             cy.get("input[placeholder='Type for hints...']").type(firstUser);
             debugger
             cy.get('.oxd-autocomplete-dropdown').contains(firstUser).click();
        });
        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i").click()
        cy.get('.oxd-select-dropdown')
        .contains('Enabled').click();
        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input").type("Admin_Nimraa")
        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input").type("Admin@123!@#");
        cy.get("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input").type("Admin@123!@#");
        cy.get("button[type='submit']").click();
    });
});  

