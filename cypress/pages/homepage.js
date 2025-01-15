class Homepage{

    constructor(){
     this.emailfield="#user_email"
     this.logintitle=".next-10stgr7 > .next-c1vj7d "
     this.userpassword="#user_password"
     this.submitbutton="button[type='submit']"
     this.burgerbutton="[data-test-id='CircularProgressbarWithChildren__children']"
     this.logoutbutton="button[type='.next-bve2vl']"
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
clickLoginButton(){
    cy.get(this.submitbutton).click();
}
VerifyHamburgerMenu(){
    cy.get(this.burgerbutton).should("be.visible")
}

clickLogoutbutton(){
    cy.get(this.clickLogoutbutton).should('contain', 'Deconectează-te').click();
}

}
export default  Homepage;