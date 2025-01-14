import Login from "../pages/Login";

describe("login test",()=>{

    it("visit goit login page", ()=>{
      
        const login=new Login ()

        login.NavigateToLoginPage();
        login.VerifyEmailField();
        login.VerifyLoginPage();
        login.VerifyPassowrdField();
        login.VerifySubmitButtin();
        login.inputEmail("user888@gmail.com");
        login.inputPassword("1234567890");
             
        });
    });
