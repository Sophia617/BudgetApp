var Budget = /** @class */ (function () {
    //construction
    function Budget() {
        this.displayBudget = new DisplayBudget();
        this._totalIncome = 0;
        this._totalExpense = 0;
        this._totalBudget = 0;
    }
    //Methods to calculate budget
    Budget.prototype.updateIncome = function (incomeValue) {
        this._totalIncome += incomeValue;
        this._totalBudget += incomeValue;
        console.log("Total Income: + " + this._totalIncome + " Total Budget " + this._totalBudget + " ");
    };
    Budget.prototype.updateExpense = function (expenseValue) {
        this._totalExpense += expenseValue;
        this._totalBudget -= expenseValue;
        console.log("Total Expense: - " + this._totalExpense + " Total Budget " + this._totalBudget);
    };
    //Display the data on page
    Budget.prototype.display = function () {
    };
    return Budget;
}());
