# TimeInsightsAPI (v1)

_current project structure_  

TimeInsightsAPI/
 - public/
    - favicon.ico
    - robots.txt
 - src/
    - components/
        - DashboardCard.jsx
        - DashboardCard.css
        - ProgressRing.jsx
        - ProgressRing.css
        - ErrorBoundary.jsx
    - services/
        - digidates.js
    - utils/
        - dateUtils.js
        - errorHandler.js
    - views/
        - Dashboard.jsx
        - Dashboard.css
    - App.jsx
    - App.css
    - main.jsx
    - index.css
 - ReadMe.md
 - index.html
 - .gitignore
 - package.json
 - vite.config.js

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Additional-Information](#Additional-Info)

## Introduction

TimeInsightsAPI is a repository containing `Time Insights Dashboard` , this is my attempt a creating a modern React-based web application that provides real-time (5-10sec request intervals) data open sourced through [DigiDates.de](digidates.de). This dashboard displays `4` key time related metrics sourced from the DigiDates.de REST API. Built with Vite for optimal performance and development experience, the application features a responsive grid layout, automatic data refresh, and robust error handling. Through clean, minimal, simplistic design this ensures an intuitive user experience on the client side while demonstrating techincal proficiency in React hooks, API integration, and modern JavaScript development practices on the host side.

### Order of Operations : (1-6) Project Execution Overview

*upon launching `npm run dev`*

1. **Entry Point Initialization** : (`index.html` -> `main.jsx`) 
- browser launches and loads `index.html` as the application entry point
- `main.jsx` mounts the React application to the DOM root element
- ErrorBoundary wraps the entire application for graceful error handling

2. **Application Boostrap** : (`main.jsx` -> `App.jsx`)
- `App.jsx` renders the main application structure with header, main content, and footer
- Global CSS styles are applied for consistent theming + responsiveness

3. **Dashboard Initialization** : (`App.jsx` -> `Dashboard.jsx`)
- `Dashboard.jsx` component mounts and initializes state management
- API testing function executes immediately to verify endpoint connectivity

4. **Data Fetching Sequence** : (`Dashboard.jsx` -> `digidates.js`)
- Concurrent API calls via `Promise.all()` to fetch time data from multiple endpoints
- Service functions in `digidates.js` handle API communication and response parsing
- Utility functions from `dateUtils.js` format and process data

5. **Component Rendering** : (`Dashboard.jsx` -> all files in `components/`)
- Conditional rendering based on loading / error states
- Data visualization through specialized components in `ProgressRing.jsx`
- Consistent card-based layout via reusable `DashboardCard.jsx` components

6. **Continuous Operation** :
- `setInterval` in `src\views\Dashboard.jsx` maintains automatic data refresh every 30 seconds
- Real-time updates without requiring page reloads
- Error boundaries captures and display any & all runtime exceptions

## Features

- Real-time Unix Time Display : current timestamp with formatting
- ISO Week Number Tracking : an accurate week calculation with visual presentation
- Leap Year Detection : instant verification of current year's leap status
- Annual Progress Visualization : an animated circular progress indicator showing the (current) year's completion
- Responsive Design : an adaptable grid layout for desktop & mobile
- Automatic Refresh : background data updates
- Error Resilience : comprehensive error handling & coverage
- Modern UI/UX : clean minimalist design with smooth animations + effects
- API monitering : built-in endpoint testing & validation to detect potential issues

## Prerequisites

_Asahi Linux (Fedora)_
- `sudo dnf update`
- `sudo dnf install git`
- `sudo dnf install nodejs`
- `git --version` verifies installation
- `node --version` verifies installation
- `npm --version` verifies installation

_Windows_
- download [Git](https://git-scm.com/downloads) , run installer and follow the setup instructions
- download [Node.js](nodejs.org) , run installer and follow the setup instructions
- open CommandPrompt `Windows + cmd + enter`
- `git --version` verifies installation
- `node --version` verifies installation
- `npm --version` verifies installation

_MacOS_  
- open terminal and enter `brew --version` if exists skip next step
- download [Homebrew](brew.sh) , run installer and follow setup instructions
- open terminal ,`brew install git` , `brew install node`
- `git --version` verifies installation
- `node --version` verifies installation
- `npm --version` verifies installation

## Usage 

_Asahi Linux (Fedora)_
1. `update`

_Windows_
1. `update`

_MacOS_
1. `cd` into desired location locally to store project
2. `git clone` the repository locally , cd in  
3. `npm install` for any dependencies  
4. `npm run dev` to start & launch development server (localhost:3000)
5. inspect output within browser's console for debugging

## Additional-Info

This portion is for logging or storing notes relevent to the project and its scope. Future implementations I would like to create a setup script that automatically downloads dependencies and prerequisites to make it easier for the user (a faster seamless experience).
