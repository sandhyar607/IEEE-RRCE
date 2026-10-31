# IEEE RRCE -- Digital Innovation Hub 🚀

A modern digital platform for the IEEE Student Branch at Raja Rajeswari
College of Engineering (RRCE). The platform is designed to connect
students, encourage innovation, support collaboration, and provide
access to technical learning and opportunities.

## Project Overview

The IEEE RRCE Digital Innovation Hub brings IEEE activities and student
innovation resources together in one place. Students can explore events,
discover projects, connect with peers and mentors, and access learning
resources.

## Key Features

### Main Website

-   Home page and introduction to IEEE RRCE
-   About, team, events, publications, achievements, opportunities,
    membership, and contact sections
-   Responsive navigation and modern user interface

### AI-Powered Features

-   **AI Assistant:** Helps answer IEEE-related questions and guide
    students.
-   **AI Project Idea Generator:** Suggests project ideas, objectives,
    and suitable technologies.
-   **AI Learning Mentor:** Supports learning paths and career
    exploration.
-   **AI Research Assistant:** Helps students understand and summarize
    research papers.
-   **Smart Team Finder:** Helps students connect based on skills and
    interests.
-   **Event Recommender:** Helps students discover relevant events.
-   **AI Quiz Arena:** Supports interactive technical learning.

### Student Portal

-   New Joiner Portal
-   Member Dashboard
-   Student Portfolio and Project Showcase
-   Digital IEEE Passport
-   Certificates and achievements
-   Mentor Connect

### Administration

-   Admin Dashboard
-   Member and application management
-   Event management
-   Student activity and achievement tracking

> **Implementation note:** Feature availability depends on the current
> application code, backend configuration, and connected services.
> Features that are planned but not yet implemented should be identified
> as future work.

## Technology Stack

-   **Frontend:** React and TypeScript
-   **Styling:** Tailwind CSS and CSS
-   **Build Tool:** Vite
-   **Backend and Database:** Supabase
-   **AI Integration:** Secure server-side AI API integration
-   **Version Control:** Git and GitHub

## Design

-   Navy-blue and cyan visual theme
-   Responsive layouts for desktop, tablet, and mobile
-   Interactive cards and dashboards
-   Modern typography, animations, and transitions

## Getting Started

### Prerequisites

-   Node.js and npm
-   A Supabase project, if the application uses Supabase
-   Required environment configuration for enabled integrations

### 1. Clone the Repository

``` bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Open the Project Folder

``` bash
cd <PROJECT_FOLDER>
```

### 3. Install Dependencies

``` bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and add the Supabase values
required by your application:

``` env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Use the exact variable names expected by your source code. Keep secret
keys and AI provider credentials on the server; never place private API
keys in frontend code or commit them to GitHub.

### 5. Start the Development Server

``` bash
npm run dev
```

Open the local address printed in the terminal.

### 6. Create a Production Build

``` bash
npm run build
```

## Project Objectives

-   Provide a central digital platform for IEEE RRCE activities.
-   Encourage student innovation and technical learning.
-   Support collaboration between students.
-   Offer AI-assisted project and learning guidance.
-   Connect students with mentors and opportunities.
-   Improve awareness and participation in IEEE activities.

## Future Enhancements

-   More advanced AI-powered student assistance
-   Automated event notifications
-   QR-based attendance and certificate verification
-   Personalized learning recommendations
-   Internship, scholarship, and hackathon opportunity tracking
-   Advanced administrative analytics

## Target Users

-   IEEE Student Branch members
-   New joiners
-   Student developers and innovators
-   Faculty coordinators
-   Mentors and administrators

## Institution

**Raja Rajeswari College of Engineering (RRCE)**\
**IEEE Student Branch**

## License

Add the license applicable to this project before distributing or
publishing it publicly.

------------------------------------------------------------------------

**IEEE RRCE -- Connecting Minds. Inspiring Innovation. Engineering
Tomorrow.**
