const firstName = '[data-automation="add-team-member-first-name-input"]'
const lastName = '[data-automation="add-team-member-last-name-input"]'
const userEmailId = '[data-automation="add-team-member-email-input"]'
const countryCode = '.styles_button-content__1c38v > :nth-child(1)'
const countryName = '.styles_scrollContainer__1nh44 > :nth-child(1) > .styles_linkContainer__eg3bl > .styles_primary__eg3bl'
const userPhoneNum = '[placeholder="Mobile number"]'
const createUserBtn = '[data-automation="add-user-to-team-button"]'
const createTeamUserBtn = '[data-automation="all-teams-new-team-dropdown"]'


class CreateNewUser {
    static enterFirstName(FirstNameInput) {
        cy.get(firstName).clear().type(FirstNameInput)
    }
    static enterLastName(LastNameInput) {
        cy.get(lastName).clear().type(LastNameInput)
    }
    static enterEmailId(EmailIdInput) {
        cy.get(userEmailId).clear().type(EmailIdInput)
    }
    static enterUserPhoneNo(PhoneNumInput) {
        cy.get(userPhoneNum).clear().type(PhoneNumInput)
    }
    static selectCountryCode() {
        cy.get(countryCode).click({ force: true })
    }
    static selectCountryName() {
        cy.get(countryName).click({ force: true })
    }
    static createNewUserInTeam() {
        cy.get(createTeamUserBtn).click({ force: true })
    }
    static createNewUser() {
        cy.get(createUserBtn).click({ force: true })
    }
}

export default CreateNewUser