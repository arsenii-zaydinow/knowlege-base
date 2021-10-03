const customSelect = document.querySelector('#custom-select');

const choicesSelect = new Choices(customSelect, {
    searchEnabled: false,
    placeholder: true,
    shouldSort: false,
    position: 'bottom',
    itemSelectText: ''
});
