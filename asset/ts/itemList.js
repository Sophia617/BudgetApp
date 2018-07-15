var IncomeArray = /** @class */ (function () {
    function IncomeArray() {
        // Instance Variable Field
        this._incomeList = [];
    }
    // Create Income Item and push to the Income Array
    IncomeArray.prototype.addItem = function (description, value) {
        var newIncomeItem = new IncomeItem(description, value);
        this._id = this._incomeList.length;
        this._incomeList.push(newIncomeItem);
    };
    // Remove Item to the Expense Array
    IncomeArray.prototype.removeItem = function (item) {
    };
    // Getter
    IncomeArray.prototype.getID = function () {
        return this._id;
    };
    IncomeArray.prototype.getDescription = function () {
        return this._incomeList[this._id].description;
    };
    IncomeArray.prototype.getValue = function () {
        return this._incomeList[this._id].value;
    };
    return IncomeArray;
}());
var ExpenseArray = /** @class */ (function () {
    function ExpenseArray() {
        // Instance Variable Field
        this._expenseList = [];
    }
    // Create Expense Item and push it to the Expense Array
    ExpenseArray.prototype.addItem = function (description, value) {
        var newExpenseItem = new ExpenseItem(description, value);
        this._id = this._expenseList.length;
        this._expenseList.push(newExpenseItem);
    };
    // remove Item to the Expense Array
    ExpenseArray.prototype.removeItem = function (item) {
    };
    //Getter
    ExpenseArray.prototype.getID = function () {
        return this._id;
    };
    ExpenseArray.prototype.getDescription = function () {
        return this._expenseList[this._id].description;
    };
    ExpenseArray.prototype.getValue = function () {
        return this._expenseList[this._id].value;
    };
    return ExpenseArray;
}());
