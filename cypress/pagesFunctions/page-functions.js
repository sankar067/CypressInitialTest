// we can use regular function instead class

export function fnnavigate(){
    cy.visit('http://demo.guru99.com/test/newtours/')
}

export function fnenterUsername(uname) {
    cy.get(':nth-child(2) > [width="112"] > input',{timeout:6000}).type(uname)
    cy.get(':nth-child(2) > [width="112"] > input').should('have.value', uname)
}

export function fnenterPassword(pswd) {
    cy.get(':nth-child(3) > [width="112"] > input',{timeout:6000}).type(pswd)
    cy.get(':nth-child(3) > [width="112"] > input').should('have.value', pswd)
}

export function fnclickSubmit(){
    cy.get('div > input').click()
    
}

export function fnvalidateLoginStatus(expactedText){
    cy.get('h3').should('contain',expactedText)
}