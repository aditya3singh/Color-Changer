# 🎨 Color Scheme Switcher

A simple and interactive project that allows users to switch the background color of the page using clickable color buttons. Built using **HTML**, **CSS**, and **JavaScript**, this is a beginner-friendly project ideal for practicing DOM manipulation and event handling.

---

## 🚀 Features

- Responsive navigation bar with hover effects
- Interactive color buttons
- Smooth transitions and animations
- Clean and minimalistic UI
- Easily extendable with more colors or themes

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/9735bfd8-7df4-48e9-8f9f-1fd3fdfda101)


---

## 🛠️ Tech Stack

- **HTML** – Markup structure
- **CSS** – Styling and layout
- **JavaScript** – Functionality and event handling

---

## 📁 Project Structure

ColorChanger/
│
├── index.html # Main HTML file
├── style.css # Stylesheet
├── color.js # JavaScript logic
└── README.md # Project documentation


---

## 🧠 How It Works

- The page loads with a neutral background.
- When a user clicks a colored button (`span.button`), an event listener captures the `id` of the button and updates the `body` background color accordingly.

```javascript
button.addEventListener('click', function(e){
  body.style.backgroundColor = e.target.id;
});
```

📦 How to Use
->  Clone the repository:git clone https://github.com/aditya3singh/Color-Changer.git
->  cd Color-Changer

Open index.html in any browser.

Click the color buttons to switch themes!


