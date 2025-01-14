class LoginPage{

    constructor(){
     this.emailfield="#user_email"
     this.logintitle="".next-10stgr7 > .next-c1vj7d ""

    }

NavigateToLoginPage(){
    cy.viewport(1920,1080);
    cy.visit("https://www.edu.goit.global/account/login");
}

VerifyLoginPage(){
    cy.get(this.logintitle).should("be.visible");
    cy.get(this.logintitle).should("have.text","Login");
}


VerifyEmailField(){
    cy.get(this.emailfield).should("be.visible");
}


inputEmail(email){
    cy.get(this.emailfield).type(email)

}

VerifyPassowrdField(){
    cy.get("#user_password").should("be.visible");
}

VerifySubmitButtin(){
    cy.get("button[type='submit']").should("be.visible");
}


}

export default LoginPage;
