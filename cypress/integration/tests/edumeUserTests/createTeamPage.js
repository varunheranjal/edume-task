const newTeamButton = '[data-automation="create-team-button"]'
const teamName = '[data-automation="team-or-group-name-input"]'
const createTeamBtn = '[data-automation="confirm-create-team-or-group-button"]'


class CreateTeam {
    static clickTeamBtn() {
        cy.get(newTeamButton).click({ force: true })
    }
    static enterTeamName(TeamName) {
        cy.get(teamName).clear().type(TeamName)
    }

    static createNewTeam() {
        cy.get(createTeamBtn).click({ force: true })
    }
}

export default CreateTeam