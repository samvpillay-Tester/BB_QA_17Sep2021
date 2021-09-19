import { Computer } from '../domain/computer'
import { computerPOM } from '../page-objects/computer';

Cypress.Commands.add('updateComputer', (computer: Computer) => { 
    cy.get(computerPOM.nameTxt).clear();
    cy.get(computerPOM.nameTxt).type(computer.name);

    cy.get(computerPOM.introducedTxt).clear();
    cy.get(computerPOM.introducedTxt).type(computer.introduced);

    cy.get(computerPOM.discontinuedTxt).clear();
    cy.get(computerPOM.discontinuedTxt).type(computer.discontinued);

    cy.get(computerPOM.companyDdl).select(computer.company);

    // ToDo add Sumbit selector in UI ?
    cy.contains('Save this computer').click();
});