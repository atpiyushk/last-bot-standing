document.addEventListener('DOMContentLoaded', function () {
    // Theme toggler
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Setting initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Start challenge button
    const startButton = document.getElementById('start-challenge');

    startButton.addEventListener('click', function () {
        // Get the Dialogflow Messenger component
        const dfMessenger = document.querySelector('df-messenger');

        // Explicitly open the chat window by clicking the chat bubble
        const chatBubble = dfMessenger.shadowRoot.querySelector('df-messenger-chat-bubble');
        if (chatBubble && chatBubble.shadowRoot) {
            const bubbleButton = chatBubble.shadowRoot.querySelector('button');
            if (bubbleButton) {
                bubbleButton.click();
            }
        }

        // Setting expand attribute as a fallback
        dfMessenger.setAttribute('expand', 'true');

        // Focus on the input field and send the start message after a delay
        setTimeout(() => {
            try {
                const chatElement = dfMessenger.shadowRoot.querySelector('df-messenger-chat');
                if (chatElement && chatElement.shadowRoot) {
                    const inputField = chatElement.shadowRoot.querySelector('input');
                    if (inputField) {
                        inputField.focus();

                        // Send a start message to trigger the first riddle
                        const messageBus = chatElement.messagebus;
                        messageBus.publish('df-user-input-entered', {
                            input: 'Start Challenge'
                        });
                    }
                }
            } catch (error) {
                console.error('Error focusing on input:', error);
            }
        }, 800); // Increased delay to ensure the chat is fully opened
    });

    // Scroll to the chat area
    dfMessenger.scrollIntoView({ behavior: 'smooth' });
});

// Typewriter effect to the main heading
const mainHeading = document.querySelector('.hero h2');
const originalText = mainHeading.innerHTML;
mainHeading.innerHTML = '';

function typeWriterEffect(element, text, i = 0, speed = 50) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriterEffect(element, text, i, speed), speed);
    }
}

// Starting typewriter effect with a small delay
setTimeout(() => {
    typeWriterEffect(mainHeading, originalText);
}, 500);

// Welcome message when the bot is loaded
window.addEventListener('df-messenger-loaded', () => {
    console.log('Dialogflow Messenger loaded!');

    // Custom styling to the Dialogflow interface
    const dfMessenger = document.querySelector('df-messenger');

    if (dfMessenger) {
        // Custom styling to the chat interface using shadow DOM
        setTimeout(() => {
            try {
                const customStyles = document.createElement('style');
                customStyles.textContent = `
                        .chat-wrapper {
                            border-radius: 20px !important;
                            overflow: hidden;
                        }
                        .chat-wrapper header {
                            background: linear-gradient(135deg, #4a6bff, #7c4dff) !important;
                        }
                        .chat-wrapper header h2 {
                            font-weight: 700 !important;
                        }
                        .chat-bubble {
                            transform: scale(1.05);
                            transition: transform 0.3s ease;
                        }
                        .chat-bubble:hover {
                            transform: scale(1.1);
                        }
                    `;

                const chatRoot = dfMessenger.shadowRoot.querySelector('df-messenger-chat');
                if (chatRoot && chatRoot.shadowRoot) {
                    chatRoot.shadowRoot.appendChild(customStyles);
                }
            } catch (error) {
                console.log('Custom styling could not be applied:', error);
            }
        }, 1000);
    }
});

// Animated background elements
const container = document.querySelector('.container');

function createFloatingElements() {
    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');

        // Random properties
        const size = Math.random() * 20 + 10; // 10-30px
        const posX = Math.random() * 100; // 0-100%
        const posY = Math.random() * 100; // 0-100%
        const duration = Math.random() * 20 + 10; // 10-30s
        const delay = Math.random() * 5; // 0-5s

        // Styles
        element.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
                opacity: 0.1;
                left: ${posX}%;
                top: ${posY}%;
                animation: float ${duration}s ease-in-out ${delay}s infinite;
                z-index: -1;
            `;

        container.appendChild(element);
    }
}

createFloatingElements();

//Confetti animation function (to be triggered when user solves the final puzzle)
window.showConfetti = function () {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Random properties
        const size = Math.random() * 10 + 5; // 5-15px
        const posX = Math.random() * 100; // 0-100%
    }
}
