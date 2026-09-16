🛒 Ecart — Redux Toolkit E-Commerce Cart App

A full-featured e-commerce cart application built with React and Redux Toolkit, featuring real-time cart management, wishlist functionality, and persisted state across page reloads.

🔗 Live Demo: https://ecart-regex.vercel.app/

Features
Cart management — add, remove, and update item quantities in real time
Wishlist — save items for later, separate from the active cart
State persistence — cart and wishlist survive page refreshes via localStorage sync
Live product data — fetched from a REST API using Axios
Client-side routing — seamless navigation between pages with React Router DOM
The Interesting Part

Syncing Redux state with localStorage introduces a subtle problem: on page load, there's a gap between the initial (empty) Redux state and the moment persisted data is rehydrated, which can cause UI flicker or state mismatches.

This was solved using Redux Toolkit's createSlice combined with a custom persistence middleware that:

Reads persisted state from localStorage before the store initializes
Hydrates the Redux store with that state as its initial value (rather than hydrating after mount)
Subscribes to store updates and writes cart/wishlist changes back to localStorage on every relevant action
Tech Stack
Category	Technology
UI Library	React.js
State Management	Redux Toolkit, Redux Thunk
Routing	React Router DOM
HTTP Client	Axios
Styling	Bootstrap
Build Tool	Vite
Getting Started
bash
# Clone the repo
git clone https://github.com/nivakclt/Ecart_Regex.git
cd Ecart_Regex

# Install dependencies
npm install

# Run the dev server
npm run dev

The app will be available at http://localhost:5173 (default Vite port).

Project Structure
src/
├── components/   # Reusable UI components
├── features/     # Redux slices (cart, wishlist, products)
├── pages/        # Route-level views
├── app/          # Store configuration
└── ...
What I Learned

Building this project deepened my understanding of centralized state management, async data flows with Redux Thunk, and what it takes to make a frontend app feel production-ready rather than a tutorial clone — particularly around state persistence and avoiding UI flicker on load.
