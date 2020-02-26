describe("Main Page", () => {
  before(() => {
    cy.visit("localhost:3000/login");
    // authenticate
    cy.window()
      .its("store")
      .invoke("dispatch", {
        type: "ADD_TOKEN",
        token: { access_token: "token" }
      });
  });

  beforeEach(() => {
    cy.visit("localhost:3000/main");
  });

  it("Successfully renders main page", () => {
    cy.contains("Search");
    cy.contains("Logout");
  });

  it("Does not render modal on initial render", () => {
    cy.get('.modal').should('not.exist');
  })

  it("Renders modal on Search button click", () => {
    cy.contains("Search").click();
    cy.get('.modal').should('exist')
    // Clear modal the hard way
    cy.reload();
  });

  it("Closes modal on modal close button click", () => {
    cy.contains("Search").click();
    cy.get('.modal-close').click();
    cy.get('.modal').should('not.exist');
  })
});
