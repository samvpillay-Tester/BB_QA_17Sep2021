import { computersPOM } from '../page-objects/computers'

Cypress.Commands.add('searchComputers', (searchText: string) => { 
    cy.get(computersPOM.searchboxTxt).type(searchText);

    cy.get(computersPOM.searchsubmitBtn).click();
});

Cypress.Commands.add('getSearchResultsTotal', () => { 
    cy.get(computersPOM.paginationLbl).then(function($elem) {
        const fullTxt = $elem.text();
        const total = fullTxt.split(" ").slice(-1)[0];
        return total;
   }); 
});

Cypress.Commands.add('searchNoResults', () => { 
    cy.contains('Nothing to display');
});

Cypress.Commands.add('openComputerByName', (name: string) => { 
    // Need better selectors
    cy.contains(name).click();
});
