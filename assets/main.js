function fillDataCard() {
    const inputName = document.getElementById('inputCardName');
    const inputNumber = (document.getElementById('inputCardNumber'));
    const inputExpDateM = document.getElementById('inputExpDateM');
    const inputExpDateY = document.getElementById('inputExpDateY');
    const inputCardCvc = document.getElementById('inputCardCvc');

    const divFillName = document.getElementById('fill-name');
    const divFillNumber = document.getElementById('fill-number');
    const divFillExpDateM = document.getElementById('fill-date-month');
    const divFillExpDateY = document.getElementById('fill-date-year');
    const divFillCardCvc = document.getElementById('fill-cvc');
    const defaultValues = {
        name: 'Jane Appleseed',
        number: '0000 0000 0000 0000',
        expDateM: '00',
        expDateY: '00',
        cvc: '000',
    }

    const inputs = [inputName, inputNumber, inputExpDateM, inputExpDateY, inputCardCvc];
    const divFills = [divFillName, divFillNumber, divFillExpDateM, divFillExpDateY, divFillCardCvc];


    inputs.forEach((input, i) => {
        input.addEventListener('input', function() {
            if(input === inputName){
                if(!/^[a-zA-Z ]+$/.test(this.value)) {
                    alert('Please enter a valid name');
                    this.value = '';
                }
            } else if(input === inputNumber || input === inputExpDateM || input === inputExpDateY || input === inputCardCvc){
                if(isNaN(this.value)) {
                    alert('Please enter a valid number');
                    this.value = '';
                }
            }

            divFills[i].innerHTML = this.value || defaultValues[Object.keys(defaultValues)[i]];
        });
    });


}
fillDataCard();

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}