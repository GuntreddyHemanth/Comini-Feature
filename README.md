# Time Well Spent - Chrome Extension

## Overview
The **Time Well Spent** Chrome extension helps users track their browsing habits by distinguishing between focused and distracted activities. At the end of each week, users receive a detailed email report summarizing their productivity and suggesting improvements.

## Key Features

### 📊 Track Time Spent
- Automatically tracks time spent on **focused websites** (e.g., work-related) vs. **distracted websites** (e.g., social media).

### ✉️ Weekly Email Report
- Sends a **weekly email** summarizing browsing habits.
- Provides a **comparison** of focused vs. distracted time.
- Includes **insights and suggestions** for improvement.

### 🎨 Custom Email Template
- Uses a **visually appealing email template** with **charts** and **statistics** to enhance readability.

---

## How It Works

### 1️⃣ User Input
- The user provides their **email address** in the extension popup.

### 2️⃣ Time Tracking
- The extension tracks the user's **browsing activity** in the background.
- Websites are **categorized** as **focused** or **distracted** based on a **predefined list**.

### 3️⃣ Weekly Report Generation
- At the end of the **week**, the extension calculates the total time spent on **focused vs. distracted activities**.
- It generates a **detailed report** and sends it via **email** using an email API (e.g., **SendGrid**).

### 4️⃣ Email Template
- The email includes:
  - A **summary** of the user's activity.
  - A **bar chart** comparing focused vs. distracted time.
  - **Personalized suggestions** to improve productivity.

---

## Challenges Faced

### 1️⃣ Learning Chrome Extensions
**Problem:** I had no prior experience with Chrome extensions, so I had to learn how they work, including the manifest.json file, background scripts, and popup UI.

**Solution:** I used online resources, documentation, and LLMs (like ChatGPT) to understand the basics and implement the extension.

### 2️⃣ Sending Emails
**Problem:** I wanted to send weekly emails to users but didn’t know how to integrate an email API.

**Solution:** I used SendGrid to handle email sending. I learned how to use their API and integrated it into the extension.

### 3️⃣ Content Security Policy (CSP) Issues
**Problem:** The extension failed to load due to CSP errors, especially when trying to load external resources like Google Fonts.

**Solution:** I updated the manifest.json file to include the correct CSP directives, allowing secure resources like https://fonts.googleapis.com.

### 4️⃣ Time Tracking Logic
**Problem:** Implementing accurate time tracking for focused vs. distracted websites was challenging.

**Solution:** I used Chrome's `tabs.onUpdated` API to track website visits and categorized them based on predefined lists.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/time-well-spent.git
   ```
2. Open **Chrome** and go to `chrome://extensions/`
3. Enable **Developer mode** (top right corner)
4. Click **Load unpacked** and select the cloned repository folder

---

## Technologies Used
- **JavaScript (Chrome Extension APIs)**
- **HTML & CSS (Popup UI)**
- **Chart.js (Visualization in emails)**
- **SendGrid (Email API)**
- **LocalStorage (Data Storage)**

---

## Contributing
Contributions are welcome! If you'd like to improve the extension, follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a **Pull Request**

---

## License
This project is licensed under the **MIT License**.

---

## Contact
For any questions or suggestions, feel free to reach out:
- 📧 Email:guntreddyhemanth@gmail.com
- 🐦 Twitter:https://x.com/GuntreddyH88382
- 💼 LinkedIn: https://www.linkedin.com/in/hemanth-guntreddy-536242238/
