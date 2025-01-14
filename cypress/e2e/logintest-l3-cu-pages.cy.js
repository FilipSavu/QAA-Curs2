import LoginPage from "../pages/Loginpage";

describe("login test",()=>{

    it("visit goit login page", ()=>{
      
        const login=new LoginPage ()

        login.NavigateToLoginPage()
        login.VerifyEmailField()
        login.VerifyLoginPage()
        login.VerifyPassowrdField()
        login.VerifySubmitButtin()
        


      
        });
    });
    