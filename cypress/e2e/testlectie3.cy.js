describe("test1-login",()=>{

    it("login page", ()=>{
        cy.viewport(1920,1080);
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("div[class='next-10stgr7 e1jenigf0']>h2[class='next-c1vj7d e168p23h3']").should("be.visible");
        cy.get("div[class='next-10stgr7 e1jenigf0']>h2[class='next-c1vj7d e168p23h3']").should("have.text","Login");
        cy.get("#user_email").should("be.visible")
        cy.get("#user_password").should("be.visible")
        cy.get("button[type='submit']").should("be.visible")

        });
    });