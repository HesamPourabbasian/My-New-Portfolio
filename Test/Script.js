const text = "Hi! I'm Hesam.";
        const typingSpeed = 100; // milliseconds
        let index = 0;

        function type() {
            if (index < text.length) {
                document.querySelector('.typed-text').textContent += text.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            type();
        });