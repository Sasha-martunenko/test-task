const { Given,When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("As a user, I go to the store's website", () => {
  cy.visit(Cypress.env('base_url'))
  cy.viewport(1720, 800)
  cy.title().should('contain', 'АЛЛО - національний маркетплейс із найширшим асортиментом')
});

When("As a user, I select a category and subcategory", () => {
  cy.get(Cypress.env('category')).click()
  cy.get(Cypress.env('category_of_product')).click()
  cy.get(Cypress.env('first_product_filter')).click()
});

When("As a user, I add the product to my cart", () => {
    cy.get(Cypress.env('category_of_price')).trigger('mouseover')
    cy.contains(Cypress.env('from_to_btn')).scrollIntoView().click()
    cy.get(Cypress.env('first_product')).trigger('mouseover')
    cy.contains(Cypress.env('first_buying_btn')).click()
    cy.get(Cypress.env('close_cart_btn')).click()
     
})

When("As a user,I add a product from another category to my cart",()=>{
    cy.get(Cypress.env('category')).click()
    cy.get(Cypress.env('second_category_of_product')).click()
    cy.get(Cypress.env('second_subcategory_of_product')).click()
    cy.get(Cypress.env('category_of_price')).trigger('mouseover')
    cy.contains(Cypress.env('from_to_btn')).scrollIntoView().click()
    cy.get(Cypress.env('second_product')).trigger('mouseover')
    cy.contains(Cypress.env('first_buying_btn')).click()
})

Then("Checking information about products in the basket",()=>{
    cy.get(Cypress.env('first_product')).should('contain', 'Навушники')
    cy.get(Cypress.env('second_product')).should('contain', 'Смарт-годинник')
})

Then("Checking that the price is correctly calculated",()=>{
    cy.get(Cypress.env('total_price')).should('contain','Разом').each(($div) =>{
        const total = parseFloat($div.find(Cypress.env('total_box_price')).text().replace('$', '')) 
    cy.get(Cypress.env('first_product')).first().each(($div) => {
        const firstprice = parseFloat($div.find(Cypress.env('first_product_price')).text().replace('$', ''))
    cy.get(Cypress.env('second_product')).last().each(($div) =>{
        const secondprice = parseFloat($div.find(Cypress.env('second_product_price')).text().replace('$', '')) 
        const expectedTotal = (firstprice + secondprice)
        expect(total).to.equal(expectedTotal)
      })
    })
  })
})        
Then("Checking that the delete button is clicked",()=>{
    cy.get(Cypress.env('fisrt_delete_btn')).then($svg=>{
        expect($svg[0]).to.exist
    cy.get(Cypress.env('second_delete_btn')).then($svg=>{
        expect($svg[0]).to.exist
        cy.get(Cypress.env('fisrt_delete_btn')).should('be.visible')
    })    
    })
    
})
