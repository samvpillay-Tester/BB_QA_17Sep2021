/// <reference types="cypress" />
import {} from '../../support/commands/computers';
import {} from '../../support/commands/createComputer';
import {} from '../../support/commands/readComputer';
import { Computer } from '../../support/domain/computer';
import { pageNameEnum } from '../../support/enums/pageNameEnum';

describe('Computers CRUD: Create computer entries', function() {

    beforeEach(() => {
        cy.visit(pageNameEnum.computers);
    });

    it('Cannot create computer without all the required data', () => {
        const computer = new Computer();
        cy.checkNewComputerValidation(computer);
    });

    it('Can popualte new computer and clear computer without creating one', () => {
        const computer = new Computer();
        cy.popNewComputer(computer);

        cy.clearNewComputer();

        cy.searchComputers(computer.name);
        cy.searchNoResults();
    });

    it('Can create new computer', () => {
        // Arrange
        const computer = new Computer();
        cy.popNewComputer(computer);
        cy.submitNewComputer();

        // 2 Acts, due to lack of data setup via API
        cy.searchComputers(computer.name);

        cy.getSearchResultsTotal().then((totalItems) => {
            expect(totalItems).to.equal('1');
        });
        
        cy.openComputerByName(computer.name);

        // Assert
        cy.assertOnComputerValues(computer);
    });
})