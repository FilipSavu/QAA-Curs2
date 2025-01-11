describe("login test",()=>{

    it("visit goit login page", ()=>{
        cy.viewport(1920,1080);
        cy.login("testowyqa@qa.team","QA!automation-1");
        cy.get("button[type='submit']").click();
        cy.get('[data-test-id="CircularProgressbarWithChildren__children"]').click();
        cy.get('[data-valuetext="Log out"]').click();        
        });
    });
    