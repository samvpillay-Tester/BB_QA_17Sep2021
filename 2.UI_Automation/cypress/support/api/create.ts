import { Computer } from '../domain/computer'
import { requestPathEnum } from '../enums/requestPathEnum'

Cypress.Commands.add('requestNewComputer', (computer: Computer) => { 
    cy.mapCompanyNameToId().then((mappedCompanyId) => {
        const computerRequest = new ComputerRequest(
            computer.name,
            computer.introduced,
            computer.discontinued,
            mappedCompanyId
            );
    
        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}${requestPathEnum.createPath}`,
            body: JSON.stringify(computerRequest),
            headers: {
                'Content-Type': 'application/json;',
            },
            failOnStatusCode: false // this is a form submission yielding HTML
        })
    });
});


class ComputerRequest {

    constructor(
        public name: string = `DefaultName_${Date.now()}`,
        public introduced: string = new Date().toISOString().slice(0, 10),
        public discontinued: string = new Date().toISOString().slice(0, 10),
        public company: number = 1 // Todo - rework \ mapped to first entry
    ) { }    
}