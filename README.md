# Last Bot Standing

## Overview
The **Last Bot Standing** is a chatbot designed with a hidden secret that can only be uncovered through interactions. The bot uses various logic puzzles, riddles, and coded clues to engage users and gradually reveal the secret. This bot was developed using **Dialogflow CX** and integrated into a webpage via **Dialogflow Messenger**.

## Secret Explanation
The secret is hidden within the following riddle:

- **Riddle**: "I have keys but open no locks. What am I?"
  - **Answer**: **Keyboard**

To reveal this secret, the user must first solve this riddle.

## Bot Flow

### 1. **Start Interaction**
When the user presses **Start**, the bot greets them with a welcome message and presents the first challenge.

- **Welcome Message**: "Hello! Ready for a challenge? Let's begin with the first riddle."
- **Riddle**: "I have keys but open no locks. What am I?"
  - **User Input**: The user responds with the answer.
  - **Correct Answer**: "Keyboard"
  - If correct, the bot proceeds to the next challenge.
  - If incorrect, the bot will prompt them to try again.

### 2. **Math Puzzle (after solving the riddle)**
Once the user solves the riddle, the bot presents the next challenge.

- **Message**: "Well done! Here’s your next challenge:"
- **Math Puzzle**: "What comes next in this sequence? 2, 6, 12, 20, __?"
  - **User Input**: The user responds with the answer.
  - **Correct Answer**: "30"
  - If correct, the bot proceeds to the next clue.
  - If incorrect, the bot will ask them to try again.

### 3. **Cipher (Secret Code) Clue (after solving the math puzzle)**
After solving the math puzzle, the bot gives a coded message to solve using a simple cipher.

- **Message**: "Nice job! Now let’s decode this secret message:"
- **Cipher Clue**: "Uif tfdsfu dpef mjhiu"
  - **User Input**: The user decodes the message.
  - **Hint**: This is a Caesar Cipher with a shift of 1. (This means each letter is shifted by 1 in the alphabet).
  - **Correct Answer**: "The secret code is"
  - If correct, the bot reveals the hidden secret.
  - If incorrect, the bot will provide a hint and ask them to try again.

### 4. **Secret Revealed**
Once the user decodes the cipher, the bot reveals the hidden secret:

- **Message**: "Congratulations! You've uncovered the secret: **Keyboard**"

Each challenge is designed to test the user’s ability to solve riddles, math puzzles, and logic problems.
---

## Deployment Link
The bot has been deployed using **Dialogflow Messenger** on a webpage. You can interact with it through the link below:
- **https://67cac1661768e1000803e946--heroic-melomakarona-8b98ea.netlify.app/**

---

## Development Tools & Technologies

- **Dialogflow CX**: Used for chatbot creation and interaction.
- **Dialogflow Messenger**: Used to integrate the bot into the webpage.
- **Morse Code & Riddles**: These were used as part of the bot’s hidden clues.
