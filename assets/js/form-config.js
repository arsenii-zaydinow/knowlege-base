const phoneSelector = document.querySelector("input[name='tel']");
const phoneMask = new Inputmask('+7 (999) 999-99-99');

phoneMask.mask(phoneSelector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLenght: 2,
            maxLenght: 10
        },
        tel: {
            required: true,
            function: () => {
                const phone = phoneSelector.inputmask.unmaskedvalue();

                return Number(phone) && phone.length === 10;
            }
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: 'Как вас зовут?',
        tel: 'Укажите ваш телефон',
        email: 'Укажите ваш e-mail'
    },
    colorWrong: '#FF5C00',
});