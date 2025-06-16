const islHolderLegal = document.querySelector('.isl_holder--legal');

function acceptLegal() {
    localStorage.setItem("termsAccepted", "yes");
    islHolderLegal.classList.remove('isl_holder--open');
}

window.onload = function() {
    if (localStorage.getItem("termsAccepted") !== "yes") {
        islHolderLegal.classList.add('isl_holder--open');
    }
};