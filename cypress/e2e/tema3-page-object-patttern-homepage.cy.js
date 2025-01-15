import Homepage from "../pages/homepage";

describe("login test",()=>{

    it("visit goit login page", ()=>{
      
        const homepage = new Homepage(); // Creează o instanță a clasei Homepage

        login.NavigateToLoginPage(); // Apelează metodele folosind instanța 'homepage'
        login.VerifyEmailField();
        login.VerifyLoginPage();
        login.VerifyPassowrdField();
        login.VerifySubmitButtin();
        login.inputEmail("testowyqa@qa.team");
        login.inputPassword("QA!automation-1");
        login.clickLoginButton();
             
        });
    });
