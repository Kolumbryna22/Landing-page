(function() {
    'use strict';

    var button = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var change = false;

    window.addEventListener('scroll', function() {
        var navigate = document.getElementById('navigate');
        navigate.style.background = window.scrollY > 20 ? 'rgba(0, 0, 0, 0.6)' : 'none';
    });

    window.addEventListener('resize', function(){
        if (window.innerWidth > 588) {
            nav.style.display = "block";
            change = false;
        }
        else {
            nav.style.display = "none";
        }
    })
    
    var changeVisible = function() {
        change ? (nav.style.display = "block") : (nav.style.display = "none");
        change = !change;
    }

    button.addEventListener('click', changeVisible);
})();