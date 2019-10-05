@FunctionalTest
Feature: Login Feature

 #The Scenario Outline keyword can be used to run the same Scenario multiple times,
 # with different combinations of values.
 # The keyword Scenario Template is a synonym of the keyword Scenario Outline.

  Scenario Outline: Login with invalid credentials
    Given User has to be in log in page
    When Try log in by invalid "<userName>" and "<password>"
    Then Unable to log in
    Examples:
      | userName     |password|
      |abcd@gmail.com|MrABCD|
      |mrsabcd@gmail.com|MrsABCD|
      |xyz@gmail.com|xyz        |

  Scenario: Login with invalid credentials
    Given  User is in login page
     #When   Enter invalid email and password
    When   Enter invalid email and password from Data Table
      | userName          | password |
      | testdat@gmail.com | testdata |
      | testabc@gmail.com | testabc  |

    Then   Error message appear
