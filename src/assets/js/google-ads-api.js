var yomirando = bodymovin.loadAnimation({
    container: document.getElementById('yomirando'), // Required
    path: '/js/yomirando.json', // Required
    renderer: 'canvas', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "idea individual Diseño y programación Freelance", // Name for future reference. Optional.
    rendererSettings: {
        clearCanvas: true,
    }
});
yomirando.addEventListener('complete', function () {
    document.addEventListener('mousemove', function (e) {
        yomirando.goToAndStop(e.clientX / window.innerWidth * 40 + 92, true);
    });
});

var bckgrdaynight = bodymovin.loadAnimation({
    container: document.getElementById('bckgrdaynight'), // Required
    path: '/js/bckgrdaynight.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "idea individual Diseño y programación Freelance", // Name for future reference. Optional.
    rendererSettings: {
        preserveAspectRatio: 'xMidYMin meet'
    }

});

var btndaynight = bodymovin.loadAnimation({
    container: document.getElementById('btndaynight'),
    renderer: 'svg',
    loop: false, // Optional
    autoplay: true,
    path: '/js/btndayandnight.json'
});

// document.getElementById('btndaynight').addEventListener('click', function () {
//     if (bckgrdaynight.playDirection === 1) {
//         btndaynight.setSpeed(2)
//         bckgrdaynight.setSpeed(1)
//         bckgrdaynight.setDirection(-1);
//         btndaynight.setDirection(-1);
//         lottie.play()

//         console.log('playDirection');
//         console.log(bckgrdaynight.playDirection);
//         console.log(btndaynight.playDirection);
//     } else {
//         btndaynight.setSpeed(1)
//         bckgrdaynight.setSpeed(1.8)
//         bckgrdaynight.setDirection(1);
//         btndaynight.setDirection(1);
//         lottie.play()
//         console.log(bckgrdaynight.playDirection);
//         console.log(btndaynight.playDirection);
//     }
// });

if (localStorage.getItem('theme') == 'dark') {
    btndaynight.setDirection(-1)
    bckgrdaynight.setDirection(-1)
} else {
    btndaynight.setDirection(1)
    bckgrdaynight.setDirection(1)
}

document.getElementById('btndaynight').addEventListener('click', function () {
    if (btndaynight.playDirection == 1) {
        btndaynight.setSpeed(1.8);
        bckgrdaynight.setSpeed(1);
        bckgrdaynight.setDirection(-1);
        btndaynight.setDirection(-1);
        btndaynight.play();
        bckgrdaynight.play();
    } else {
        btndaynight.setSpeed(1);
        bckgrdaynight.setSpeed(1.8);
        bckgrdaynight.setDirection(1);
        btndaynight.setDirection(1);
        btndaynight.play();
        bckgrdaynight.play();
    }
});

// direccion de play
// console.log(btndaynight.playDirection);


// modo oscuro en consola y local
if (localStorage.getItem('theme') == 'dark') {
    setDarkMode();

}

function setDarkMode() {
    let isDark = document.body.classList.toggle('darkmode');
    if (isDark) {
        setDarkMode.checked = true;
        localStorage.setItem('theme', 'dark');
        document.getElementById('btndaynight').setAttribute('checked', 'checked');
    } else {
        setDarkMode.checked = true;
        localStorage.removeItem('theme', 'dark')
        document.getElementById('btndaynight').removeAttribute('checked', 'checked');
    }
}
// termina modo oscuro en consola y local


// yo mirando en mobile falta activar solo en mobile
var yomirando2 = bodymovin.loadAnimation({
    container: document.getElementById('yomirando2'), // Required
    path: '/js/yomirando.json', // Required
    renderer: 'canvas', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "idea individual Diseño y programación Freelance", // Name for future reference. Optional.
    rendererSettings: {
        clearCanvas: true,
    }
});
// Termina yo mirando duplicado


var yoflotando = bodymovin.loadAnimation({
    container: document.getElementById('yoflotando'), // Required
    path: '/js/yoflotando.json', // Required
    renderer: 'canvas', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "idea individual Diseño y programación Freelance", // Name for future reference. Optional.
    rendererSettings: {
        clearCanvas: true,
        // preserveAspectRatio: 'xMidYMid slice',// meet Or Slice.
    }

});

var fondo = bodymovin.loadAnimation({
    container: document.getElementById('fondoweb'), // Required
    path: '/js/fondo.json', // Required
    renderer: 'canvas', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "idea individual Diseño y programación Freelance", // Name for future reference. Optional.
    rendererSettings: {
        clearCanvas: true,
        preserveAspectRatio: 'xMaxYMax slice',// meet Or Slice.
    }

});

// var fondoweb = document.getElementById('fondoweb');
// var scroll = function () {
//     fondoweb.style.opacity = 0.2 + window.scrollY / 500;
//     if (fondoweb.style.opacity > 0.2) {
//         fondoweb.style.opacity = 0.2;
//     }
// };
// window.addEventListener('scroll', scroll);

// var fondoweb = document.getElementById('fondoweb');
// var scroll = function () {
//     fondoweb.style.opacity = 0.5 * window.scrollY / 500 ;
// };
// window.addEventListener('scroll', scroll);


// Clase transparente a navbar todo arriba
var navbar = document.getElementById('navbar');
window.onscroll = function () {
    if (window.pageYOffset == 0) {
        navbar.classList.add('bg-transparent');
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('bg-light');
    } else {
        navbar.classList.remove('bg-transparent');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('bg-light');
        navbar.classList.add('navbar-light');
    }
};
// Termina Clase transparente a navbar todo arriba


// inicia buscador
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function () {
            $('#myDIV').masonry();
            $(this).toggle($(this).is('img') || $(this).is('video') || $(this).is('#carouselExampleIndicators2') || $(this).is('.carousel-inner') || $(this).is('.carousel-item') || $(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
// Termina buscador

if (window.matchMedia("(min-width: 768px)").matches) {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {

        target: '#navbar-example2'
    });

} else {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-example'
    });
}