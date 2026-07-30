class professorpag{
    selectorlist() {
        const selectors = {
            novoprofessorField:'.h-16 > .bg-blue-600',
            nomecompletoField:"[placeholder='Ex: Roberto Lima']",
            disciplinaField:'.appearance-none',
            areaField:'.outline-none',
            cadastrarField:"[type='submit']",
            sairField:'.lucide-x'
          
        }
        return selectors
    }
    novoprofessor(){
          cy.get(this.selectorlist().novoprofessorField).click()
    }
  preenchernovoprofessor(nomecompleto){
  cy.get(this.selectorlist().nomecompletoField).clear().type('Ana Clara')
  cy.get(this.selectorlist().disciplinaField)
  .select('Artes (LC-03)')
  cy.get(this.selectorlist().areaField).eq(3)
  .select('Natureza')
  cy.get(this.selectorlist().cadastrarField).click()
  cy.get(this.selectorlist().sairField).click()


    }
    chave(){

    }
    
     
}
export default professorpag