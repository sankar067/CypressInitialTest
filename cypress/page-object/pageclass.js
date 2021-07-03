export class TodoPage{
    navigate(){
        cy.visit('http://demo.guru99.com/test/newtours/')
    }

    enterUsername(uname) {
        cy.get(':nth-child(2) > [width="112"] > input',{timeout:6000}).type(uname)
        cy.get(':nth-child(2) > [width="112"] > input').should('have.value', uname)
    }

    enterPassword(pswd) {
        cy.get(':nth-child(3) > [width="112"] > input',{timeout:6000}).type(pswd)
        cy.get(':nth-child(3) > [width="112"] > input').should('have.value', pswd)
    }

    clickSubmit(){
        cy.get('div > input').click()
        
    }

    validateLoginStatus(expactedText){
        cy.get('h3',{timeout:5000}).should('contain',expactedText)
    }
}