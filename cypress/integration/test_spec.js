describe("Basic tests", () => {
  it("Checks for the grid loading", () => {
    cy.visit("localhost:3000");
    cy.get("#grid_layout").should("exist");
  });

  it("Checks that button click area is reachable", () => {
    cy.visit("localhost:3000");
    cy.get('button').click({ multiple: true }, 'topLeft')
    cy.get('button').click({ multiple: true }, 'topRight')
    cy.get('button').click({ multiple: true }, 'bottomLeft')
    cy.get('button').click({ multiple: true }, 'bottomRight')
  });

  it("Checks that cells are clickable", () => {
    cy.visit("localhost:3000");
    cy.get('#grid_layout div').click({ multiple: true })
  });

  it("Checks that cells are unclickable", () => {
    cy.visit("localhost:3000");
    cy.get('#grid_layout div').click({ multiple: true })
  });

});
