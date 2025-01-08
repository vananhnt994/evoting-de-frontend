import user from '../fixtures/login.json'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3006/');

  })
  it('Checks if all fields are present', () => {
    cy.get('button.Header_button__fU6fP').eq(1).click();
    cy.get('form').children('div').should('have.length', 2);
    cy.get('form').children('div').find('input#email').should('be.visible');
    cy.get('form').children('div').find('input#password').should('be.visible');
    cy.get('button[type="submit"]').should('contain.text', 'Einloggen').and('be.visible');
    cy.get('button[type="button"]').should('contain.text', 'Abbrechen').and('be.visible');

  })

  it('Log in', () => {
      cy.get('button.Header_button__fU6fP').eq(1).click();

      cy.generateEmailAddress().then(($email) => {
        cy.get('form').children('div').find('input#email').type($email);
      })
      cy.fixture('signup').then((info) => {
        cy.get('form').children('div').find('input#password').type(info.pwd);

      })

      cy.get('button[type="submit"]').should('contain.text', 'Einloggen').click();


  })

})