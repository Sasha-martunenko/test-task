Feature: Checking the correctness of the product
    User can search for any products and read all relevant information about these products
    Scenario: Go to the store website,select a specific category and subcategory in the product catalog, check the correctness of the description of the selected product
    Given As a user, I go to the store's website
    When As a user, I select a specific product category and subcategory
    Then Checking the correctness of the description of this product