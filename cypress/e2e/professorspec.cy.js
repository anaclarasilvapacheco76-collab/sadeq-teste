import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginpage'
import menuPage from '../page/menupage'
import professorPag from '../page/professorpag'


const loginpage = new LoginPage()
const menupage = new menuPage()
const professorpag = new professorPag()


describe('sadeq test', () => {
  it('success test', () => {
    loginpage.accessLoginPage()
    loginpage.loginWithUser(userData.successtest.usuario, userData.successtest.senha)
    loginpage.lgpdbuttom()      
    menupage.checkadmpainel()           
    menupage.clicarprofessor()
    menupage.checkprofessor()
    professorpag.novoprofessor()
    professorpag. preenchernovoprofessor('Ana Clara')
  })

})
   
  
