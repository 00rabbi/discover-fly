
//plus-minus button operations
function btnOperation(id, isIncrease) {
    const inputValue = getInputValue(id);//getting initial value of input
    //updating input value
    if (isIncrease == true) {
        const updateInputValue = inputValue + 1;
        document.getElementById(id).value = updateInputValue;
    }
    else if (isIncrease == false && inputValue > 0) {
        const updateInputValue = inputValue - 1;
        document.getElementById(id).value = updateInputValue;
    }
    //updating span value
    updateSpan('');
    updateSpan('Feedback');
}

document.getElementById('bookingBtn').addEventListener('click', function () {
    const totalValue = getSpanValue('total');
    if (totalValue <= 0) {
        alert('Please Select your plan. ')
    }
    else {
        document.getElementById('booking-form').style.display = 'none';
        document.getElementById('feedback').style.display = 'block';
    }

})

//function area
//update all span value
function updateSpan(idExtension) {  ////idExtension- pass more string with all id;
    const inputFirstClassValue = getInputValue('inputFirstClass');
    const inputEconomyValue = getInputValue('inputEconomy');
    document.getElementById('inputEconomy' + 'Feedback').innerText = inputEconomyValue;
    document.getElementById('inputFirstClass' + 'Feedback').innerText = inputFirstClassValue;

    const subtotalValue = inputFirstClassValue * 150 + inputEconomyValue * 100;
    document.getElementById('subtotal' + idExtension).innerText = subtotalValue;

    const vat = Math.round(subtotalValue * .1);
    document.getElementById('vat' + idExtension).innerText = vat;

    const total = subtotalValue + vat;
    document.getElementById('total' + idExtension).innerText = total
}




////input value picker
function getInputValue(id) {
    const input = document.getElementById(id).value;
    const inputValue = parseFloat(input);
    return inputValue;
}

//span value picker 
function getSpanValue(id) {
    const span = document.getElementById(id).innerText;
    const spanValue = parseFloat(span);
    return spanValue;
}

// Thank You