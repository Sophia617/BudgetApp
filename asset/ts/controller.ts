class Controller {
    
    incomeArray: IItemList;
    expenseArray: IItemList;
    budget: Budget;
    displayBudget: IDiplay;
    
    constructor(){
        this.incomeArray = new IncomeArray();
        this.expenseArray = new ExpenseArray();
        this.budget = new Budget();
        this.displayBudget = new DisplayBudget(this.budget);
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
        this.notifyBudgetForAdding(type, value);
    }
    
    // Remove Item in the Array List
    public removeItem (item: IItem) {
        
        // If x selected in the income field
        this.incomeArray.removeItem(item);
    
        //if - add expense Array
        this.expenseArray.removeItem(item);
    }
    
    // Notify Budget Object for change
    public notifyBudgetForAdding (type:string, value: number){
        // Update Total Income in the Budget Object
        if (type === 'inc') {
           this.budget.updateTotalIncome(value);
        }
        // Update TotalExpense in the Budget Object
        if (type === 'exp') {
            this.budget.updateTotalExpense(value);
        }
        this.displayBudgetField();
    }
    
    // Display on UI
    public displayBudgetField(){
         this.displayBudget.display();
    }
    
}