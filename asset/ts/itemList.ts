interface IItemList {
    addItem (description: string, value: number);
    removeItem (item: IItem);
    getID();
    getDescription();
    getValue();
}

class IncomeArray implements IItemList {
    
    // Instance Variable Field
    private _incomeList: Array<IItem> =[];
    private _id: number; // this id should be used in display.. DOM ID not the Item ID itself
    
    // Create Income Item and push to the Income Array
    public addItem(description: string, value: number):void {
        let newIncomeItem = new IncomeItem(description,value);
        this._id = this._incomeList.length;
        this._incomeList.push(newIncomeItem);
    }
    
    // Remove Item to the Expense Array
    public removeItem(item: IItem): void {
    
    }
    
    // Getter
    public getID() {
        return this._id;
    }
    
    public getDescription() {
        return this._incomeList[this._id].description;
    }
    
    public getValue() {
        return this._incomeList[this._id].value;
    }
}

class ExpenseArray implements IItemList {
    
    // Instance Variable Field
    private _expenseList: Array<IItem> = [];
    private _id: number; // this id should be used in display.. DOM ID not the Item ID itself
    
    // Create Expense Item and push it to the Expense Array
    public addItem(description, value):void {
        let newExpenseItem = new ExpenseItem(description, value);
        this._id = this._expenseList.length;
        this._expenseList.push(newExpenseItem);
    }
    
    // remove Item to the Expense Array
    public removeItem(item: IItem): void {
    
    }
    
    //Getter
    public getID() {
        return this._id;
    }
    
    public getDescription() {
        return this._expenseList[this._id].description;
    }
    
    public getValue() {
        return this._expenseList[this._id].value;
    }
}