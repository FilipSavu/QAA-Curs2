class LoginPage{

NavigateToLoginPage(){
    cy.viewport(1920,1080);
    cy.visit("https://www.edu.goit.global/account/login");
}

VerifyLoginPage(){
    cy.get("div[class='next-10stgr7 e1jenigf0']>h2[class='next-c1vj7d e168p23h3']").should("be.visible");
    cy.get("div[class='next-10stgr7 e1jenigf0']>h2[class='next-c1vj7d e168p23h3']").should("have.text","Login");
}


VerifyEmailField(){
    cy.get("#user_email").should("be.visible");
}

VerifyPassowrdField(){
    cy.get("#user_password").should("be.visible");
}

VerifySubmitButtin(){
    cy.get("button[type='submit']").should("be.visible");
}


}

export default LoginPage;
