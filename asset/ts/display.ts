interface IDiplay {
    display(): void;
}

class DisplayIncome implements IDiplay {
    public display(): void {
    
    }
}

class DisplayExpense implements IDiplay {
    public display(): void {
    
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
        totalExpensePercentField.innerHTML = `${expPercent}%`;
    }
}                                            