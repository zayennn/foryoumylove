document.addEventListener('DOMContentLoaded', function () {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');

    submitPassword.addEventListener('click', function () {
        if (passwordInput.value.toLowerCase() === 'babycakes') {
            passwordModal.style.opacity = '0';
            setTimeout(() => {
                passwordModal.style.display = 'none';
                welcomeScreen.style.display = 'flex';

                setTimeout(() => {
                    welcomeScreen.style.opacity = '0';
                    setTimeout(() => {
                        welcomeScreen.style.display = 'none';
                        mainContent.style.display = 'block';
                    }, 800);
                }, 2500);
            }, 500);
        } else {
            passwordInput.value = '';
            passwordInput.placeholder = 'Try again, my love...';
            passwordInput.style.borderColor = '#ff4d4d';
            setTimeout(() => {
                passwordInput.style.borderColor = '#ffb7c5';
                passwordInput.placeholder = 'Our special word...';
            }, 1500);
        }
    });

    passwordInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            submitPassword.click();
        }
    });

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });

    const loveLetter = document.getElementById('loveLetter');
    loveLetter.addEventListener('click', function () {
        this.classList.toggle('expanded');
    });

    function addFloatingElements() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(heart);
        }

        for (let i = 0; i < 5; i++) {
            const teddy = document.createElement('div');
            teddy.classList.add('teddy-bear');
            teddy.innerHTML = '🧸';
            teddy.style.left = Math.random() * 100 + '%';
            teddy.style.top = Math.random() * 100 + '%';
            teddy.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(teddy);
        }
    }

    addFloatingElements();
});