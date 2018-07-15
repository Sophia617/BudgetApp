class Controller {
    
    incomeArray: IItemList;
    expenseArray: IItemList;
    budget: Budget;
    
    constructor(){
        this.incomeArray = new IncomeArray();
        this.expenseArray = new ExpenseArray();
        this.budget = new Budget();
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
        if (type === 'inc') {
           this.budget.updateIncome(value);
        }
        
        if (type === 'exp') {
            this.budget.updateExpense(value);
        }
    }
    

}