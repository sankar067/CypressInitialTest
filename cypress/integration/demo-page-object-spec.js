/// <reference types="cypress" />

import { TodoPage } from "../page-object/pageclass"


describe('Mercury Tour Demo : Page Object Class',() =>{
    const todoPage = new TodoPage() 

    it('Login Validation - Using Page Class',function(){
        todoPage.navigate()
        todoPage.enterUsername('mercury')
        todoPage.enterPassword('mercury')
        todoPage.clickSubmit()
        todoPage.validateLoginStatus('Login Successfully')
    })

})
