(function() {
    'use strict';

    window.addEventListener('scroll', function() {
        var navigate = document.getElementById('navigate');
        navigate.style.background = window.scrollY > 20 ? 'rgba(0, 0, 0, 0.6)' : 'none';
    });
})();