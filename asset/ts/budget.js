var Budget = /** @class */ (function () {
    // Constructor
    function Budget() {
        this._totalIncome = 0;
        this._totalExpense = 0;
        this._totalBudget = 0;
    }
    // Methods to calculate budget
    Budget.prototype.updateTotalIncome = function (incomeValue) {
        this._totalIncome += incomeValue;
        this._totalBudget += incomeValue;
        this.calcExpensePercentage();
    };
    Budget.prototype.updateTotalExpense = function (expenseValue) {
        this._totalExpense += expenseValue;
        this._totalBudget -= expenseValue;
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
