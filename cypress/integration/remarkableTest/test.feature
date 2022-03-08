Feature: Login verification and Device & apps navigation verification

    Scenario: login with invalid credentials
    
    Given Open my.reMarkable.com
    When Enter invalid credentials
    Then Wrong email or password message is displayed


    Scenario: login with valid credentials and logout

    Given Open my.reMarkable.com
    When Enter valid credentials
    Then Verify successful login 
    And Successful logout

    Scenario: Verify navigation on Device & Apps section

    Given Open my.reMarkable.com
    When Enter valid credentials 
    And  Click on Device & Apps section
    Then I am able to navigate through  devices , apps , mobile app and read on remarkable section

