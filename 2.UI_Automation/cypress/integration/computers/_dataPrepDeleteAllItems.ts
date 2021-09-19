/// <reference types="cypress" />
import {} from '../../support/commands/computers';
import { computersPOM } from '../../support/page-objects/computers'
import { pageNameEnum } from '../../support/enums/pageNameEnum';

// This is probably either an abuse of the UI delete functionality, 
// or should be handled in another way.
// Presuming this pre-run clean up is even allowable
// This is also not a consistent way of deleting all items 
// (e.g. long names affect this looping)
describe('_Computers CRUD: Data Setup', function() {

    beforeEach(() => {
        cy.visit(pageNameEnum.computers)
    });

    it('Wipe all the existing data', () => {
        cy.window().then((win) => {
            const $prevBtn = win.document.querySelector(computersPOM.paginationPrevBtn);
            
            if ($prevBtn !== null) {
                cy.getSearchResultsTotal().then((totalItems) => {
                    cy.deleteFirstNComputers(totalItems);
                });
            } else {
                // no data was found, do nothing but log it
                console.log('Warning, no data found on attempt to wipe data!');
            }
        });


        // Assert
        cy.searchNoResults();

    });
})