var Controller = /** @class */ (function () {
    function Controller() {
        this.incomeArray = new IncomeArray();
        this.expenseArray = new ExpenseArray();
        this.budget = new Budget();
        this.displayBudget = new DisplayBudget(this.budget);
    }
    // Add Item to the Array List
    Controller.prototype.addItem = function (type, description, value) {
        // Pass the Item to Income List
        if (type === 'inc') {
            this.incomeArray.addItem(description, value);
        }
        // Pass the Item to Expense List
        if (type === 'exp') {
            this.expenseArray.addItem(description, value);
        }
        // Notify Budget For change in ItemArray
        this.notifyBudgetForAdding(type, value);
    };
    // Remove Item in the Array List
    Controller.prototype.removeItem = function (item) {
        // If x selected in the income field
        this.incomeArray.removeItem(item);
        //if - add expense Array
        this.expenseArray.removeItem(item);
    };
    // Notify Budget Object for change
    Controller.prototype.notifyBudgetForAdding = function (type, value) {
        // Update Total Income in the Budget Object
        if (type === 'inc') {
            this.budget.updateTotalIncome(value);
        }
        // Update TotalExpense in the Budget Object
        if (type === 'exp') {
            this.budget.updateTotalExpense(value);
        }
        this.displayBudgetField();
    };
    // Display on UI
    Controller.prototype.displayBudgetField = function () {
        this.displayBudget.display();
    };
    return Controller;
}());
