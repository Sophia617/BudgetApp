var Budget = /** @class */ (function () {
    // Constructor
    function Budget() {
        this._totalIncome = 0;
        this._totalExpense = 0;
        this._totalBudget = 0;
    }
    // Calculate Total Income
    Budget.prototype.updateTotalIncome = function (type, incomeValue) {
        if (type === 'inc') {
            this._totalIncome += incomeValue;
            this._totalBudget += incomeValue;
        }
        if (type === 'income') {
            this._totalIncome -= incomeValue;
            this._totalBudget -= incomeValue;
        }
        this.calcExpensePercentage();
    };
    // Calculate Total Expense
    Budget.prototype.updateTotalExpense = function (type, expenseValue) {
        if (type === 'exp') {
            this._totalExpense += expenseValue;
            this._totalBudget -= expenseValue;
        }
        if (type === 'expense') {
            this._totalExpense -= expenseValue;
            this._totalBudget += expenseValue;
        }
        this.calcExpensePercentage();
    };
    // Calculate Percentage of Total Expense
    Budget.prototype.calcExpensePercentage = function () {
        if (this._totalIncome > 0 && this._totalIncome >= this._totalExpense) {
            this._expensePercentage = (this._totalExpense / this._totalIncome) * 100;
        }
        else {
            this._expensePercentage = 0;
        }
    };
    // Getter
    Budget.prototype.getTotalIncome = function () {
        return this._totalIncome;
    };
    Budget.prototype.getTotalExpense = function () {
        return this._totalExpense;
    };
    Budget.prototype.getTotalBudget = function () {
        return this._totalBudget;
    };
    Budget.prototype.getExpensePercent = function () {
        return this._expensePercentage;
    };
    return Budget;
}());
