const { Given,When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("As a user, I go to the store's website", () => {
  cy.visit(Cypress.env('base_url'))
  cy.viewport(1720, 800)
  cy.title().should('contain', 'АЛЛО - національний маркетплейс із найширшим асортиментом')
})

When("As a user, I enter a certain product in the search bar",()=>{
    cy.get(Cypress.env('search_panel')).type(Cypress.env('name_of_product'))
    cy.get(Cypress.env('correct_product')).click()
})

Then("Checking that all elements on the page correspond to my request",()=>{
  const expectedSearchQuery = Cypress.env('name_of_product')
  cy.get(Cypress.env('all_items_on_page')).each((productCard) => {
    const productName = productCard.find(Cypress.env('all_items_title')).text().trim()
    expect(productName.toLowerCase()).to.contain(expectedSearchQuery.toLowerCase())
  })

})