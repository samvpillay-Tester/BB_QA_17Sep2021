/// <reference types="cypress" />
import {} from '../../support/commands/computers';
import {} from '../../support/commands/createComputer';
import {} from '../../support/commands/editComputer';
import { Computer } from '../../support/domain/computer';
import { pageNameEnum } from '../../support/enums/pageNameEnum';

describe('Computers CRUD: Update computer entries', function() {

    beforeEach(() => {
        cy.visit(pageNameEnum.computers)
    });
    

    it('Can update computer', () => {
        // Arrange
        const computer = new Computer();
        cy.popNewComputer(computer);
        cy.submitNewComputer();

        cy.searchComputers(computer.name);
        cy.searchResultsCount(1);
        cy.openComputerByName(computer.name);

        const edittedComputer = new Computer(`editted_${Date.now()}`)

        // Act
        cy.editComputer(edittedComputer);

        // Assert
        cy.searchComputers(edittedComputer.name);
        cy.searchResultsCount(1);
        cy.openComputerByName(edittedComputer.name);
        cy.computerValuesCorrect(edittedComputer);
    });
})