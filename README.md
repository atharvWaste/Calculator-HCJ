<h1> Calculator – HTML | CSS | JavaScript </h1>

<h2>✍️ Author</h2>
Atharv Rameshwar Waste (Ekalavya)
A learner exploring Web Development, JavaScript, DSA.


A simple, clean, and fully functional calculator web app built using HTML, CSS, and JavaScript.
This calculator supports basic arithmetic operations, input validation, animations, and includes UI features like expand, undo, and a responsive layout.

 <h2> Fatures </h2>
 
<h3> Basic Functionalities </h3>

Addition, subtraction, multiplication, division
Input through on-screen buttons
Displays real-time typed values

<h3>  Undo Function</h3>

Removes the last entered number or operator
Helps users correct mistakes quickly

<h3>  Smart Input Handling</h3>

Prevents invalid sequences (like two operators together)
Tracks whether the last input was a number or an operator using flags (toChack1, toChack2)

<h3>  UI / UX Features</h3>

Clean and modern interface
Button animations
Special “Expand” button to stretch the calculator box
Labels and buttons arranged inside .box and .row structure
Fully responsive for mobile users

<h3>  Project Structure </h3>
/Calculator
│── index.html
│── style.css
│── script.js
│── README.md

<h3>  How It Works</h3>

JavaScript Logic
printMe(btn) handles number input
printMeMath(btn) handles math operators

<h3> Flags like:</h3>

toChack1 → number pressed
toChack2 → operator pressed
justCalculated → result was recently calculated
lastCalculated → last complete expression solved
Undo feature uses .slice(0, -1) on the display value
Expand button toggles a CSS class to animate the calculator

<h3> Setup</h3>

No installation required.
Just open index.html in your browser:
Chrome → Right click → Open with Chrome

<h3> Technologies Used</h3>

HTML5 – Structure

CSS3 – Styling & animations

JavaScript (Vanilla JS) – Logic & operations




<h3> Feedback</h3>

If you want, I can also help you:

Improve UI design

Add scientific calculator features

Add dark/light mode

Upload to GitHub Pages

Just tell me!
