describe("User Login Functionality", () => {
  it("should navigate to the login page", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ); //Launching Application
    cy.title().should("eq", "OrangeHRM"); //verifying page title using should assertion
  });
  it("should display an error for incorrect login(Pass)", () => {

    cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible');
    cy.get("input[placeholder='Username']").type("Admin"); //added Email field CSS selector
    cy.get("input[placeholder='Password']").type("admin1234"); //added password field CSS selector
    cy.get("button[type='submit']").click(); //click on Login button
    cy.get(".oxd-alert-content.oxd-alert-content--error").should('contain', "Invalid credentials"); //verifying Invalid error message
  });

  // it("should display an error for incorrect login(Email)", () => {
  //   cy.get("input[placeholder='Username']").type("Adminn"); //added Email field CSS selector
  //   cy.get("input[placeholder='Password']").type("admin123"); //added password field CSS selector
  //   cy.get("button[type='submit']").click(); //click on Login button
  //   cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('contain', "Invalid credentials"); //verifying Invalid error message
  // });
  // it("validCredentails", () => {
  //   cy.get("input[placeholder='Username']").type("Admin"); //added Email field CSS selector
  //   cy.get("input[placeholder='Password']").type("admin123"); //added password field CSS selector
  //   cy.get("button[type='submit']").click(); //click on Login button
  // })
});

