import Homepage from "../pages/homepage";

describe("login test",()=>{

    it("visit goit login page", ()=>{
      
        const homepage=new Login ()

        login.NavigateToLoginPage();
        login.VerifyEmailField();
        login.VerifyLoginPage();
        login.VerifyPassowrdField();
        login.VerifySubmitButtin();
        login.inputEmail("testowyqa@qa.team");
        login.inputPassword("QA!automation-1");
        login.clickLoginButton();
             
        });
    });
