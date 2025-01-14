

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
export class Login {

    constructor() {
        this.emailfield = "#user_email";
        this.logintitle = ".next-10stgr7 > .next-c1vj7d ";
        this.userpassword = "#user_password";
        this.submitbutton = "button[type='submit']";
    }

    NavigateToLoginPage() {
        cy.viewport(1920, 1080);
        cy.visit("https://www.edu.goit.global/account/login");
    }
    VerifyLoginPage() {
        cy.get(this.logintitle).should("be.visible");
        cy.get(this.logintitle).should("have.text", "Login");
    }
    VerifyEmailField() {
        cy.get(this.emailfield).should("be.visible");
    }
    inputEmail(email) {
        cy.get(this.emailfield).type(email);
    }
    inputPassword(password) {
        cy.get(this.passwordfield).type(password);
    }
    VerifyPassowrdField() {
        cy.get(this.userpassword).should("be.visible");
    }
    VerifySubmitButtin() {
        cy.get(this.submitbutton).should("be.visible");
    }
}
    