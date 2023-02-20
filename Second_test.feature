Feature: Add items to the basket
    User can add products to his cart
    Scenario: Go to the store website,choose a product category and add two products from different categories to the cart, check product information, price and make sure that the delete button is pressed
    Given As a user, I go to the store's website
    When As a user, I select a category and subcategory
    When As a user, I add the product to my cart
    When As a user,I add a product from another category to my cart
    Then Checking information about products in the basket
    Then Checking that the price is correctly calculated
    Then Checking that the delete button is clicked