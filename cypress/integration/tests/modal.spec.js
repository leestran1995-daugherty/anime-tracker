/* eslint-disable no-undef */
describe("Modal Tests", () => {
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
    cy.contains("Search").click();
  });

  afterEach(() => {
    // Need to clear the search modal
    cy.reload();
  });

  it("Contains search bar", () => {
    cy.contains("Search");
  });

  it("Takes text input", () => {
    cy.get("input").type("Toradora");
    cy.contains("Toradora")
  });

  it("Displays received data", () => {
    cy.server();
    cy.get("input").type("Toradora");
    cy.get('[alt="search button"').click();
  })
});
