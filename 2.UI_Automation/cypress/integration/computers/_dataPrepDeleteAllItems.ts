/// <reference types="cypress" />
import {} from '../../support/commands/computers';
import { pageNameEnum } from '../../support/enums/pageNameEnum';

// This is probably either an abuse of the UI delete functionality, 
// or should be handled in another way.
// Presuming this pre-run clean up is even allowable
describe('_Computers CRUD: Data Setup', function() {

    beforeEach(() => {
        cy.visit(pageNameEnum.computers)
    });

    it('Wipe all the existing data', () => {
        cy.getSearchResultsTotal().then((totalItems) => {
            cy.deleteFirstNComputers(totalItems);
        });     
    });
})