var Controller = /** @class */ (function () {
    function Controller() {
        this.incomeArray = new IncomeArray();
        this.expenseArray = new ExpenseArray();
        this.budget = new Budget();
        this.displayBudget = new DisplayBudget(this.budget);
        this.displayIncomeItem = new DisplayIncomeItem(this.incomeArray);
        this.displayExpenseItem = new DisplayExpenseItem(this.expenseArray);
    }
    /*******************************************
     *              ADD NEW ITEM
     * *****************************************/
    // Add Item to the Array List
    Controller.prototype.addItem = function (type, description, value) {
        // Pass the Item to Income List
        if (type === 'inc') {
            this.incomeArray.addItem(description, value);
            this.displayIncomeField();
        }
        // Pass the Item to Expense List
        if (type === 'exp') {
            this.expenseArray.addItem(description, value);
            this.displayExpenseField();
        }
        // Notify Budget For change in ItemArray
        this.updateBudget(type, value);
    };
    /*******************************************
     *            REMOVE ITEMS
     * *****************************************/
    // Remove Item in the Array List
    Controller.prototype.removeItem = function (idElement) {
        var arrayOfIdEle = idElement.split('-');
        var type = arrayOfIdEle[0];
        var id = parseInt(arrayOfIdEle[1]);
        if (type === 'income') {
            this.incomeArray.removeItem(id);
            this.displayDeleteIncomeItem(idElement);
        }
        if (type === 'expense') {
            this.expenseArray.removeItem(id);
            this.displayDeleteExpenseItem(idElement);
        }
    };
    /*******************************************
     *             BUDGET FIELD
     * *****************************************/
    // Notify Budget Object for change
    Controller.prototype.updateBudget = function (type, value) {
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
    /*******************************************
     *             DISPLAY (VIEW)
     * *****************************************/
    // Display Budget Field on UI
    Controller.prototype.displayBudgetField = function () {
        this.displayBudget.display();
    };
    // Display Income Field on UI
    Controller.prototype.displayIncomeField = function () {
        this.displayIncomeItem.display();
    };
    // Display Expense Field on UI
    Controller.prototype.displayExpenseField = function () {
        this.displayExpenseItem.display();
    };
    // Remove Income Item on UI
    Controller.prototype.displayDeleteIncomeItem = function (idElement) {
        this.displayIncomeItem.removeDisplay(idElement);
    };
    // Remove Expense Item on UI
    Controller.prototype.displayDeleteExpenseItem = function (idElement) {
        this.displayExpenseItem.removeDisplay(idElement);
    };
    return Controller;
}());
