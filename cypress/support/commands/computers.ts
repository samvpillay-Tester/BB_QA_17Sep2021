import { computersPOM } from '../page-objects/computers'

Cypress.Commands.add('searchComputers', (searchText: string) => { 
    cy.get(computersPOM.searchboxTxt).type(searchText);

    cy.get(computersPOM.searchsubmitBtn).click();
});

Cypress.Commands.add('searchResultsCount', (count: number) => { 
    // ToDo - add better logic here
    cy.contains('Displaying ');
    cy.contains(`of ${count}`);
});

Cypress.Commands.add('searchNoResults', () => { 
    cy.contains('Nothing to display');
});

Cypress.Commands.add('openComputerByName', (name: string) => { 
    // Need better selectors
    cy.contains(name).click();
});
