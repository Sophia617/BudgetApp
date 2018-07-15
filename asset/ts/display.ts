interface IDiplay {
    display(): void;
}

class DisplayIncome implements IDiplay {
    
    incomeArray: IItemList;
    
    constructor(incomeArray: IItemList){
        this.incomeArray = incomeArray;
    }
    
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
}

class DisplayExpense implements IDiplay {
    
    expenseArray: IItemList;
    
    constructor(expenseArray: IItemList){
        this.expenseArray = expenseArray;
    }
    
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
}

class DisplayBudget implements IDiplay {
    
    budget:Budget;
    
    constructor(budget: Budget){
        this.budget =budget;
    }
    
    public display(): void {
        
        // Get Total Amount of Value From the Budget
        let totalBudget = this.budget.getTotalBudget();
        let totalIncome = this.budget.getTotalIncome();
        let totalExpense = this.budget.getTotalExpense();
        let expPercent = this.budget.getExpensePercent();
        
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
}                                            