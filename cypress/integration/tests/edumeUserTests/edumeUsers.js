import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import CreateNewUser from './createNewUserPage';
import CreateTeam from './createTeamPage';
import SearchUsers from './userSearchPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

Given('I open the eduMe login page', () => {
    cy.visit('https://deathstar-qa-candidate-test.herokuapp.com/')
})

When('I login and go to the People tab', () => {
    cy.login('edume@edume.com', 'cheesecat')
})

Then('I can create a new user via email', () => {
    cy.get('[data-automation="header-item-people"]').click({ force: true })
    cy.get('.styles_dropdown-wrapper__9o5bg > .styles_primary__hk7t8').then(($btn) => {
      if($btn.is(":disabled")) {
          CreateTeam.clickTeamBtn()
          CreateTeam.enterTeamName('Test Team')
          CreateTeam.createNewTeam()
          cy.contains('Test Team').should('be.visible')
          cy.contains('Add new users').click({ force: true })
      }
      else {
          cy.contains('Add new users').click({ force: true })
      }
    })
    cy.contains('Add a single user').click({force: true})
    CreateNewUser.enterFirstName('Obi Wan')
    CreateNewUser.enterLastName('Kenobi')
    CreateNewUser.enterEmailId('test.one@edume.com')
    CreateNewUser.createNewUser()
    cy.wait(5000)
    cy.get('.styles_interactive__qdry6').click()
    cy.contains("Obi Wan Kenobi").should('be.visible')

    cy.logout()

})



Given('I open the eduMe login page', () => {
    cy.visit('https://deathstar-qa-candidate-test.herokuapp.com/')
})

When('I login and go to the People tab', () => {
    cy.login('edume@edume.com', 'cheesecat')
})

Then('I can create a new user via phone number', () => {
    cy.get('[data-automation="header-item-people"]').click({ force: true })
    cy.get('.styles_dropdown-wrapper__9o5bg > .styles_primary__hk7t8').then(($btn) => {
      if($btn.is(":disabled")) {
          CreateTeam.clickTeamBtn()
          CreateTeam.enterTeamName('Test Team')
          CreateTeam.createNewTeam()
          cy.contains('Test Team').should('be.visible')
          cy.contains('Add new users').click({ force: true })
      }
      else {
          cy.contains('Add new users').click({ force: true })
      }
    })
    cy.contains('Add a single user').click({force: true})
    CreateNewUser.enterFirstName('Darth')
    CreateNewUser.enterLastName('Vader')
    cy.contains('Phone').click()
    CreateNewUser.selectCountryCode()
    CreateNewUser.selectCountryName()
    CreateNewUser.enterUserPhoneNo('7424007660')
    CreateNewUser.createNewUser()
    cy.wait(5000)
    cy.get('.styles_interactive__qdry6').click()
    cy.contains("Darth Vader").should('be.visible')
    cy.logout()
})


Given('I log into the edume portal', () => {
    cy.visit('https://deathstar-qa-candidate-test.herokuapp.com/')
    cy.login('edume@edume.com', 'cheesecat')
})

When('I navigate to the Users tab', () => {
    cy.get('[data-automation="header-item-people"]').click({ force: true })
    cy.get('[data-automation="users-tab"]').click({ force: true })
})

Then('I can search for existing users both via Email and via Phone number', () => {
    SearchUsers.searchUser()

    SearchUsers.enterUserDetails('7424007660')
    cy.contains('Darth Vader').should('be.visible')

    SearchUsers.enterUserDetails('test.one@edume.com')
    cy.contains('Obi Wan Kenobi').should('be.visible')

    cy.logout()
})