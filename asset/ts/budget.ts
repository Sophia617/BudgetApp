class Budget {
    
    // Instance Variables Field
    private _totalIncome: number;
    private _totalExpense: number;
    private _totalBudget: number;
    private _expensePercentage: number;

    
    // Constructor
    constructor(){
        this._totalIncome = 0;
        this._totalExpense = 0;
        this._totalBudget = 0;
    }
    
    // Calculate Total Income
    public updateTotalIncome(type: string, incomeValue: number): void {
        
        if (type === 'inc') {
            this._totalIncome += incomeValue;
            this._totalBudget += incomeValue;
        }
        
        if (type === 'income') {
            this._totalIncome -= incomeValue;
            this._totalBudget -= incomeValue;
        }
       this.calcExpensePercentage();
    }
    
    // Calculate Total Expense
    public updateTotalExpense(type: string, expenseValue: number): void {
        if (type === 'exp'){
            this._totalExpense += expenseValue;
            this._totalBudget -= expenseValue;
        }
        
        if (type === 'expense') {
            this._totalExpense -= expenseValue;
            this._totalBudget += expenseValue;
        }
        this.calcExpensePercentage();
    }
    
    // Calculate Percentage of Total Expense
    public calcExpensePercentage(){
        if (this._totalIncome >0 && this._totalIncome >= this._totalExpense) {
            this._expensePercentage= (this._totalExpense/this._totalIncome)*100;
        }
        else {
            this._expensePercentage = 0;
        }
    }
    
    // Getter
    public getTotalIncome (){
        return this._totalIncome;
    }
    public getTotalExpense (){
        return this._totalExpense;
    }
    public getTotalBudget (){
        return this._totalBudget;
    }
    public getExpensePercent (){
        return this._expensePercentage;
    }
}