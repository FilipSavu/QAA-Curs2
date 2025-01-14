describe("login test",()=>{

    it("visit goit login page", ()=>{
      
        cy.viewport (1920,1080)
        cy.visit ("https://www.edu.goit.global/ro/account/login")
        cy.get("div[class='next-10stgr7 e1jenigf0'] > h2[class='next-c1vj7d e168p23h3']").should("be.visible")
        cy.get("div[class='next-10stgr7 e1jenigf0'] > h2[class='next-c1vj7d e168p23h3']").should("be.have.text","Autentificare")
        });
    });
    