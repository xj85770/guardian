import { METHOD, STATUS_CODE } from "../../../support/api/api-const";
import API from "../../../support/ApiUrls";
import * as Authorization from "../../../support/authorization";

context("Schemas", { tags: ['schema', 'thirdPool'] }, () => {
    const SRUsername = Cypress.env('SRUser');

    before(() => {
        Authorization.getAccessToken(SRUsername).then((authorization) => {
            cy.request({
                method: METHOD.GET,
                url: API.ApiServer + API.Schemas,
                headers: {
                    authorization,
                },
            }).then((response) => {
                expect(response.status).eql(STATUS_CODE.OK);
                let schemaId = response.body[0].id;
                cy.request({
                    method: METHOD.GET,
                    url:
                        API.ApiServer +
                        API.Schemas +
                        schemaId +
                        "/export/file",
                    encoding: null,
                    headers: {
                        authorization,
                    },
                }).then((response) => {
                    expect(response.status).to.eq(STATUS_CODE.OK);
                    expect(response.body).to.not.be.oneOf([null, ""]);
                    let schema = Cypress.Blob.arrayBufferToBinaryString(
                        response.body
                    );
                    cy.writeFile(
                        "cypress/fixtures/exportedSchema.schema",
                        schema,
                        "binary"
                    );

                });
            });
        })
    });

    it("Import new schema from a file", { tags: ['smoke'] }, () => {
        Authorization.getAccessToken(SRUsername).then((authorization) => {
            cy.request({
                method: METHOD.GET,
                url: API.ApiServer + API.Schemas,
                headers: {
                    authorization,
                },
            }).then((response) => {
                const topicUid = response.body[0].topicId;

                cy.fixture("exportedSchema.schema", "binary")
                    .then((binary) => Cypress.Blob.binaryStringToBlob(binary))
                    .then((file) => {
                        cy.request({
                            method: METHOD.POST,
                            url:
                                API.ApiServer +
                                API.Schemas +
                                topicUid +
                                "/import/file",
                            body: file,
                            headers: {
                                "content-type": "binary/octet-stream",
                                authorization,
                            },
                        }).then((response) => {
                            expect(response.status).eql(STATUS_CODE.SUCCESS);
                            expect(response.body).to.not.be.oneOf([null, ""]);
                        });
                    });
            });
        })
    });

});