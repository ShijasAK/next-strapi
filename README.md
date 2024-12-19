
Features :

Dynamic Content Updates: 

Any data changes in Strapi instantly reflect on the frontend.

Headless CMS Integration: 

Strapi serves as the backend for content management.

Next.js Framework: 

Utilized for its server-side rendering (SSR) and static site generation (SSG) capabilities.

Scalable Architecture: 

Clean separation of frontend and backend logic for scalability and maintainability.

Technologies Used :

Frontend: Next.js
Backend: Strapi Headless CMS
Database: PostgreSQL
Styling: CSS/SCSS
Deployment: Vercel
Setup Instructions
Prerequisites
Node.js and npm installed on your machine
Strapi and Next.js installed globally

Steps to Run the Project :

Clone the Repository
bash
Copy code
git clone <repository-URL>
cd <repository-folder>
Install Dependencies

For the Strapi backend:

bash
Copy code
cd backend-strapi
npm install
npm run develop

For the Next.js frontend:

bash
Copy code
cd frontend
npm install
npm run dev
Run the Project

Start both the backend and frontend servers.
Access the frontend at http://localhost:3000.
Access the Strapi admin panel at http://localhost:1337/admin.

Usage :

Log in to the Strapi admin panel.
Add or update content in the Strapi CMS.
Refresh the frontend to see the updated content dynamically.

Project Goals :

Create a dynamic website using Next.js.
Leverage Strapi's content management capabilities for a user-friendly backend.
Simplify website updates without requiring code changes.

Acknowledgments :

The Next.js Documentation

The Strapi Documentation
