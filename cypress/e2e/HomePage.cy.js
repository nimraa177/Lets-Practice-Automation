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
        cy.get("div[class='oxd-grid-2 orangehrm-full-width-grid'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click().select("Admin");
        cy.request('GET',"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=a").then((response) => {
            console.log(response.data,"response.data")  
            expect(response.status).to.eq(200); //verifying the API response with it assertion
             const firstUser = `${response?.body?.data[0]?.firstName} ${response?.body?.data[0]?.middleName} ${response?.body?.data[0]?.lastName}`;
             cy.get("input[placeholder='Type for hints...']").type(firstUser);
             debugger
             cy.get('.oxd-autocomplete-dropdown').contains(firstUser).click();
        });
            




    


        
        




        

    
    });
});  

