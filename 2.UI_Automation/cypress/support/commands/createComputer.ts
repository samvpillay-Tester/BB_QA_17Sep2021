import { Computer } from '../domain/computer'
import { computerPOM } from '../page-objects/computer';
import { computersPOM } from '../page-objects/computers';

Cypress.Commands.add('popNewComputer', (computer: Computer) => { 
    cy.get(computersPOM.addBtn).click();

    cy.get(computerPOM.nameTxt).type(computer.name);
    cy.get(computerPOM.introducedTxt).type(computer.introduced);
    cy.get(computerPOM.discontinuedTxt).type(computer.discontinued);

    cy.get(computerPOM.companyDdl).select(computer.company);
});

Cypress.Commands.add('submitNewComputer', () => { 
    cy.get('form').submit();
});

Cypress.Commands.add('clearNewComputer', () => { 
    cy.get(computerPOM.cancel).click();
});

Cypress.Commands.add('checkNewComputerValidation', (computer: Computer) => { 
    cy.get(computersPOM.addBtn).click();

    checkForValidationError();

    cy.get(computerPOM.nameTxt).type(computer.name);
    cy.get(computerPOM.introducedTxt).type('yyyy-mm-dd');
    checkForValidationError();
    cy.get(computerPOM.introducedTxt).clear();
    cy.get(computerPOM.introducedTxt).type(computer.introduced);

    cy.get(computerPOM.discontinuedTxt).type('yyyy-mm-dd');
    checkForValidationError();
});

function checkForValidationError() {
    cy.get('form').submit();
    cy.get('.error');    
} 