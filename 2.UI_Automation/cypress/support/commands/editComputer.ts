import { Computer } from '../domain/computer'
import { computerPOM } from '../page-objects/computer';

Cypress.Commands.add('computerValuesCorrect', (computer: Computer) => { 
    // odd, the text is not appearing in the DOM?
    // cy.get(computerPOM.nameTxt).should('have.text',computer.name);

    cy.get(computerPOM.nameTxt)
    .invoke('val')
    .then(name => expect(name).to.equal(computer.name));

    cy.get(computerPOM.introducedTxt)
    .invoke('val')
    .then(introduced => expect(introduced).to.equal(computer.introduced));

    cy.get(computerPOM.introducedTxt)
    .invoke('val')
    .then(discontinued => expect(discontinued).to.equal(computer.discontinued));
});

Cypress.Commands.add('editComputer', (computer: Computer) => { 
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