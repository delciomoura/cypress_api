Cypress.Commands.add("requestCreateUser", (user) => {
    cy.request({
        method: 'POST',
        url: '/user',
        headers: {'Content-Type': 'application/json'},
        body: user,
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
    });
});

Cypress.Commands.add("requestSession", (user) => {
    cy.request({
        method: 'POST',
        url: '/session',
        headers: {'Content-Type': 'application/json'},
        body: user,
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        Cypress.env('session', response.body.user_token);
        expect(response.status).to.equal(200)
    });
});

Cypress.Commands.add("requestCreateContact", (contact) => {
    cy.request({
        method: 'POST',
        url: '/contacts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':  Cypress.env('session')
        },
        body: contact,
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        Cypress.env('contactID', response.body._id);
        cy.log(Cypress.env('contactID'))
    });
});

Cypress.Commands.add("deleteContact", () => {
    cy.request({
        method: 'DELETE',
        url: `/contacts/${Cypress.env('contactID')}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization':  Cypress.env('session')
        },
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
    });
});