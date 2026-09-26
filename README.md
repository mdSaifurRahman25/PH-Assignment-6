# FitLog — Workout Library & Fitness Tracker

FitLog is a dark-themed, no-nonsense gym companion app designed to help fitness enthusiasts pick their daily lifts, lock them into today's plan, track workout metrics, and stay consistent. Built with modern web technologies, it offers a seamless and responsive user experience for managing workout routines.

---

## Live Demo

- Live Site: []
- Repository: [https://github.com/mdSaifurRahman25/PH-Assignment-6]

---

## Key Features

1. Comprehensive Workout Library: Browse 12 major lifts covering every essential muscle group with responsive grid layouts, categorized pills, duration, calorie burn estimations, and ratings.
2. Interactive Daily Plan & Saved List Management: Effortlessly add workouts to "Today's Plan" or save them for later with single-click actions. Includes live update counters in the navigation bar.
3. Dynamic Live Metrics Summary: Real-time metrics calculations (Total Exercises, Total Minutes, Total Calories) that automatically update as workouts are added, completed, or removed from your plan.
4. Smart Sorting & Filtering: Easily sort workouts and saved lists by Duration, Calories Burned, or Rating to quickly tailor your session according to your goals.
5. Fully Responsive Design & UI/UX Feedback: Complete responsive support across Mobile, Tablet, and Desktop screens. Features instant user feedback via toast notifications, loading states, and custom 404 page handling.

---

## Technologies Used

- Framework: Next.js (App Router)
- Language: TypeScript / JavaScript (ES6+)
- Styling: Tailwind CSS
- Icons: React Icons
- Toast Notifications: React-Toastify
- Deployment: Vercel / Netlify / Cloudflare Pages

---

## Getting Started Locally

To run this project on your local machine, follow these simple steps:

### Prerequisites
Make sure you have Node.js installed on your computer.

### Installation

1. Clone the repository:
   git clone https://github.com/mdSaifurRahman25/PH-Assignment-6

2. Navigate to the project directory:
   cd your-repo-name

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev

5. Open your browser:
   Open http://localhost:3000 to view the application.

---

## Project Structure

src/
├── app/
│   ├── layout.tsx         # Root layout with context providers & toast notifications
│   ├── page.tsx           # Home page (Hero section + Library Grid)
│   ├── my-plan/           # My Plan & Saved workouts page
│   ├── workouts/[id]/     # Dynamic Workout details page
│   └── not-found.tsx      # Custom 404 error page
├── components/            # Reusable UI components (Navbar, WorkoutsCard, Footer, etc.)
└── context/               # React Context for global state management (WorkoutContext)

---

## License & Copyright

© 2026 FitLog — Workout Library. All Rights Reserved.  
Train hard, log honest.