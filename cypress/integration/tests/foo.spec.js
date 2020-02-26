describe("Existential Inquiries", () => {
  it("Exists!", () => {
    cy.visit("localhost:3000");
    cy.contains("Login");
  });

  it("Redirects to login page if login token doesn't exist", () => {
    cy.visit("localhost:3000/main");
    cy.url().should("include", "login");
    cy.visit("localhost:3000/authCallback");
    cy.url().should("include", "login");
  });

  it("Redirects to main from authCallback if login token exists", () => {
    cy.visit("localhost:3000/login")
    cy.window().its('store').invoke('dispatch', { type: 'ADD_TOKEN', token: {access_token: 'token'}});
    cy.visit("localhost:3000/main")
    cy.url().should("include", "main")
  });
});
