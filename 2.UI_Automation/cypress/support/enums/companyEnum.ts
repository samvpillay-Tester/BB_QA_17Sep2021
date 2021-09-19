import { Promise } from  'es6-promise'

// ToDo - This data should be abstracted into a fixture or other config
export enum companyEnum {

    AppleInc = "Apple Inc.",
    ThinkingMachines = "Thinking Machines"
            
                
}

// ToDo - This data should be abstracted into a fixture or other config
Cypress.Commands.add('mapCompanyNameToId', (companyName: string) => { 
    switch(companyName) { 
        case companyEnum.AppleInc: { 
            return new Promise<number>((resolve) => {
                resolve(1);
            });
         } 
         case companyEnum.ThinkingMachines: { 
            return new Promise<number>((resolve) => {
                resolve(2);
            });
         }  
        default: { 
           return new Error(`Company Id not mapped for ${companyName}`);
        } 
     };
});
