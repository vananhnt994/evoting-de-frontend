import user from '../fixtures/signup.json'

describe('Signup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3006/');

  })
  it('Checks if all fields are present', () => {
    cy.get('button.Header_button__fU6fP').eq(0).click();
    cy.get('form').children('div').should('have.length', 7);
    cy.get('form').children('div').find('input#email').should('be.visible');
    cy.get('form').children('div').find('input#password').should('be.visible');
    cy.get('form').children('div').find('input#confirm-password').should('be.visible');
    cy.get('form').children('div').find('input#firstName').should('be.visible');
    cy.get('form').children('div').find('input#lastName').should('be.visible');
    cy.get('form').children('div').find('input#address').should('be.visible');
    cy.get('form').children('div').find('input#birthday').should('be.visible');
    cy.get('button[type="submit"]').should('contain.text', 'Registrieren').and('be.visible');
    cy.get('button[type="button"]').should('contain.text', 'Abbrechen').and('be.visible');

  })

  it('Signs up', () => {
      cy.get('button.Header_button__fU6fP').eq(0).click();

      cy.generateEmailAddress().then(($email) => {
        cy.get('form').children('div').find('input#email').type($email);
      })
      cy.fixture('signup').then((info) => {
        cy.get('form').children('div').find('input#password').type(info.pwd);
        cy.get('form').children('div').find('input#confirm-password').type(info.pwd);
        cy.get('form').children('div').find('input#firstName').type(info.firstname);
        cy.get('form').children('div').find('input#lastName').type(info.lastname);
        cy.get('form').children('div').find('input#address').type(info.address);
        cy.get('form').children('div').find('input#birthday').type(info.birthdate);

      })

      cy.get('button[type="submit"]').should('contain.text', 'Registrieren').click();


  })

})