document.addEventListener("DOMContentLoaded", function(event) {
    
    initialiseDOM();
    initialiseInputField();
    let appController = new Controller();
    appController.displayCurrentDate();
    
    // Variable from User Input Field
    let type, description, value;
    
    // When click Add button --> Add the Item to the ArrayList
    addBTN.addEventListener('click', function(){
        type = addType.value;
        description = descTXTBOX.value;
        value = valTXTBOX.value;
        if (description === '' || value === '') {
            alert('Please enter both description and value of your item.');
        }  else{
            appController.addItem(type, description, parseFloat(value));
            initialiseInputField();
        }
    });
    
    // When Delete Button Clicked from --> Remove the Item from the List
    // Use Event Delegation to access deleteBTN that does not exist when page loaded (so cannot bind it to addEventListener)
    container.addEventListener('click', function(event){
        // Get DOM element ID for the item
        let idElement = event.target.parentNode.parentNode.parentNode.parentNode.id;
        appController.removeItem(idElement);
    });
    
    // Initializing Input Field
    function initialiseInputField () {
        addType.value ='inc';
        descTXTBOX.value = '';
        valTXTBOX.value ='';
    }
});
