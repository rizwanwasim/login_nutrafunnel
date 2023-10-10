
describe("Login Functionality of Nutrofunnel", () => {
    it("Login Functionality with invalid credentials", () => {
        const email = "qatester@newrich.com";
        const password = "abc";

        cy.visit("https://staging.nutrafunnels.com/login/");

        // Find and fill the email and password fields
        cy.get('#user_login').type(email);
        cy.get('#user_pass').type(password);

        // Click the login button
        cy.get('#wp-submit').contains("Sign in").click();

        // Trigger an action that would perform username validation (e.g., clicking the "Login" button)
        // cy.get('#login-button').click();
        cy.get('.alert').should('contain', 'Wrong Email or Password!');
   
    });

    it("Login Functionality with valid credentials", () => {
        const email = "qatester@newrich.com";
        const password = "24%UxI^y%H!JQ^TLvFlZ6AK%";

        cy.visit("https://staging.nutrafunnels.com/login/");
        // Find and fill the email and password fields
        cy.get('#user_login').type(email);
        cy.get('#user_pass').type(password);
        // Click the login button
        cy.get('#wp-submit').contains("Sign in").click();

    });
});
