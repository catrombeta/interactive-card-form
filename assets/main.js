function fillDataCard() {
    const inputName = document.getElementById('inputCardName');
    const inputNumber = document.getElementById('inputCardNumber');
    const inputExpDateM = document.getElementById('inputExpDateM');
    const inputExpDateY = document.getElementById('inputExpDateY');
    const inputCardCvc = document.getElementById('inputCardCvc');

    const divFillName = document.getElementById('fill-name');
    const divFillNumber = document.getElementById('fill-number');
    const divFillExpDateM = document.getElementById('fill-date-month');
    const divFillExpDateY = document.getElementById('fill-date-year');
    const divFillCardCvc = document.getElementById('fill-cvc');

    inputName.addEventListener('input', function(){
        if (this.value) {
            divFillName.innerHTML = this.value.toUpperCase();
        } else if (this.value == '') {
            divFillName.innerHTML = 'Jane Appleseed';
        } else {
            divFillName.innerHTML = 'Jane Appleseed';
        }
    });

    inputNumber.addEventListener('input', function(){
        if (this.value) {
            divFillNumber.innerHTML = this.value;
        } else if (this.value == '') {
            divFillNumber.innerHTML = '0000 0000 0000 0000';
        } else {
            divFillNumber.innerHTML = '0000 0000 0000 0000';
        }
    });

    inputExpDateM.addEventListener('input', function(){
        if (this.value) {
            divFillExpDateM.innerHTML = this.value;
        } else if (this.value == '') {
            divFillExpDateM.innerHTML = '00';
        } else {
            divFillExpDateM.innerHTML = '00';
        }
    });

    inputExpDateY.addEventListener('input', function(){
        if (this.value) {
            divFillExpDateY.innerHTML = this.value;
        } else if (this.value == '') {
            divFillExpDateY.innerHTML = '00';
        } else {
            divFillExpDateY.innerHTML = '00';
        }
    });

    inputCardCvc.addEventListener('input', function(){
        if (this.value) {
            divFillCardCvc.innerHTML = this.value;
        } else if(this.value == '') {
            divFillCardCvc.innerHTML = '000';
        } else {
            divFillCardCvc.innerHTML = '000';
        }
    });

    // if (this.value) {
    //     divFillName.innerHTML = this.value.toUpperCase();
    // } else if (this.value == '') {
    //     divFillName.innerHTML = 'Jane Appleseed';
    // } else {
    //     divFillName.innerHTML = 'Jane Appleseed';
    // }
}

fillDataCard();

