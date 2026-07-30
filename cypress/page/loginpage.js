class loginpagesuccess {
    selectorlist() {
        const selectors = {
            usuarioField: "[placeholder='Seu usuário ou e-mail']",
            senhaField: "[placeholder='Sua senha secreta']",
            lgpdField: "[type='checkbox']",
            botaoField: "[type='submit']",
            mensageerrorField: '.whitespace-pre-wrap'
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/login')
    }

    loginWithUser(usuario, senha) {
        cy.get(this.selectorlist().usuarioField).type(usuario)
        cy.get(this.selectorlist().senhaField).type(senha)
    }

    lgpdbuttom() {
        cy.get(this.selectorlist().lgpdField).check()
        cy.get(this.selectorlist().botaoField).click()
    }
    checkaccessfail(){
cy.get(this.selectorlist().mensageerrorField).contains('Credenciais inválidas')
    }
}

export default loginpagesuccess