class Login{

    constructor(){
     this.emailfield="#user_email"
     this.logintitle=".next-10stgr7 > .next-c1vj7d "
     this.userpassword="#user_password"
     this.submitbutton="button[type='submit']"
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
    cy.get(this.emailfield).type(email);
}
inputPassword(password){
    cy.get(this.userpassword).type(password);
}
VerifyPassowrdField(){
    cy.get(this.userpassword).should("be.visible");
}
VerifySubmitButtin(){
    cy.get(this.submitbutton).should("be.visible");
}
clickbutton(submit){
cy.get("button[type="submit"]").click();
}

}

export default Login;
