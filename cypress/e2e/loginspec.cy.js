import userData from '../fixtures/userData.json'
import LoginPage from '../page/loginpage'
import menupage from '../page/menupage'
import menuPage from '../page/menupage'

const loginpage = new LoginPage()
const menupage = new menuPage()

describe('sadeq test', () => {
  it('success test', () => {
    loginpage.accessLoginPage()
    loginpage.loginWithUser(userData.successtest.usuario, userData.successtest.senha)
    loginpage.lgpdbuttom()
    menupage.checkadmpainel()
  })

  it.only('fail test', () => {
    loginpage.accessLoginPage()
    loginpage.loginWithUser(userData.failtest.usuario, userData.failtest.senha)
    loginpage.lgpdbuttom()
    loginpage.checkaccessfail()

  })

})
   
  
