describe("login test",()=>{

it("visit goit login page", ()=>{
    cy.viewport(1920,1080);
    cy.login("savufilip@gmail.com","@mir!osiF2019")
    cy.get("#go-to-the-course-homepage-widget > span")
        .scrollIntoView()
        .should("have.text","Accesează cursul");
    });
});
