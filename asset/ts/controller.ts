class Controller {
    
    incomeArray: IItemList;
    expenseArray: IItemList;
    budget: Budget;
    displayBudget: IDiplay;
    displayIncomeItem: IDiplay;
    displayExpenseItem: IDiplay;
    
    constructor(){
        this.incomeArray = new IncomeArray();
        this.expenseArray = new ExpenseArray();
        this.budget = new Budget();
        this.displayBudget = new DisplayBudget(this.budget);
        this.displayIncomeItem = new DisplayIncomeItem(this.incomeArray);
        this.displayExpenseItem = new DisplayExpenseItem(this.expenseArray);
    }
    
    /*******************************************
     *              ADD NEW ITEM
     * *****************************************/
    
    // Add Item to the Array List
    public addItem(type: string, description: string, value: number){
        // Pass the Item to Income List
        if (type === 'inc') {
            this.incomeArray.addItem(description, value);
            this.displayIncomeField();
        }
        // Pass the Item to Expense List
        if (type === 'exp') {
            this.expenseArray.addItem(description, value);
            this.displayExpenseField();
        }
        // Notify Budget For change in ItemArray
        this.updateBudget(type, value);
    }
    
    /*******************************************
     *            REMOVE ITEMS
     * *****************************************/
    
    // Remove Item in the Array List
    public removeItem (idElement: string) {
        let arrayOfIdEle = idElement.split('-');
        let type = arrayOfIdEle[0];
        let id = parseInt(arrayOfIdEle[1]);
        
        if (type === 'income') {
            this.incomeArray.removeItem(id);
            this.displayDeleteIncomeItem(idElement);
        }
        if (type === 'expense') {
            this.expenseArray.removeItem(id);
            this.displayDeleteExpenseItem(idElement);
        }
    }
    
    /*******************************************
     *             BUDGET FIELD
     * *****************************************/
    
    // Notify Budget Object for change
    public updateBudget (type:string, value: number){
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
    
    
    /*******************************************
     *             DISPLAY (VIEW)
     * *****************************************/
    
    // Display Budget Field on UI
    public displayBudgetField(){
         this.displayBudget.display();
    }
    
    // Display Income Field on UI
    public displayIncomeField() : void {
        this.displayIncomeItem.display();
    }
    
    // Display Expense Field on UI
    public displayExpenseField(): void {
        this.displayExpenseItem.display();
    }
    
    // Remove Income Item on UI
    public displayDeleteIncomeItem(idElement: string): void {
        this.displayIncomeItem.removeDisplay(idElement);
    }
    
    // Remove Expense Item on UI
    public displayDeleteExpenseItem(idElement: string): void {
        this.displayExpenseItem.removeDisplay(idElement);
    }
}