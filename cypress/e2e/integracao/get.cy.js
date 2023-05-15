import { contactListSchema } from "../../support/schema"
import { contact, user } from "../../support/utils"
import { Unauthorized } from "../../fixtures/data.json"

describe('get', () => {
    describe('Tests list contacts', () => {
        before(() => {
            cy.requestCreateUser(user);
            cy.requestSession(user);
            cy.requestCreateContact(contact);
        });

        //Custom commands not used to more clearly exemplify the test
        it('Should return 200 when listing contacts', () => {
            cy.request({
                method: 'GET',
                url: '/contacts',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Cypress.env('session'),
                },
            }).then((response) => {
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.equal(200);
                expect(response.body).to.be.jsonSchema(contactListSchema);
            });
        });

        //Custom commands not used to more clearly exemplify the test
        it('Should return 401 when trying to list contacts without sending the authorization', () => {
            cy.request({
                method: 'GET',
                url: '/contacts',
                headers: {
                    'Content-Type': 'application/json',
                },
                failOnStatusCode: false,
            }).then((response) => {
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.equal(401);
                expect(response.body.error).to.equal(Unauthorized);
            });
        });
    });
});