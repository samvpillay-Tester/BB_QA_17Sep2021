import { computersPOM } from '../page-objects/computers';

Cypress.Commands.add('deleteComputer', () => { 
        // ToDo add Delete selector in UI ?
        cy.contains('Delete this computer').click();
});

Cypress.Commands.add('deleteFirstNComputers', (deleteCount: number) => { 
        
        for (let i = 0; i < deleteCount; i++) {
                cy.get(computersPOM.firstItem).click();
                cy.deleteComputer();
        }
});
