var addType;
var descTXTBOX;
var valTXTBOX;
var addBTN;
var totalBudgetField;
var totalIncomeField;
var totalExpenseField;
var totalExpensePercentField;
var incomeField;
var expenseField;
var container;
function initialiseDOM() {
    // Input Field DOM
    addType = document.querySelector('.add__type');
    descTXTBOX = document.querySelector('.add__description');
    valTXTBOX = document.querySelector('.add__value');
    addBTN = document.querySelector('.add__btn');
    // Budget Field DOM
    totalBudgetField = document.querySelector('.budget__value');
    totalIncomeField = document.querySelector('.budget__income--value');
    totalExpenseField = document.querySelector('.budget__expenses--value');
    totalExpensePercentField = document.querySelector('.budget__expenses--percentage');
    // Income and Expense Field DOM
    incomeField = document.querySelector('.income__list');
    expenseField = document.querySelector('.expenses__list');
    // Delete Button
    container = document.querySelector('.container');
}
