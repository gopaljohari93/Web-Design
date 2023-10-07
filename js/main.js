// header-scrolled
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Owl Carousel
$(document).ready(function () {
    $('.client-slider-section').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    })
})

// Form Validation
let username = document.getElementById("username");
let email = document.getElementById("email");
let title = document.getElementById("title");
let message = document.getElementById("message");
let flag = 1;

function validateFrom() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "User Name require min 3 char";
        flag = 0;
    } else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if (email.value == "") {
        document.getElementById("emailError").innerHTML = "Your Email is empty";
        flag = 0;
    } else {
        document.getElementById("emailError").innerHTML = "";
        flag = 1;
    }

    if (title.value == "") {
        document.getElementById("titleError").innerHTML = "Title is empty";
        flag = 0;
    } else {
        document.getElementById("titleError").innerHTML = "";
        flag = 1;
    }

    if (message.value == "") {
        document.getElementById("messageError").innerHTML = "Write a your comment";
        flag = 0;
    } else {
        document.getElementById("messageError").innerHTML = "";
        flag = 1;
    }


    if (flag) {
        return true;
    } else {
        return false;
    }



}

