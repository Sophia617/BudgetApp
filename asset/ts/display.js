var DisplayIncome = /** @class */ (function () {
    function DisplayIncome(incomeArray) {
        this.incomeArray = incomeArray;
    }
    DisplayIncome.prototype.display = function () {
        // Get Income Item
        var id = this.incomeArray.getID();
        var description = this.incomeArray.getDescription();
        var value = this.incomeArray.getValue();
        // Display Income Item
        incomeField.insertAdjacentHTML('afterend', "\n            <div class=\"item clearfix\" id=\"income-" + id + "\">\n                <div class=\"item__description\">" + description + "</div>\n                <div class=\"right clearfix\">\n                     <div class=\"item__value\">+ " + value + "</div>\n                     <div class=\"item__delete\">\n                            <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button>\n                      </div>\n                    </div>\n             </div>\n        ");
    };
    return DisplayIncome;
}());
var DisplayExpense = /** @class */ (function () {
    function DisplayExpense(expenseArray) {
        this.expenseArray = expenseArray;
    }
    DisplayExpense.prototype.display = function () {
        // Get Expense Item
        var id = this.expenseArray.getID();
        var description = this.expenseArray.getDescription();
        var value = this.expenseArray.getValue();
        // Display Expense Item
        expenseField.insertAdjacentHTML('afterend', "\n            <div class=\"item clearfix\" id=\"expense-" + id + "\">\n                <div class=\"item__description\">" + description + "</div>\n                <div class=\"right clearfix\">\n                     <div class=\"item__value\">- " + value + "</div>\n                     <div class=\"item__delete\">\n                            <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button>\n                      </div>\n                    </div>\n             </div>\n        ");
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
        totalExpensePercentField.innerHTML = (expPercent).toFixed(1) + "%";
    };
    return DisplayBudget;
}());
