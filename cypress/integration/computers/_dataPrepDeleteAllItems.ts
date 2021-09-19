/// <reference types="cypress" />
import {} from '../../support/commands/computers';
import { pageNameEnum } from '../../support/enums/pageNameEnum';

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