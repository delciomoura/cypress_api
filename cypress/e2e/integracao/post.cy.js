import { contactSchema } from "../../support/schema"
import { contact, user } from "../../support/utils"
import { Unauthorized } from "../../fixtures/data.json"

describe('post', () => {
    describe('Tests create contact', () => {
        before(() => {
            cy.requestCreateUser(user);
            cy.requestSession(user);
        });

        //Custom commands not used to more clearly exemplify the test
        it('Should return 201 when creating a contact', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/contacts',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Cypress.env('session'),
                },
                body: contact,
            }).then((response) => {
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.equal(201);
                expect(response.body).to.be.jsonSchema(contactSchema);
            });
        });

        //Custom commands not used to more clearly exemplify the test
        it('Should return 401 when trying to create a contact without sending the authorization', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/contacts',
                headers: {
                    'Content-Type': 'application/json',
                },
                failOnStatusCode: false,
                body: contact,
            }).then((response) => {
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.equal(401);
                expect(response.body.error).to.equal(Unauthorized);
            });
        });
    });
});