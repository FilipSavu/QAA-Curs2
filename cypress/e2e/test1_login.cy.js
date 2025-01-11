describe("test1-login",()=>{

    it("login page", ()=>{
        cy.viewport(1920,1080);
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("user888@gmail.com");
        cy.get("input[type='password']").type("1234567890");
        cy.get("button[type='submit']").click();
        cy.get('[data-test-id="CircularProgressbarWithChildren__children"]').click();
        cy.get('[data-valuetext="Log out"]').click();
        });
    });