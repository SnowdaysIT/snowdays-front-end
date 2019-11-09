context('RootPage', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('HOST'))
  })

  // Keep as example and default check
  it('has the default charset', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('has the event name as title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Snowdays 2020')
  })

})
