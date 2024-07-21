describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.automationexercise.com/login"); //Launching Application
    cy.title().should("eq", "Automation Exercise - Signup / Login"); //verifying page title
    cy.get("input[data-qa='login-email']").type("user@admin.com"); //added Email field CSS selector
    cy.get("input[placeholder='Password']").type("12345"); //added password field CSS selector
    cy.get("button[data-qa='login-button']").click(); //click on Login button
  });
});
