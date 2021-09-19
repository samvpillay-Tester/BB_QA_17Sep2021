/// <reference types="cypress" />
import {} from '../../support/api/create';
import {} from '../../support/commands/computers';
import {} from '../../support/commands/readComputer';
import { Computer } from '../../support/domain/computer';
import { pageNameEnum } from '../../support/enums/pageNameEnum';

describe('Computers CRUD: Read computer entries', function() {

    beforeEach(() => {
        cy.visit(pageNameEnum.computers);
    });

    it('Can read new computer', () => {
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