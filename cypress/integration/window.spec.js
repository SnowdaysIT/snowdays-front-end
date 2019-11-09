context('Window', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('HOST'))
  })

  // Keep as example and default check
  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Snowdays')
  })

})
