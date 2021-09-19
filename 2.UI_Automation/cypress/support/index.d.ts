import { Computer } from '../support/domain/computer';

declare namespace Cypress {
    interface Chainable<Subject> {
        //// Computers
        // Read
        searchComputers({searchText: string}): Chainable<Subject>;
        searchNoResults(): Chainable<Subject>;
        getSearchResultsTotal(): Chainable<Subject>;
        openComputerByName({name: string}): Chainable<Subject>;
        
        //// Computer
        // Create
        checkNewComputerValidation({computer: Computer}): Chainable<Subject>;
        popNewComputer({computer: Computer}): Chainable<Subject>;
        submitNewComputer(): Chainable<Subject>;
        clearNewComputer(): Chainable<Subject>;

        // Create API request
        requestNewComputer({computer: Computer}): Chainable<Subject>;
        mapCompanyNameToId({companyName: string}): Chainable<Subject>;


        // Read
        assertOnComputerValues({computer: Computer}): Chainable<Subject>;

        // Update
        updateComputer({computer: Computer}): Chainable<Subject>;

        // Delete
        deleteComputer(): Chainable<Subject>;
        deleteFirstNComputers({deleteCount: number}): Chainable<Subject>;
    }
  }