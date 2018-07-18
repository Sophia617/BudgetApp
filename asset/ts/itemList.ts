interface IItemList {
    addItem (description: string, value: number);
    removeItem (id: number) : number;
    getID();
    getDescription();
    getValue();
}


class IncomeArray implements IItemList {
    
    // Instance Variable Field
    private _incomeList: Array<IItem> =[];
    private _id: number; // this id will be used in DOM display ID and Item ID
    
    // Create Income Item and push to the Income Array
    public addItem(description: string, value: number):void {
        // Set ID - last item ID + 1
        let i = this._incomeList.length;
        if (i === 0 ){
            this._id =0;
        }
        if (i != 0) {
           this._id = this._incomeList[i-1].id +1;
           console.log(this._id);
        }
        // create new item and push to Array
        let newIncomeItem = new IncomeItem(this._id, description,value);
        this._incomeList.push(newIncomeItem);
        
    }
    
    // Remove Item to the Income Array
    public removeItem(id: number): number {

        // Create new ID array using map() to get index number
        let newIdArr = this._incomeList.map(function(item){
            return item.id;
        });
        // Find the index number of the id in new array
        let index = newIdArr.indexOf(id);
        
        // Get the value of the selected Item
        let itemValue = this._incomeList[index].value;
      
        // Remove the item using index number
        this._incomeList.splice(index,1);
        return itemValue;
    }
    
    // Getter
    public getID() {
        return this._id;
    }
    
    public getDescription() {
        return this._incomeList[this._id].description;
    }
    
    public getValue() {
        return this._incomeList[this._id].value;
    }
}


class ExpenseArray implements IItemList {
    
    // Instance Variable Field
    private _expenseList: Array<IItem> = [];
    private _id: number =0; // this id should be used in display.. DOM ID not the Item ID itself
    
    // Create Expense Item and push it to the Expense Array
    public addItem(description, value):void {
        // Set ID - last item ID + 1
        let i = this._expenseList.length;
        if (i != 0) {
            this._id = this._expenseList[i-1].id +1;
            console.log(this._id);
        }
        // create new item and push to Array
        let newExpenseItem = new ExpenseItem(this._id, description, value);
        this._expenseList.push(newExpenseItem);
    }
    
    // remove Item to the Expense Array
    public removeItem(id: number): number {
        
        console.log( this._expenseList);
        // Create new ID array using map() to get index number
        let newIdArr = this._expenseList.map(function(item){
            return item.id;
        });
        // Find the index number of the id in new array
        let index = newIdArr.indexOf(id);
    
        // Get the value of the selected Item
        let itemValue = this._expenseList[index].value;
    
        // Remove the item using index number
        this._expenseList.splice(index,1);
        
        return itemValue;
    }
    
    //Getter
    public getID() {
        return this._id;
    }
    
    public getDescription() {
        return this._expenseList[this._id].description;
    }
    
    public getValue() {
        return this._expenseList[this._id].value;
    }
}