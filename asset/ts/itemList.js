var IncomeArray = /** @class */ (function () {
    function IncomeArray() {
        // Instance Variable Field
        this.incomeList = [];
        this.displayIncome = new DisplayIncome();
    }
    // Add Item to the Income Array
    IncomeArray.prototype.addItem = function (description, value) {
        // Create Income Item and push to the Array
        var newIncomeItem = new IncomeItem(description, value);
        var i = this.incomeList.length;
        this.incomeList.push(newIncomeItem);
        console.log(this.incomeList[i]);
    };
    // remove Item to the Expense Array
    IncomeArray.prototype.removeItem = function (item) {
    };
    // Display Income Item
    IncomeArray.prototype.notifyDisplay = function () {
        //let id = this.incomeList.length;  // this id should be used in display.. DOM ID not the Item ID itself
        this.displayIncome.display();
    };
    return IncomeArray;
}());
var ExpenseArray = /** @class */ (function () {
    function ExpenseArray() {
        // Instance Variable Field
        this.expenseList = [];
        this.displayExpense = new DisplayExpense();
    }
    // Add Item to the Expense Array
    ExpenseArray.prototype.addItem = function (description, value) {
        // Create Expense Item and push it to the Array
        var newExpenseItem = new ExpenseItem(description, value);
        var i = this.expenseList.length;
        this.expenseList.push(newExpenseItem);
        console.log(this.expenseList[i]);
        //notify
    };
    // remove Item to the Expense Array
    ExpenseArray.prototype.removeItem = function (item) {
    };
    // Display Expense Item
    ExpenseArray.prototype.notifyDisplay = function () {
        this.displayExpense.display();
    };
    return ExpenseArray;
}());
