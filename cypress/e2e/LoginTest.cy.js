describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ); //Launching Application
    cy.title().should("eq", "OrangeHRM"); //verifying page title
    cy.get("input[placeholder='Username']").type("Admin"); //added Email field CSS selector
    cy.get("input[placeholder='Password']").type("admin123"); //added password field CSS selector
    cy.get("button[type='submit']").click(); //click on Login button
  });
  it
});
