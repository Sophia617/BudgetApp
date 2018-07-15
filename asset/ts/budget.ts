class Budget {
    
    //Instance Variables Field
    displayBudget: IDiplay;
    
    private _totalIncome: number;
    private _totalExpense: number;
    private _totalBudget: number;

    
    //construction
    constructor(){
        this.displayBudget = new DisplayBudget();
        this._totalIncome =0;
        this._totalExpense =0;
        this._totalBudget =0;
    }
    
    //Methods to calculate budget
    public updateIncome(incomeValue: number): void {
       this._totalIncome += incomeValue;
       this._totalBudget +=incomeValue;
       console.log (`Total Income: + ${this._totalIncome} Total Budget ${this._totalBudget} `);
    }
    
    public updateExpense(expenseValue: number): void {
        this._totalExpense += expenseValue;
        this._totalBudget -= expenseValue;
        console.log(`Total Expense: - ${this._totalExpense} Total Budget ${this._totalBudget}`)
    }
    
    
    //Display the data on page
    public display(): void {
        
    }
}