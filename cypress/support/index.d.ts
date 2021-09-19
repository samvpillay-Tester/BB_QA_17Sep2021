import { Computer } from '../support/domain/computer';

declare namespace Cypress {
    interface Chainable<Subject> {
        searchComputers({searchText: string}): Chainable<Subject>;
        searchNoResults(): Chainable<Subject>;
        getSearchResultsTotal(): Chainable<Subject>;
        openComputerByName({name: string}): Chainable<Subject>;

        popNewComputer({computer: Computer}): Chainable<Subject>;
        submitNewComputer(): Chainable<Subject>;
        clearNewComputer(): Chainable<Subject>;

        checkNewComputerValidation({computer: Computer}): Chainable<Subject>;
        computerValuesCorrect({computer: Computer}): Chainable<Subject>;

        editComputer({computer: Computer}): Chainable<Subject>;

        deleteComputer(): Chainable<Subject>;
        deleteFirstNComputers({deleteCount: number}): Chainable<Subject>;
    }
  }