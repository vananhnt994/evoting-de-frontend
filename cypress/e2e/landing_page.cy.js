describe('Landing Page', () => {
  it('Checks if all items are present', () => {
    cy.visit('http://localhost:3000/');
    // check for headline
    cy.get('h1').should('contain.text', 'eVote')
                .and('be.visible');
    // check for buttons
    cy.get('#datatest-signup').should('contain.text', 'Signup').and('be.visible');
    cy.get('#datatest-login').should('contain.text', 'Login').and('be.visible');

  })
})
