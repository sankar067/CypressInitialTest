// Below code of line for auto complete
/// <reference types="cypress" />

// it('should navigate to google app',() =>{
//     cy.visit('https://gmail.com')
// })

describe('Mercury Demo Test',() =>{

    beforeEach(() => {
        cy.visit('http://demo.guru99.com/test/newtours/')
    })

    it.only('enter credentials',function(){
        cy.get(':nth-child(2) > [width="112"] > input',{timeout:6000}).type('mercury')
        cy.get(':nth-child(2) > [width="112"] > input').should('have.value', 'mercury')
        cy.get(':nth-child(3) > [width="112"] > input').type('mercury')
        // cy.get(':nth-child(3) > [width="112"] > input').should('have.text','mercury')
        cy.get(':nth-child(3) > [width="112"] > input').should('have.value', 'mercury')
        cy.get('div > input').click()
        cy.get('h3').should('contain','Login Successfully')
    })

})
