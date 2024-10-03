describe("User Login Functionality", () => {
  it("should navigate to the login page", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/auth/login"
    ); //Launching Application
    cy.title().should("eq", "OrangeHRM"); //verifying page title using should assertion
  });
  it("should display an error for incorrect login(Pass)", () => {

    // cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible');
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type("Admin"); //added Email field CSS selector
    cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin1234"); //added password field CSS selector
    cy.get("button[type='submit']").click(); //click on Login button
    cy.get(".oxd-alert-content.oxd-alert-content--error").should('contain', "Invalid credentials"); //verifying Invalid error message
  });

  it("should display an error for incorrect login(Email)", () => {
    cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Adminn"); //added Email field CSS selector
    cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin123"); //added password field CSS selector
    cy.get("button[type='submit']").click(); //click on Login button
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('contain', "Invalid credentials"); //verifying Invalid error message
  });
  it("validCredentails", () => {
    cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Admin"); //added Email field CSS selector
    cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin123"); //added password field CSS selector
    cy.get("button[type='submit']").click(); //click on Login button
  })
});

