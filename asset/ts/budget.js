var Budget = /** @class */ (function () {
    // Constructor
    function Budget() {
        this._totalIncome = 0;
        this._totalExpense = 0;
        this._totalBudget = 0;
    }
    // Methods to calculate budget
    Budget.prototype.updateTotalIncome = function (type, incomeValue) {
        if (type === 'inc') {
            console.log('i am adding ITem to budget');
            this._totalIncome += incomeValue;
            this._totalBudget += incomeValue;
        }
        if (type === 'income') {
            console.log('im removing my income item in budget');
            this._totalIncome -= incomeValue;
            this._totalBudget -= incomeValue;
        }
        this.calcExpensePercentage();
    };
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
    Budget.prototype.calcExpensePercentage = function () {
        if (this._totalExpense != 0) {
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
