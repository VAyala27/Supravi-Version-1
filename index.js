var toggle = document.querySelector(".toggler");
var nav = document.querySelector(".navbar");
toggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});

var dropDownbtn = document.querySelectorAll(".drop-down");
var dropdown = document.querySelectorAll(".nav-dropdown");
dropDownbtn.forEach(function (button) {
    dropdown.forEach(function (dropdown) {
        button.addEventListener("click", function (event) {
            event.target = dropdown.classList.toggle("active");
        });
    });
});

var copyrightDate = document.querySelector('#main-footer p');
var date = new Date().getFullYear();
copyrightDate.innerHTML = `All Rights Reservered ${date}&copy;`;