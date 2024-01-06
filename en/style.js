document.addEventListener("DOMContentLoaded", function() {
    // Function to update styles
    function updateStyles() {
        const body = document.body;
        const headers = document.querySelectorAll('h2');
        const links = document.querySelectorAll('nav a');

        // Set body styles
        body.style.fontFamily = 'Arial, sans-serif';
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';

        // Set header styles
        headers.forEach(header => {
            header.style.color = '#4a90e2';
        });

        // Set navigation link styles
        links.forEach(link => {
            link.style.color = '#4a90e2';
            link.onmouseover = function() {
                this.style.color = '#d9534f';
            };
            link.onmouseout = function() {
                this.style.color = '#4a90e2';
            };
        });
    }

    // Call the updateStyles function to apply the styles
    updateStyles();
});

document.addEventListener("DOMContentLoaded", function() {
    var languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', function() {
        var language = this.value;
        // Redirect based on the selected language
        window.location.href = 'https://talking-with-planets.github.io/WalkingTalking/' + language + '/';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});