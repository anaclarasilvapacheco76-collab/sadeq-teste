class menupage{
    selectorlist(){
        const selectors ={
        admpainelField:"[href='/admin/dashboard']",
        professorField:"[href='/admin/teachers']"
        }
         return selectors
    }
    checkadmpainel(){
    cy.location('pathname').should('include', '/admin/dashboard')
     cy.get(this.selectorlist().admpainelField,{ timeout: 15000 }).should('be.visible')
   
    }
    clicarprofessor(){
    cy.get(this.selectorlist().professorField).eq(0).click()
    }
    checkprofessor(){
    cy.location('pathname').should('include', '/admin/teachers')
    cy.get(this.selectorlist().professorField,{ timeout: 15000 }).should('be.visible')
    
 
    }
    }
export default menupage