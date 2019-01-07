+function () {
    const ageEle = document.querySelector('#age');
    ageEle.innerHTML = (new Date()).getFullYear() - 1994;
}();