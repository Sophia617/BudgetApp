var IncomeArray = /** @class */ (function () {
    function IncomeArray() {
        // Instance Variable Field
        this._incomeList = [];
    }
    // Create Income Item and push to the Income Array
    IncomeArray.prototype.addItem = function (description, value) {
        // Set ID - last item ID + 1
        var i = this._incomeList.length;
        if (i === 0) {
            this._id = 0;
        }
        if (i != 0) {
            this._id = this._incomeList[i - 1].id + 1;
            console.log(this._id);
        }
        // create new item and push to Array
        var newIncomeItem = new IncomeItem(this._id, description, value);
        this._incomeList.push(newIncomeItem);
    };
    // Remove Item to the Income Array
    IncomeArray.prototype.removeItem = function (id) {
        // Create new ID array using map() to get index number
        var newIdArr = this._incomeList.map(function (item) {
            return item.id;
        });
        // Find the index number of the id in new array
        var index = newIdArr.indexOf(id);
        // Get the value of the selected Item
        var itemValue = this._incomeList[index].value;
        // Remove the item using index number
        this._incomeList.splice(index, 1);
        return itemValue;
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
        this._id = 0; // this id should be used in display.. DOM ID not the Item ID itself
    }
    // Create Expense Item and push it to the Expense Array
    ExpenseArray.prototype.addItem = function (description, value) {
        // Set ID - last item ID + 1
        var i = this._expenseList.length;
        if (i != 0) {
            this._id = this._expenseList[i - 1].id + 1;
            console.log(this._id);
        }
        // create new item and push to Array
        var newExpenseItem = new ExpenseItem(this._id, description, value);
        this._expenseList.push(newExpenseItem);
    };
    // remove Item to the Expense Array
    ExpenseArray.prototype.removeItem = function (id) {
        console.log(this._expenseList);
        // Create new ID array using map() to get index number
        var newIdArr = this._expenseList.map(function (item) {
            return item.id;
        });
        // Find the index number of the id in new array
        var index = newIdArr.indexOf(id);
        // Get the value of the selected Item
        var itemValue = this._expenseList[index].value;
        // Remove the item using index number
        this._expenseList.splice(index, 1);
        return itemValue;
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
