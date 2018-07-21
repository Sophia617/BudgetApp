// Display for Single Income Item
var DisplayIncomeItem = /** @class */ (function () {
    function DisplayIncomeItem(incomeArray) {
        this._incomeArray = incomeArray;
    }
    // Display Income Items on UI
    DisplayIncomeItem.prototype.display = function () {
        // Get Income Item
        var id = this._incomeArray.getID();
        var description = this._incomeArray.getDescription();
        var value = this._incomeArray.getValue();
        // Display Income Item
        incomeField.insertAdjacentHTML('afterend', "\n            <div class=\"item clearfix\" id=\"income-" + id + "\">\n                <div class=\"item__description\">" + description + "</div>\n                <div class=\"right clearfix\">\n                     <div class=\"item__value\">+ " + value + "</div>\n                     <div class=\"item__delete\">\n                            <button class=\"item__delete--btn\"><i class=\"fas fa-minus-circle\"></i></button>\n                      </div>\n                    </div>\n             </div>\n        ");
    };
    // Remove Income Items on UI
    DisplayIncomeItem.prototype.removeDisplay = function (idElement) {
        var elem = document.getElementById("" + idElement);
        elem.remove();
    };
    return DisplayIncomeItem;
}());
// Display for Single Expense Item
var DisplayExpenseItem = /** @class */ (function () {
    function DisplayExpenseItem(expenseArray) {
        this._expenseArray = expenseArray;
    }
    // Display Expense Items on UI
    DisplayExpenseItem.prototype.display = function () {
        // Get Expense Item
        var id = this._expenseArray.getID();
        var description = this._expenseArray.getDescription();
        var value = this._expenseArray.getValue();
        // Display Expense Item
        expenseField.insertAdjacentHTML('afterend', "\n            <div class=\"item clearfix\" id=\"expense-" + id + "\">\n                <div class=\"item__description\">" + description + "</div>\n                <div class=\"right clearfix\">\n                     <div class=\"item__value\">- " + value + "</div>\n                     <div class=\"item__delete\">\n                            <button class=\"item__delete--btn\"><i class=\"fas fa-minus-circle\"></i></button>\n                      </div>\n                    </div>\n             </div>\n        ");
    };
    // Remove Expense Items on UI
    DisplayExpenseItem.prototype.removeDisplay = function (idElement) {
        var elem = document.getElementById("" + idElement);
        elem.remove();
    };
    return DisplayExpenseItem;
}());
// Display for Date (Month and Year)
var DisplayDate = /** @class */ (function () {
    function DisplayDate() {
        // Month Array
        this._monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
    DisplayDate.prototype.display = function () {
        // Get Month and Year
        var currentDate = new Date();
        var month = currentDate.getMonth();
        var year = currentDate.getUTCFullYear();
        // Display month
        currentMonthYear.innerText = this._monthNames[month] + " " + year;
    };
    DisplayDate.prototype.removeDisplay = function (idElement) { };
    return DisplayDate;
}());
// Display for Budget
var DisplayBudget = /** @class */ (function () {
    function DisplayBudget(budget) {
        this._budget = budget;
    }
    DisplayBudget.prototype.display = function () {
        // Get Total Amount of Value From the Budget
        var totalBudget = this._budget.getTotalBudget();
        var totalIncome = this._budget.getTotalIncome();
        var totalExpense = this._budget.getTotalExpense();
        var expPercent = this._budget.getExpensePercent();
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
        totalExpensePercentField.innerHTML = Math.round(expPercent) + "%";
    };
    DisplayBudget.prototype.removeDisplay = function (idElement) { };
    return DisplayBudget;
}());
