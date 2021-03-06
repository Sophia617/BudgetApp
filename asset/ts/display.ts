// Display Interface
interface IDiplay {
    display(): void;
    removeDisplay(id: string): void;
}

// Display for Single Income Item
class DisplayIncomeItem implements IDiplay {
    
    private _incomeArray: IItemList;
    
    constructor(incomeArray: IItemList){
        this._incomeArray = incomeArray;
    }
    
    // Display Income Items on UI
    public display(): void {
        // Get Income Item
        let id = this._incomeArray.getID();
        let description = this._incomeArray.getDescription();
        let value = this._incomeArray.getValue();

        // Display Income Item
        incomeField.insertAdjacentHTML('afterend', `
            <div class="item clearfix" id="income-${id}">
                <div class="item__description">${description}</div>
                <div class="right clearfix">
                     <div class="item__value">+ ${value}</div>
                     <div class="item__delete">
                            <button class="item__delete--btn"><i class="fas fa-minus-circle"></i></button>
                      </div>
                    </div>
             </div>
        `)
    }
    
    // Remove Income Items on UI
    public removeDisplay(idElement: string): void {
        let elem = document.getElementById(`${idElement}`);
        elem.remove();
    }
}


// Display for Single Expense Item
class DisplayExpenseItem implements IDiplay {
    
    private _expenseArray: IItemList;
    
    constructor(expenseArray: IItemList){
        this._expenseArray = expenseArray;
    }
    
    // Display Expense Items on UI
    public display(): void {
        // Get Expense Item
        let id = this._expenseArray.getID();
        let description = this._expenseArray.getDescription();
        let value = this._expenseArray.getValue();
        
        // Display Expense Item
        expenseField.insertAdjacentHTML('afterend', `
            <div class="item clearfix" id="expense-${id}">
                <div class="item__description">${description}</div>
                <div class="right clearfix">
                     <div class="item__value">- ${value}</div>
                     <div class="item__delete">
                            <button class="item__delete--btn"><i class="fas fa-minus-circle"></i></button>
                      </div>
                    </div>
             </div>
        `)
    }
    
    // Remove Expense Items on UI
    public removeDisplay(idElement: string): void {
        let elem = document.getElementById(`${idElement}`);
        elem.remove();
    }
}


// Display for Date (Month and Year)
class DisplayDate implements IDiplay {
    
    // Month Array
    private _monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    public display(){
        // Get Month and Year
        let currentDate = new Date();
        let month = currentDate.getMonth();
        let year = currentDate.getUTCFullYear();
        
        // Display month
        currentMonthYear.innerText = `${this._monthNames[month]} ${year}`;
    }
    
    public removeDisplay(idElement: string): void { }
}

// Display for Budget
class DisplayBudget implements IDiplay {
    
    private _budget:Budget;
    
    constructor(budget: Budget){
        this._budget =budget;
    }
    
    public display(): void {
        
        // Get Total Amount of Value From the Budget
        let totalBudget = this._budget.getTotalBudget();
        let totalIncome = this._budget.getTotalIncome();
        let totalExpense = this._budget.getTotalExpense();
        let expPercent = this._budget.getExpensePercent();
        
        // Display Total Budget Field
        if (totalBudget >= 0) {
            totalBudgetField.innerHTML = `+ ${(totalBudget).toFixed(2)}`;
        }  else {
            totalBudgetField.innerHTML = `${(totalBudget).toFixed(2)}`;
        }
        // Display Total Income and Expense Field
        totalIncomeField.innerHTML = `+ ${(totalIncome).toFixed(2)}`;
        totalExpenseField.innerHTML = `- ${(totalExpense).toFixed(2)}`;
        totalExpensePercentField.innerHTML = `${Math.round(expPercent)}%`;
    }
    
    public removeDisplay(idElement: string): void { }
}                                            