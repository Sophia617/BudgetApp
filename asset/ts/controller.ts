class Controller {
    
    incomeArray: IItemList;
    expenseArray: IItemList;
    budget: Budget;
    displayBudget: IDiplay;
    displayIncome: IDiplay;
    displayExpense: IDiplay;
    
    constructor(){
        this.incomeArray = new IncomeArray();
        this.expenseArray = new ExpenseArray();
        this.budget = new Budget();
        this.displayBudget = new DisplayBudget(this.budget);
        this.displayIncome = new DisplayIncome(this.incomeArray);
        this.displayExpense = new DisplayExpense(this.expenseArray);
    }
    
    // Add Item to the Array List
    public addItem(type: string, description: string, value: number){
        // Pass the Item to Income List
        if (type === 'inc') {
            this.incomeArray.addItem(description, value);
        }
        // Pass the Item to Expense List
        if (type === 'exp') {
            this.expenseArray.addItem(description, value);
        }
        // Notify Budget For change in ItemArray
        this.updateBudget(type, value);
    }
    
    // Remove Item in the Array List
    public removeItem (item: IItem) {
        
        // If x selected in the income field
        this.incomeArray.removeItem(item);
    
        //if - add expense Array
        this.expenseArray.removeItem(item);
    }
    
    // Notify Budget Object for change
    public updateBudget (type:string, value: number){
        // Update Total Income in the Budget Object
        if (type === 'inc') {
           this.budget.updateTotalIncome(value);
           this.displayIncomeField();
        }
        // Update TotalExpense in the Budget Object
        if (type === 'exp') {
            this.budget.updateTotalExpense(value);
            this.displayExpenseField();
        }
        this.displayBudgetField();
    }
    
    // Display Budget Field on UI
    public displayBudgetField(){
         this.displayBudget.display();
    }
    
    // Display Income Field on UI
    public displayIncomeField() : void {
        this.displayIncome.display();
    }
    
    // Display Expense Field on UI
    public displayExpenseField(): void {
        this.displayExpense.display();
    }
}