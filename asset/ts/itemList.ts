interface IItemList {
    addItem (description: string, value: number);
    removeItem (item: IItem);
    notifyDisplay();
}

class IncomeArray implements IItemList {
    
    // Instance Variable Field
    private incomeList: Array<IItem> =[];
    private displayIncome = new DisplayIncome();
    
    // Create Income Item and push to the Income Array
    public addItem(description: string, value: number):void {
        let newIncomeItem = new IncomeItem(description,value);
        let i = this.incomeList.length;
        this.incomeList.push(newIncomeItem);
        console.log(this.incomeList[i]);
    }
    
    // remove Item to the Expense Array
    public removeItem(item: IItem): void {
        
    }
    
    // Display Income Item
    public notifyDisplay() : void {
        //let id = this.incomeList.length;  // this id should be used in display.. DOM ID not the Item ID itself
        this.displayIncome.display();
    }
}

class ExpenseArray implements IItemList {
    
    // Instance Variable Field
    private expenseList: Array<IItem> = [];
    private displayExpense = new DisplayExpense();
    
    // Create Expense Item and push it to the Expense Array
    public addItem(description, value):void {
        let newExpenseItem = new ExpenseItem(description, value);
        let i = this.expenseList.length;
        this.expenseList.push(newExpenseItem);
        console.log(this.expenseList[i]);
    }
    
    
    // remove Item to the Expense Array
    public removeItem(item: IItem): void {
    
    }

    
    // Display Expense Item
    public notifyDisplay() {
        this.displayExpense.display();
    }
}