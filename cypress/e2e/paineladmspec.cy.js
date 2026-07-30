import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginpage'
import menuPage from '../page/menupage'
import admPainel from '../page/admpainel'

const loginpage = new LoginPage()
const menupage = new menuPage()
const admpainel = new admPainel

describe('sadeq test', () => {
  it('success test', () => {
    loginpage.accessLoginPage()
    loginpage.loginWithUser(userData.successtest.usuario, userData.successtest.senha)
    loginpage.lgpdbuttom()
    menupage.checkadmpainel()
    admpainel.clicaradmpainel()
    admpainel.localizagrafico()
    admpainel.gestao()
    admpainel.clicaradmpainel()
    admpainel.baixarpdfconsolidado()
    admpainel.baixarpdfquestionario()
  })

})
   
  
