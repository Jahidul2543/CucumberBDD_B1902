#@SmokeTest
Feature: Search feature

  Scenario: Test Search functionality
    Given User is in landing page
    When Search using search box by pressing enter
    Then User should see the appropriate result


