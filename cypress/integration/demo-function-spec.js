/// <reference types="cypress" />

// import all fuctions which are used in this file.
import { 
    fnnavigate,
    fnenterUsername,
    fnenterPassword,
    fnclickSubmit,
    fnvalidateLoginStatus
 } from "../pagesFunctions/page-functions"


describe('Mercury Tour Demo : With Function',() =>{
    
    it('Login Validation-Using function',function(){
        fnnavigate()
        fnenterUsername('mercury')
        fnenterPassword('mercury')
        fnclickSubmit()
        fnvalidateLoginStatus('Login Successfully')
    })

})
