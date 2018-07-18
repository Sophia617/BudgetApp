var Controller = /** @class */ (function () {
    function Controller() {
        this.incomeArray = new IncomeArray();
        this.expenseArray = new ExpenseArray();
        this.budget = new Budget();
        this.displayBudget = new DisplayBudget(this.budget);
        this.displayIncomeItem = new DisplayIncomeItem(this.incomeArray);
        this.displayExpenseItem = new DisplayExpenseItem(this.expenseArray);
        this.displayDate = new DisplayDate();
    }
    /*******************************************
     *              ADD NEW ITEM
     * *****************************************/
    // Add Item to the Array List
    Controller.prototype.addItem = function (type, description, value) {
        // Pass the Item to Income List
        if (type === 'inc') {
            this.incomeArray.addItem(description, value);
            this.displayAddIncomeItem();
        }
        // Pass the Item to Expense List
        if (type === 'exp') {
            this.expenseArray.addItem(description, value);
            this.displayAddExpenseItem();
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
        var itemValue;
        if (type === 'income') {
            itemValue = this.incomeArray.removeItem(id);
            this.displayDeleteIncomeItem(idElement);
        }
        if (type === 'expense') {
            itemValue = this.expenseArray.removeItem(id);
            this.displayDeleteExpenseItem(idElement);
        }
        // Notify Budget For change in ItemArray
        this.updateBudget(type, itemValue);
    };
    /*******************************************
     *             BUDGET FIELD
     * *****************************************/
    // Notify Budget Object for change
    Controller.prototype.updateBudget = function (type, value) {
        // Update Total Income in the Budget Object
        if (type === 'inc' || 'income') {
            this.budget.updateTotalIncome(type, value);
        }
        // Update TotalExpense in the Budget Object
        if (type === 'exp' || 'expense') {
            this.budget.updateTotalExpense(type, value);
        }
        this.displayBudgetField();
    };
    /*******************************************
     *             DISPLAY (VIEW)
     * *****************************************/
    // Display Budget Field on UI
    Controller.prototype.displayCurrentDate = function () {
        this.displayDate.display();
    };
    Controller.prototype.displayBudgetField = function () {
        this.displayBudget.display();
    };
    // Display Income Field on UI
    Controller.prototype.displayAddIncomeItem = function () {
        this.displayIncomeItem.display();
    };
    // Display Expense Field on UI
    Controller.prototype.displayAddExpenseItem = function () {
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
