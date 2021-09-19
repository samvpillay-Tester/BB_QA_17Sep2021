import { Computer } from '../domain/computer'
import { requestPathEnum } from '../enums/requestPathEnum'

Cypress.Commands.add('requestNewComputer', (computer: Computer) => { 
    cy.request({
        method: 'POST',
        url: `${Cypress.config().baseUrl}${requestPathEnum.createPath}`,
        body: JSON.stringify(computer)
    })
});