(function() {
    'use strict';

    window.addEventListener('scroll', function() {
        var navigate = document.getElementById('navigate');
        navigate.style.background = 'none';

        if(window.scrollY > 20) {
            navigate.style.background = 'rgba(0, 0, 0, 0.6)';
        }
    });
})();