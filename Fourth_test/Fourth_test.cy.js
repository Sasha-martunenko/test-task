const { Given,When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("As a user, I go to the store's website", () => {
  cy.visit(Cypress.env('base_url'))
  cy.viewport(1720, 800)
  cy.title().should('contain', 'АЛЛО - національний маркетплейс із найширшим асортиментом')
})

When("As a user, I select a specific product category and subcategory",()=>{
    cy.get(Cypress.env('category')).click()
    cy.get(Cypress.env('correct_category')).click()
    cy.get(Cypress.env('correct_subcategory')).click()
})

Then("Checking the correctness of the description of this product",()=>{
    cy.get(Cypress.env('title_of_correcct_product')).then($div =>{
        expect($div[0]).to.have.property(Cypress.env('incorrect_title'))
    })
})