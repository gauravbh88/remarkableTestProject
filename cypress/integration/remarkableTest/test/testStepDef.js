import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";
/// <reference types="cypress" />


 

Given('Open my.reMarkable.com',()=>
{
    cy.visit('/')
})

When('Enter invalid credentials',() => {
        cy.fixture('example').then((user) => {
        cy.get('#username').type(user.UserName)
        cy.get('[class="c063cb1a4 c295cd12c c1abb73c2 ca574d24e _button-login-id"]').click()
        cy.get('#password').type(user.InvalidPassword)
        cy.get('[class="c063cb1a4 c295cd12c c1abb73c2 ca574d24e _button-login-password"]').click()
      })
    
})

Then('Wrong email or password message is displayed',()=>
{
    cy.get('#error-element-password').should('have.text', '\n                          \n                        Wrong email or password')
})



When('Enter valid credentials',()=>
{
    cy.fixture('example').then((user) => {
        cy.get('#username').type(user.UserName)
        cy.get('[class="c063cb1a4 c295cd12c c1abb73c2 ca574d24e _button-login-id"]').click()
        cy.get('#password').type(user.ValidPassword)
        cy.get('[class="c063cb1a4 c295cd12c c1abb73c2 ca574d24e _button-login-password"]').click()
      })
   
})


Then('Verify successful login',()=>
{
      
    cy.get('[class="heading-page tc heading-page"]').should('have.text','Welcome to My reMarkable')
    
})




And('Successful logout',()=>
{
   cy.get('[class="menu-button"]').click()
   cy.get('[class="button-logout"]').click()
   cy.get('[class="cf51ac6de c80dbad51"]').should('have.text','Log in with your reMarkable account to continue to My reMarkable.')
})



And('Click on Device & Apps section',()=>
{
      
    cy.get('[class="menu-button"]').click()
    cy.get(':nth-child(4) > .menu-text-extra-large').click()
    cy.get('b').should('have.text','Device & apps')
    
})



Then('I am able to navigate through  devices , apps , mobile app and read on remarkable section',()=>
{
 
    

    cy.get('.heading-card').should('have.text','Device')
    cy.get('[label="Desktop App"]').click()
    cy.get('.heading-card').should('have.text','Desktop app')
    cy.get('[label="Mobile App"]').click()
    cy.get('.heading-card').should('have.text','Mobile app')
    cy.get('.nav-button.hide-on-mobile').click()
    cy.get('.heading-card').should('have.text','Read on reMarkable')
    
})


