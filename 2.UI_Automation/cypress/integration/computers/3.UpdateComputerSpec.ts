/// <reference types="cypress" />
import {} from '../../support/api/create';
import {} from '../../support/commands/computers';
import {} from '../../support/commands/updateComputer';
import { Computer } from '../../support/domain/computer';
import { pageNameEnum } from '../../support/enums/pageNameEnum';

describe('Computers CRUD: Update computer entries', function() {

    beforeEach(() => {
        cy.visit(pageNameEnum.computers)
    });
    

    it('Can update computer', () => {
        // Arrange
        const computer = new Computer();
        cy.requestNewComputer(computer);

        cy.searchComputers(computer.name);
        cy.openComputerByName(computer.name);

        const edittedComputer = new Computer(`editted_${Date.now()}`)

        // Act
        cy.updateComputer(edittedComputer);

        // Assert
        cy.searchComputers(edittedComputer.name);
        
        cy.getSearchResultsTotal().then((totalItems) => {
            expect(totalItems).to.equal('1');
        });
        
        cy.openComputerByName(edittedComputer.name);
        cy.assertOnComputerValues(edittedComputer);
    });
})