// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('generateEmailAddress', () => {

    const baseEmail = "cypress";
    // Get the current date and time
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '');

    // Format the time as HHMMSS (24-hour format)
    const formattedTime = date.toTimeString().split(' ')[0].replace(/:/g, '').slice(0, 6);  // HHMMSS


    const domain = "@test.com";

    // Combine base email, formatted date, formatted time, and domain
    const uniqueEmail = `${baseEmail}${formattedDate}${formattedTime}${domain}`;

    return cy.wrap(uniqueEmail);


})