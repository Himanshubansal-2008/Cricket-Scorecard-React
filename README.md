# 🏏 Cricket Scorecard App

**[🔴 Live Demo available here](https://cricket-scorecard-react.vercel.app/)**

A beautiful, functional, and fully responsive React application for tracking live cricket matches. It features a premium "glassmorphism" design with intuitive controls for scoring runs, tracking overs, and handling special deliveries easily.

## 🚀 How It Works

The app provides a complete dashboard interface with two primary button panels: **Run Scorers** and **Special Actions**.

### 1. Scoring Runs & Overs Tracking
* **Runs (1 to 6):** Clicking any of the numeric run buttons will instantly add that specific amount of runs to the total `Score`. 
* **Automatic Overs:** Clicking any run button automatically increments the `Balls` tracker. When the `Balls` counter is currently at `6` and another legal delivery is bowled, the app's logic will automatically reset the `Balls` to `0` and increment the `Overs` tracker by `1`.

### 2. Special Deliveries
* **Wide Ball:** Adds `1` penalty run to the total score. Since it is not a legal delivery, it **does not** increase the ongoing balls total.
* **No Ball:** Adds `1` penalty run to the total score. Similar to wide balls, it **does not** increase the balls total.

### 3. Match Events
* **Add Wicket:** Clicking the red alert button increments the `Wickets` falling count. 
* **Restart Match:** This safely resets the entire game state. Pressing it will immediately revert the `Score`, `Balls`, `Overs`, and `Wickets` back to `0`, allowing you to start a fresh match instantly!

## 💻 Development
To run this application locally:

1. Clone the repository.
2. Install dependencies via `npm install`.
3. Start the dev server using `npm run dev`.
