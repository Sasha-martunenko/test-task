const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("As a user, I go to the store's website", () => {
  cy.visit(Cypress.env('base_url'))
  cy.viewport(1600, 800)
  cy.title().should('contain', 'АЛЛО - національний маркетплейс із найширшим асортиментом')
});

When("As a user, I select a category", () => {   
  cy.get(Cypress.env('category')).click()
});

When("As a user, I apply several filters", () => {
    cy.get(Cypress.env('category_of_product')).click()
    cy.get(Cypress.env('first_product_filter')).click()
    cy.get(Cypress.env('second_product_filter')).click()
    cy.get(Cypress.env('third_product_filter')).click()
    cy.get(Cypress.env('fourth_product_filter')).click()
    cy.contains(Cypress.env('show_product_btn')).click()
    cy.wait(2000)
    cy.get(Cypress.env('category_of_price')).trigger('mouseover')
    cy.contains(Cypress.env('from_to_btn')).scrollIntoView().click()
});

Then("Checking the correctness of filters", () => {
    cy.wait(2000)
        cy.get(Cypress.env('cheapest_headphone')).each(($item) => {
            const SecondPrevItemPrice = parseFloat($item.find(Cypress.env('cheapest_price')).text().replace('$', ''))
        cy.get(Cypress.env('expensive_price_headphone')).each(($item) =>{
            const prevItemPrice = parseFloat($item.find(Cypress.env('expensive')).text().replace('$', ''))
        if (SecondPrevItemPrice !== null) {
            expect(SecondPrevItemPrice).to.be.lessThan(prevItemPrice)
        }
        })
   })
})