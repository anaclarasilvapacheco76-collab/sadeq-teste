class admpainel {
    selectorlist() {
        const selectors = {
           admpainelField:"[href='/admin/dashboard']",
           admpainelgraficoField:'.p-8 > .justify-between > .flex',
           gestaoField:'.rounded-lg',
           consolidadoField:'.cursor-pointer',
           pdfmodeloField:"[title='Baixar Modelo em PDF']",
           sairpdfField: '.lucide-x',
           questionarioField:"[href='/management/questionnaires']",
           professorField:"[style='opacity: 1; transform: none;']",
           pdfdoprofessorField: '.transition-all'
        }
        return selectors
    }
    clicaradmpainel(){
        cy.get(this.selectorlist().admpainelField).click()
    }
    localizagrafico(){
    cy.get(this.selectorlist().admpainelgraficoField).click()
    }
    gestao(){
         cy.get(this.selectorlist().gestaoField).eq(4).click()
    }
    
    baixarpdfconsolidado(){
    cy.get(this.selectorlist().consolidadoField).eq(4).click()
     cy.get(this.selectorlist().pdfmodeloField).click()
     cy.get(this.selectorlist().sairpdfField).click()
    }
    baixarpdfquestionario(){
    cy.get(this.selectorlist().questionarioField).click()
    cy.get(this.selectorlist().professorField).eq(0).click()
    cy.get(this.selectorlist().pdfdoprofessorField).eq(0).click()


    }

}
export default admpainel