📱 Calculator – HTML | CSS | JavaScript

A simple, clean, and fully functional calculator web app built using HTML, CSS, and JavaScript.
This calculator supports basic arithmetic operations, input validation, animations, and includes UI features like expand, undo, and a responsive layout.

🚀 Features
✅ Basic Functionalities

Addition, subtraction, multiplication, division

Input through on-screen buttons

Displays real-time typed values

🔄 Undo Function

Removes the last entered number or operator

Helps users correct mistakes quickly

🧮 Smart Input Handling

Prevents invalid sequences (like two operators together)

Tracks whether the last input was a number or an operator using flags (toChack1, toChack2)

✨ UI / UX Features

Clean and modern interface

Button animations

Special “Expand” button to stretch the calculator box

Labels and buttons arranged inside .box and .row structure

Fully responsive for mobile users

🗂️ Project Structure
/Calculator
│── index.html
│── style.css
│── script.js
│── README.md

🧾 How It Works
JavaScript Logic

printMe(btn) handles number input

printMeMath(btn) handles math operators

Flags like:

toChack1 → number pressed

toChack2 → operator pressed

justCalculated → result was recently calculated

lastCalculated → last complete expression solved

Undo feature uses .slice(0, -1) on the display value

Expand button toggles a CSS class to animate the calculator

📦 Setup

No installation required.

Just open index.html in your browser:

Chrome → Right click → Open with Chrome

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & animations

JavaScript (Vanilla JS) – Logic & operations

📸 Screenshots

(Add your own screenshots here)

✍️ Author

Atharv Rameshwar Waste
A learner exploring Web Development, JavaScript, DSA, and Cybersecurity.

⭐ Feedback

If you want, I can also help you:

Improve UI design

Add scientific calculator features

Add dark/light mode

Upload to GitHub Pages

Just tell me!
