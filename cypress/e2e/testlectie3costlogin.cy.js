import LoginPage from "../pages/Loginpage.js";

describe("test1-login",()=>{

    it("login page", ()=>{
        const login = new LoginPage();

        login.NavigateToLoginPage();
        login.VerifyEmailField();
        login.VerifyLoginPage();
        login.VerifySubmitButtin();

        });
    });