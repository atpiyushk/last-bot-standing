# Last Bot Standing

## Overview
The **Last Bot Standing** is a chatbot designed with a hidden secret that can only be uncovered through interactions. The bot uses various logic puzzles, riddles, and coded clues to engage users and gradually reveal the secret. This bot was developed using **Dialogflow CX** and integrated into a webpage via **Dialogflow Messenger**.

## Secret Explanation

- **Start Challenge** → **Riddle** (e.g., "Who is known as the father of modern computing?") → 
- **Math Puzzle** (e.g., "What is 6 + 7?") → **Cipher Clue** (e.g., "Encrypted Message") → 
- **Final Secret Revealed**.

To reveal this secret, the user must first solve this riddle.

## Bot Flow

### 1. **Start Page**
- **Trigger**: The user clicks "Start Challenge."
- **Bot Message**: The bot presents the first riddle to the user.
- **Transition**: Upon receiving the correct answer, the bot moves to the **Riddle Page**. If the answer is incorrect, the bot asks the user to try again.

### 2. **Riddle Page**
- **Trigger**: The user submits an answer to the riddle.
- **Bot Message**: If correct, the bot presents a **math puzzle** to the user. If incorrect, the bot asks for the correct answer or gives a hint.
- **Transition**: If the user answers the math puzzle correctly, the bot moves to the **Math Page**. If the answer is wrong, it will prompt them to try again.

### 3. **Math Page**
- **Trigger**: The user submits the correct answer to the math puzzle.
- **Bot Message**: The bot presents a **cipher clue** that needs to be decoded.
- **Transition**: Upon solving the cipher clue correctly, the bot moves to the **Cipher Page**. If the answer is wrong, the bot will offer hints or prompts the user to retry.

### 4. **Cipher Page**
- **Trigger**: The user solves the cipher clue correctly.
- **Bot Message**: The bot reveals the **final secret message**. The bot may also give an option to restart the challenge or exit the game.

#### Each challenge is designed to test the user’s ability to solve riddles, math puzzles, and logic problems.
---

## Deployment Link
The bot has been deployed using **Dialogflow Messenger** on a webpage. You can interact with it through the link below:
- **https://heroic-melomakarona-8b98ea.netlify.app/**

---

## Development Tools & Technologies

- **Dialogflow CX**: Used for chatbot creation and interaction.
- **Dialogflow Messenger**: Used to integrate the bot into the webpage.
- **Morse Code & Riddles**: These were used as part of the bot’s hidden clues.
