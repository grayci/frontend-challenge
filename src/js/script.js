// Detect mobile device

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// Swiper init

var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    autoplay: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

// Open search bar

var searchBar = document.getElementById("searchBar");
var searchIcon = document.getElementById("searchIcon");

searchIcon.onclick = function() { openSearchBar() };

function openSearchBar() {
    searchBar.style.display = "block";
}

// Search bar filter

function searchBarFilter() {
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchItems");
    li = ul.getElementsByTagName("li");

    if(input.value.length > 1) {
        ul.style.display = "block";

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            textValue = a.textContent || a.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    } else {
        ul.style.display = "none";
    }
}

// Open mobile menu

var openMobileMenuIcon = document.getElementById("openMobileMenuIcon");
var mobileMenu = document.getElementById("mobileMenu");

openMobileMenuIcon.onclick = function() { openMobileMenu() };

function openMobileMenu() {
    mobileMenu.style.display = "flex";
}

// Close mobile menu

var closeMobileMenuIcon = document.getElementById("closeMobileMenuIcon");

closeMobileMenuIcon.onclick = function() { closeMobileMenu() };

function closeMobileMenu() {
    mobileMenu.style.display = "none";
}

// On scroll functions

setTimeout(function(){ 
    window.onscroll = function () {
        // Hide search bar on scroll
        searchBar.style.display = "none";

        // Close mobile menu on scroll if device is mobile
        if(isMobile.any()) {
            mobileMenu.style.display = "none";
        }
        
        // Show "back to top" button on scroll
        var arrowButton = document.getElementById("arrowButton");
    
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            arrowButton.style.display = "flex";
        } else {
            arrowButton.style.display = "none";
        }
    }
}, 1000);

// Form validation

function validateForm() {
    var emailInputValue = document.forms["newsletter"]["email"].value;
    var negativeFeedback = document.querySelector(".feedback__negative");
    var positiveFeedback = document.querySelector(".feedback__positive");

    if (emailInputValue == "") {
        negativeFeedback.innerHTML += "Preencha o campo com um e-mail válido";

        return false;
    } else {
        negativeFeedback.style.display = "none";
        positiveFeedback.innerHTML += "Enviado com sucesso!";

        return true;
    }
}
