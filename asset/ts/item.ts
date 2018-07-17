interface IItem {
    id: number;
    description: string;
    value: number;
}

class IncomeItem implements IItem{
    id: number;
    description: string;
    value: number;
    
    constructor (id: number, description: string, value: number){
        this.id =id;
        this.description = description;
        this.value = value;
    }
}

class ExpenseItem implements IItem {
    id: number;
    description: string;
    value: number;
    
    constructor(id: number, description: string, value: number){
        this.id = id;
        this.description = description;
        this.value = value;
    }
}