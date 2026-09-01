# Charming Home Finder

Create a modern, high-converting Real Estate & Property Management Web Platform. The project must be structured using standard, clean, and modular HTML, CSS (or Tailwind CSS), and plain JavaScript so that the entire repository can be easily exported and opened in VS Code.

1. Visual Style & UI/UX

Design Aesthetic: Premium, sleek, modern SaaS style. Soft subtle shadows, generous whitespace, rounded corners (rounded-xl), smooth hover states, and modern typography.

Color Palette: Deep Navy Slate for header/accents, Crisp White background cards, Light Gray structural backgrounds, and Electric Indigo/Blue for primary CTAs and active states.

Responsiveness: 100% responsive across mobile, tablet, and desktop viewports with a sticky navigation bar.

2. Core Layout & Features

Hero Search Section:

Interactive filter bar allowing users to input Location, Property Type (Apartment, Villa, Commercial), Min/Max Price Range, and Bedroom count.

Search button that dynamically filters the listed properties without reloading the page.

Property Recommendation Grid:

Grid of property cards showing HD property images, price badges, address, key specs (Beds, Baths, Sqft), and two interactive buttons: "View Details" and "Schedule Visit".

Interactive "Like / Favorite" heart toggle on each card.

Interactive Visit Scheduling Modal:

Clicking "Schedule Visit" opens a pop-up modal overlay containing a date picker, time selector, name, phone number, and a confirm button.

Submitting the form shows a temporary toast notification or inline confirmation message ("Tour Requested Successfully!").

AI Lead Qualifier / Chat Sidepanel:

Fixed or collapsible bottom-right chat widget UI.

Pre-populated with initial greeting messages filtering serious buyers (e.g., asking for budget and timeline).

Functional message input area that appends user messages to the chat history and generates sample dynamic AI agent replies.

Interactive Data Dashboard (Agent View Toggle):

A quick toggle switch at the top to view "Agent Dashboard" showing lead status (Hot, Warm, Unqualified), booked tours, and lead follow-up reminders.

3. Code Architecture Requirements

Use plain, easy-to-read DOM manipulation JavaScript for all interactivity (modal toggles, chat input handling, card filtering, and notifications).

Keep scripts modular and structured so the generated codebase exports cleanly into standard index.html, styles.css, and script.js files for seamless local editing in VS Code.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bb560ae0-e236-42c8-af88-dba526bf28cc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
