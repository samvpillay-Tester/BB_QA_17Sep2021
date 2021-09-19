/// <reference types="cypress" />
import {} from '../../support/api/create';
import {} from '../../support/commands/computers';
import {} from '../../support/commands/deleteComputer';
import { Computer } from '../../support/domain/computer';
import { pageNameEnum } from '../../support/enums/pageNameEnum';

describe('Computers CRUD: Delete computer entries', function() {

    beforeEach(() => {
        cy.visit(pageNameEnum.computers)
    });
    

    it('Can delete computer', () => {
        // Arrange
        const computer = new Computer();
        cy.requestNewComputer(computer);

        cy.searchComputers(computer.name);
        
        cy.getSearchResultsTotal().then((totalItems) => {
            expect(totalItems).to.equal('1');
        });
        
        cy.openComputerByName(computer.name);

        // Act
        cy.deleteComputer();
        
        // Assert
        cy.searchComputers(computer.name);
        cy.searchNoResults();        
    });
})