Feature: User shopping flow
    Scenario: Buying a begginer guitar
        Given I start the shopping journey
        When I press on the start button
        Then I should navigate to the player screen
        When I select yes as a beginner guitar player
        Then I should navigate to the beginner-guitar screen
        When I press on the checkout button
        Then I should navigate to the order-confirmation screen

    Scenario: Buying an expert guitar
        Given I start the shopping journey
        When I press on the start button
        Then I should navigate to the player screen
        When I select no as a beginner guitar player
        Then I should navigate to the lottery screen
        When I press on the yes button
        Then I should navigate to the expert-guitar screen
        When I press on the checkout button
        Then I should navigate to the order-confirmation screen