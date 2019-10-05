Feature: Search
@SmokeTest
  Scenario Outline: Search items using search box
  Given User must be in home page
  When User search "<items>" using search box
  Then Related items should be on the "<expected>" screen

  Examples:
  |items|expected|
  |books|No results were found for your search books|
  |pen|No results were found for your search pen|
