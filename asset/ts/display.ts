interface IDiplay {
    display(): void;
    removeDisplay(id: string): void;
}

class DisplayIncomeItem implements IDiplay {
    
    private incomeArray: IItemList;
    
    constructor(incomeArray: IItemList){
        this.incomeArray = incomeArray;
    }
    
    // Display Income Items on UI
    public display(): void {
        // Get Income Item
        let id = this.incomeArray.getID();
        let description = this.incomeArray.getDescription();
        let value = this.incomeArray.getValue();

        // Display Income Item
        incomeField.insertAdjacentHTML('afterend', `
            <div class="item clearfix" id="income-${id}">
                <div class="item__description">${description}</div>
                <div class="right clearfix">
                     <div class="item__value">+ ${value}</div>
                     <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
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

class DisplayExpenseItem implements IDiplay {
    
    private expenseArray: IItemList;
    
    constructor(expenseArray: IItemList){
        this.expenseArray = expenseArray;
    }
    
    // Display Expense Items on UI
    public display(): void {
        // Get Expense Item
        let id = this.expenseArray.getID();
        let description = this.expenseArray.getDescription();
        let value = this.expenseArray.getValue();
        
        // Display Expense Item
        expenseField.insertAdjacentHTML('afterend', `
            <div class="item clearfix" id="expense-${id}">
                <div class="item__description">${description}</div>
                <div class="right clearfix">
                     <div class="item__value">- ${value}</div>
                     <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
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

class DisplayDate implements IDiplay {
    
    // Month Array
    private monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    public display(){
        // Get Month and Year
        let currentDate = new Date();
        let month = currentDate.getMonth();
        let year = currentDate.getUTCFullYear();
        
        // Display month
        currentMonthYear.innerText = `${this.monthNames[month]} ${year}`;
    }
    
    public removeDisplay(idElement: string): void { }
}

class DisplayBudget implements IDiplay {
    
    private budget:Budget;
    
    constructor(budget: Budget){
        this.budget =budget;
    }
    
    public display(): void {
        
        // Get Total Amount of Value From the Budget
        let totalBudget = this.budget.getTotalBudget();
        let totalIncome = this.budget.getTotalIncome();
        let totalExpense = this.budget.getTotalExpense();
        let expPercent = this.budget.getExpensePercent();
        
        console.log (totalExpense);
        
        // Display Total Budget Field
        if (totalBudget >= 0) {
            totalBudgetField.innerHTML = `+ ${(totalBudget).toFixed(2)}`;
        }  else {
            totalBudgetField.innerHTML = `${(totalBudget).toFixed(2)}`;
        }
        // Display Total Income and Expense Field
        totalIncomeField.innerHTML = `+ ${(totalIncome).toFixed(2)}`;
        totalExpenseField.innerHTML = `- ${(totalExpense).toFixed(2)}`;
        totalExpensePercentField.innerHTML = `${(expPercent).toFixed(1)}%`;
    }
    
    public removeDisplay(idElement: string): void { }
}                                            