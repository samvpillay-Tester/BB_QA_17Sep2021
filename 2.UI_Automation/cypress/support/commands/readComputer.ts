import { Computer } from '../domain/computer'
import { computerPOM } from '../page-objects/computer';

Cypress.Commands.add('assertOnComputerValues', (computer: Computer) => { 
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
