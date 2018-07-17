class Budget {
    
    // Instance Variables Field
    private _totalIncome: number;
    private _totalExpense: number;
    private _totalBudget: number;
    private _expensePercentage: number;

    
    // Constructor
    constructor(){
        this._totalIncome =0;
        this._totalExpense =0;
        this._totalBudget =0;
    }
    
    // Methods to calculate budget
    public updateTotalIncome(type: string, incomeValue: number): void {
        
        if (type === 'inc') {
            console.log('i am adding ITem to budget');
            this._totalIncome += incomeValue;
            this._totalBudget += incomeValue;
        }
        
        if (type === 'income') {
            console.log ('im removing my income item in budget');
            this._totalIncome -= incomeValue;
            this._totalBudget -= incomeValue;
        }
       this.calcExpensePercentage();
    }
    
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
    
    public calcExpensePercentage(){
        
        if ( this._totalExpense!=0) {
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