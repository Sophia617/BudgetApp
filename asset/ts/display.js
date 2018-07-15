var DisplayIncome = /** @class */ (function () {
    function DisplayIncome() {
    }
    DisplayIncome.prototype.display = function () {
    };
    return DisplayIncome;
}());
var DisplayExpense = /** @class */ (function () {
    function DisplayExpense() {
    }
    DisplayExpense.prototype.display = function () {
    };
    return DisplayExpense;
}());
var DisplayBudget = /** @class */ (function () {
    function DisplayBudget(budget) {
        this.budget = budget;
    }
    DisplayBudget.prototype.display = function () {
        // Get Total Amount of Value From the Budget
        var totalBudget = this.budget.getTotalBudget();
        var totalIncome = this.budget.getTotalIncome();
        var totalExpense = this.budget.getTotalExpense();
        var expPercent = this.budget.getExpensePercent();
        // Display Total Budget Field
        if (totalBudget >= 0) {
            totalBudgetField.innerHTML = "+ " + (totalBudget).toFixed(2);
        }
        else {
            totalBudgetField.innerHTML = "" + (totalBudget).toFixed(2);
        }
        // Display Total Income and Expense Field
        totalIncomeField.innerHTML = "+ " + (totalIncome).toFixed(2);
        totalExpenseField.innerHTML = "- " + (totalExpense).toFixed(2);
        totalExpensePercentField.innerHTML = expPercent + "%";
    };
    return DisplayBudget;
}());
