<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For My Love</title>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #ffd1dc, #ffb7c5);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
            color: #8a1c4a;
        }
        
        /* Password Modal */
        .password-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 182, 193, 0.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 100;
            transition: opacity 0.5s ease;
        }
        
        .password-content {
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 90%;
            animation: bounceIn 1s forwards;
        }
        
        .password-content h2 {
            font-family: 'Dancing Script', cursive;
            font-size: 32px;
            margin-bottom: 20px;
            color: #d81b60;
        }
        
        .password-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ffb7c5;
            border-radius: 10px;
            margin-bottom: 15px;
            font-size: 16px;
            text-align: center;
            outline: none;
            transition: border-color 0.3s;
        }
        
        .password-input:focus {
            border-color: #d81b60;
        }
        
        .submit-btn {
            background: #d81b60;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s, transform 0.2s;
        }
        
        .submit-btn:hover {
            background: #b71550;
            transform: scale(1.05);
        }
        
        /* Welcome Screen */
        .welcome-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ffd1dc, #ffb7c5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99;
            transition: opacity 0.8s ease;
        }
        
        .welcome-message {
            font-family: 'Dancing Script', cursive;
            font-size: 48px;
            color: #d81b60;
            text-align: center;
            animation: pulse 2s infinite, float 3s ease-in-out infinite;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        /* Main Content */
        .container {
            width: 100%;
            max-width: 900px;
            padding: 20px;
            margin-top: 50px;
        }
        
        .tabs {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }
        
        .tab {
            background: rgba(255, 255, 255, 0.7);
            border: none;
            padding: 12px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            color: #d81b60;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .tab:hover {
            background: rgba(255, 255, 255, 0.9);
            transform: translateY(-3px);
        }
        
        .tab.active {
            background: white;
            color: #d81b60;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .content-area {
            background: white;
            border-radius: 20px;
            padding: 30px;
            min-height: 400px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .tab-content {
            display: none;
            animation: fadeIn 0.5s ease forwards;
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* Love Letter Tab */
        .letter {
            padding: 20px;
            background: #fff5f7;
            border-radius: 15px;
            border: 2px dashed #ffb7c5;
            margin-bottom: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .letter-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .letter h3 {
            font-family: 'Dancing Script', cursive;
            font-size: 28px;
            color: #d81b60;
        }
        
        .letter-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease;
        }
        
        .letter.expanded .letter-content {
            max-height: 500px;
        }
        
        /* Music Tab */
        .song {
            background: #f8e8ee;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .song-icon {
            font-size: 24px;
            color: #d81b60;
        }
        
        .song-info h4 {
            font-size: 18px;
            margin-bottom: 5px;
        }
        
        .song-info p {
            color: #888;
            font-size: 14px;
        }
        
        /* Notes Tab */
        .note {
            background: #fce4ec;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            border-left: 4px solid #d81b60;
        }
        
        /* Gallery Tab */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .gallery-item {
            border-radius: 10px;
            overflow: hidden;
            height: 200px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: scale(1.05);
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        /* Decorative Elements */
        .heart, .teddy-bear {
            position: absolute;
            z-index: -1;
            opacity: 0.2;
            pointer-events: none;
        }
        
        .heart {
            color: #d81b60;
            font-size: 24px;
            animation: float 6s ease-in-out infinite;
        }
        
        .teddy-bear {
            font-size: 32px;
            animation: float 8s ease-in-out infinite;
        }
        
        /* Animations */
        @keyframes bounceIn {
            0% { transform: scale(0.8); opacity: 0; }
            60% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .welcome-message {
                font-size: 36px;
            }
            
            .tabs {
                flex-direction: column;
                align-items: center;
            }
            
            .tab {
                width: 100%;
                justify-content: center;
            }
            
            .gallery {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <!-- Password Modal -->
    <div class="password-modal" id="passwordModal">
        <div class="password-content">
            <h2>Enter the secret code</h2>
            <input type="password" class="password-input" id="passwordInput" placeholder="Our special word...">
            <button class="submit-btn" id="submitPassword">Enter</button>
        </div>
    </div>
    
    <!-- Welcome Screen -->
    <div class="welcome-screen" id="welcomeScreen">
        <h1 class="welcome-message">Welcome my love, enjoy your stay</h1>
    </div>
    
    <!-- Main Content -->
    <div class="container" id="mainContent" style="display: none;">
        <div class="tabs">
            <button class="tab active" data-tab="love-letter">
                <span>❤️</span> Love Letter
            </button>
            <button class="tab" data-tab="music">
                <span>🎵</span> Music
            </button>
            <button class="tab" data-tab="notes">
                <span>📝</span> Notes
            </button>
            <button class="tab" data-tab="gallery">
                <span>🌷</span> Gallery
            </button>
        </div>
        
        <div class="content-area">
            <!-- Love Letter Tab -->
            <div class="tab-content active" id="love-letter">
                <h2>My Dearest</h2>
                <div class="letter" id="loveLetter">
                    <div class="letter-header">
                        <h3>A Letter For You</h3>
                        <span>👇 Click to open</span>
                    </div>
                    <div class="letter-content">
                        <p>My love,</p>
                        <p>Every day with you feels like a beautiful dream that I never want to wake up from. Your smile brightens my darkest days, and your laughter is my favorite melody.</p>
                        <p>I cherish every moment we spend together, from our silly inside jokes to our deep conversations under the stars. You've shown me what true happiness feels like, and I'm forever grateful to have you in my life.</p>
                        <p>No matter where life takes us, always remember that my heart belongs to you.</p>
                        <p>Forever yours,</p>
                        <p>Me</p>
                    </div>
                </div>
            </div>
            
            <!-- Music Tab -->
            <div class="tab-content" id="music">
                <h2>Songs that remind me of you</h2>
                <div class="song">
                    <div class="song-icon">🎵</div>
                    <div class="song-info">
                        <h4>Hiwaga</h4>
                        <p>by Tatin DC</p>
                    </div>
                </div>
                <div class="song">
                    <div class="song-icon">🎵</div>
                    <div class="song-info">
                        <h4>Wish</h4>
                        <p>by 16</p>
                    </div>
                </div>
            </div>
            
            <!-- Notes Tab -->
            <div class="tab-content" id="notes">
                <h2>Some reminders</h2>
                <div class="note">
                    <p>Take care always</p>
                </div>
                <div class="note">
                    <p>Eat on time</p>
                </div>
                <div class="note">
                    <p>You're mine.. always</p>
                </div>
            </div>
            
            <!-- Gallery Tab -->
            <div class="tab-content" id="gallery">
                <h2>Flowers for you</h2>
                <div class="gallery">
                    <div class="gallery-item">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1eaad721-3375-4d97-a5fa-cbf8a87d60b8.png" alt="Bouquet of delicate pink roses with soft green leaves">
                    </div>
                    <div class="gallery-item">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73632299-5dde-4ded-805a-88a7dcb4b5e4.png" alt="Beautiful pink tulips in a glass vase with morning dew">
                    </div>
                    <div class="gallery-item">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e9890063-b481-46f6-97a1-9fc753211e19.png" alt="Fluffy pink peony flowers with lush foliage">
                    </div>
                    <div class="gallery-item">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4bc3dffd-4971-4223-b7e4-3699d2b97bbe.png" alt="Branch of pink cherry blossoms against a blue sky">
                    </div>
                    <div class="gallery-item">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0daff3c-1751-492b-9b74-de28ac48d384.png" alt="Cluster of light pink carnations with delicate petals">
                    </div>
                    <div class="gallery-item">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/51f3ca74-2471-403f-bb99-751536acd7d9.png" alt="Vibrant pink azalea flowers covering a garden bush">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="heart" style="top: 10%; left: 5%;">❤️</div>
    <div class="heart" style="top: 20%; right: 10%;">❤️</div>
    <div class="heart" style="bottom: 15%; left: 15%;">❤️</div>
    <div class="teddy-bear" style="top: 30%; left: 10%;">🧸</div>
    <div class="teddy-bear" style="bottom: 10%; right: 5%;">🧸</div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Password check
            const passwordModal = document.getElementById('passwordModal');
            const welcomeScreen = document.getElementById('welcomeScreen');
            const mainContent = document.getElementById('mainContent');
            const passwordInput = document.getElementById('passwordInput');
            const submitPassword = document.getElementById('submitPassword');
            
            submitPassword.addEventListener('click', function() {
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
            
            // Allow Enter key to submit password
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    submitPassword.click();
                }
            });
            
            // Tab switching
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Update active tab
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding content
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === targetTab) {
                            content.classList.add('active');
                        }
                    });
                });
            });
            
            // Expandable love letter
            const loveLetter = document.getElementById('loveLetter');
            loveLetter.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
            
            // Add floating decorative elements
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
    </script>
</body>
</html>
