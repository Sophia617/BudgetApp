document.addEventListener("DOMContentLoaded", function (event) {
    initialiseDOM();
    var appController = new Controller();
    //User Input Field
    var type, description, value;
    //When click Add button --> Add the Item to the ArrayList
    addBTN.addEventListener('click', function () {
        type = addType.value;
        description = descTXTBOX.value;
        value = parseInt(valTXTBOX.value);
        appController.addItem(type, description, value);
    });
    //When Remove Button Clicked from Input Field
    //When Remove Button Clicked from Expense Field
});
