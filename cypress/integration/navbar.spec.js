context('Navbar', () => {

    beforeEach(() => {
      cy.visit(Cypress.env('HOST'))
    })
  
    it('contains the navbar', () => {
        cy.get('.navbar-nav').should('be.visible')
    })
  
    it('contains the link to Sponsor', () => {
        cy.get('.navbar-nav').contains('Sponsor')
    })
  
  })
  