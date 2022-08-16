const searchUserBtn = '[type="search"]'
const searchUserField = '.src-components-peopleAndTeams-ControlBar-SearchInput-styles__input__aXHOM'


class SearchUsers {
    static enterUserDetails(UserDetailInput) {
        cy.get(searchUserField).clear().type(UserDetailInput)
    }

    static searchUser() {
        cy.get(searchUserBtn).click({ force: true })
    }
}

export default SearchUsers