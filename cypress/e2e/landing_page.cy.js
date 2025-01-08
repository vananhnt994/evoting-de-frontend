describe('Landing Page', () => {
  it('Checks if all items are present', () => {
    cy.visit('http://localhost:3006/');
    // check for headline
    cy.get('h1').should('contain.text', 'Meine Homepage')
                .and('be.visible');
    // check for buttons
    cy.get('button.Header_button__fU6fP').eq(0).should('contain.text', 'Signup').and('be.visible');
    cy.get('button.Header_button__fU6fP').eq(1).should('contain.text', 'Login').and('be.visible');

  })
})