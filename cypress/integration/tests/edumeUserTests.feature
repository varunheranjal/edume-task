Feature: Login to the eduMe portal and create new users

    As a valid admin user
    I want to log into the eduMe portal successfully and create or search users in a team

    Scenario: User Creation via Email
    Given I open the eduMe login page
    When I login and go to the People tab
    Then I can create a new user via email

    Scenario: User Creation via Phone Number
    Given I open the eduMe login page
    When I login and go to the People tab
    Then I can create a new user via phone number

    Scenario: User Search via Email and Number
    Given I log into the edume portal
    When I navigate to the Users tab
    Then I can search for existing users both via Email and via Phone number