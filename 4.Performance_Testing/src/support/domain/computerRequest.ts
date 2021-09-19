export class ComputerRequest {

    constructor(
        public name: string = `BulkTest_${Date.now()}`,
        public introduced: string = new Date().toISOString().slice(0, 10),
        public discontinued: string = new Date().toISOString().slice(0, 10),
        public company: number = 1 // Todo - rework \ mapped to first entry
    ) { }    
}