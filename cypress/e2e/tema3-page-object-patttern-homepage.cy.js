import Homepage from "../pages/homepage";

describe("login test",()=>{

    it("visit goit login page", ()=>{
      
        const login=new Homepage ()

        login.NavigateToLoginPage();

             
        });
    });
