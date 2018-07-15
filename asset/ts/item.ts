interface IItem {
    description: string;
    value: number;
}

class IncomeItem implements IItem{
    
    description: string;
    value: number;
    
    constructor (description: string, value: number){
        this.description = description;
        this.value = value;
    }
}

class ExpenseItem implements IItem {
    
    description: string;
    value: number;
    
    constructor(description: string, value: number){
        this.description = description;
        this.value = value;
    }
}