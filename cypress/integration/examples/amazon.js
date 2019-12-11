/// <reference types="Cypress" />
describe('Login', function() {

    //code for Amazon EndtoEnd 
    
    it('Amazon-End to End', function() {
    
        cy.visit("https://amazon.com")

        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type('kripya@icloud.com')
        cy.get('#continue').click()
        cy.get('#ap_password').type('At@4395')
        cy.get('#signInSubmit').click()
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        cy.get('#twotabsearchtextbox').type('headphones')
    cy.get('.nav-search-submit > .nav-input').click()
    cy.get("section[aria-label='4 Stars & Up']").click()
    cy.contains('Sony').click()
    cy.get('.sg-row').find('.s-image').eq(0).click()
    cy.contains('Add to Cart').click()
  
    
   cy.go('back')
   cy.get('#twotabsearchtextbox').clear().type('watches')     
   cy.get('.nav-search-submit > .nav-input').click()
   cy.get("section[aria-label='4 Stars & Up']").click()
   cy.contains('Invicta').click()
   //cy.get('.sg-col-inner').find('.sg-row').eq(3).click()
   cy.get('.sg-col-inner').find('.s-image').eq(1).click()
   cy.contains('Add to Cart').click()
   //cy.get('#add-to-cart-button-ubb').click()
   cy.contains('Added to Cart').should('be.visible').click()

   cy.get('#nav-cart-count').click()
   
   cy.get('input[value="Delete"]').first().click()

   cy.get('input[value="Proceed to checkout"]').should('be.visible').click()

   cy.contains('Select a shipping address').should('be.visible')

   
  })

})