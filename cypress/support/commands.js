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


Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-automation="email-input"]').type(username)
    cy.get('[data-automation="email-button"]').click()
    cy.get('[data-automation="password-input"]').clear().type(password)
    cy.get('[data-automation="password-button"]').click()
  })

  Cypress.Commands.add('logout', () => {
    cy.get('.src-components-core-Header-styles__profile__ExXwe').click({ force: true })
    cy.get('.styles_scrollContainer__1nh44 > div > .styles_linkContainer__eg3bl > .styles_primary__eg3bl').click({ force: true })
  })