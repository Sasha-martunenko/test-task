Feature: Checking filters
    User can set any possible filters for the selected product
    Scenario: Go to the store website, set filters in the product category and check whether the products are positioned correctly according to the filters
    Given As a user, I go to the store's website
    When As a user, I select a category
    When As a user, I apply several filters
    Then Checking the correctness of filters