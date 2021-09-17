import { companyEnum } from '../enums/companyEnum'

export class Computer {

    constructor(
        public name: string = `DefaultName_${Date.now()}`,
        public introduced: string = new Date().toISOString().slice(0, 10),
        public discontinued: string = new Date().toISOString().slice(0, 10),
        public company: string = companyEnum.AppleInc
    ) { }    
}