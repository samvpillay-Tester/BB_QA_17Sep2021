Cypress.Commands.add('deleteComputer', () => { 
        // ToDo add Delete selector in UI ?
        cy.contains('Delete this computer').click();
});
