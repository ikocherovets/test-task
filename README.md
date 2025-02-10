# 📝 EVENT BOOKING APPLICATION
This is a responsive and dynamic event booking application designed to streamline the process of signing up for events. Users can select event categories, view available time slots, and sign up for events, while administrators can manage event timeslots.

### 🚀 Main Features


- **User Preferences:** Users can select their preferred event categories (e.g., “Cat 1”, “Cat 2”, “Cat 3”).
- **Calendar View:** The calendar view shows available time slots for events based on selected categories. Users can sign up for events, but currently, users cannot unsubscribe from events once signed up.
- **Time Slot Booking:** Users can sign up for a time slot, but each slot accepts only one user. If a slot is already booked, users cannot sign up for it.
- **Week Navigation:** The calendar view is scoped to a week, and users can navigate between weeks.
- **Event Category Filter:** _Note: The event category filter feature is coming soon and will allow users to filter events based on their selected categories in the calendar view._

### 🛠️ Backend choices/practices

- **JWT Authentication:** I used JSON Web Tokens (JWT) for stateless authentication, improving scalability and reducing server load by storing tokens client-side.
- **django-allauth:** django-allauth is used for handling user authentication, registration, and password management, integrated with django-rest-auth for JWT support.
- **CORS:** CORS settings are configured to allow frontend-backend communication during development. These can be adjusted for production environments.
- **Security Best Practices:** SECRET_KEY and DEBUG settings are carefully managed to ensure security in production.Strong password policies are enforced to enhance user account security.

### 🛠️ Frontend choices/practices

- **Next.js:** I chose Next.js because it offers great performance, scalability, and built-in features like server-side rendering (SSR), static site generation (SSG), and automatic code splitting. Using Next.js helps improve SEO, page load speeds, and the user experience, while simplifying the setup for routing and rendering.
- **Tailwind CSS:** Tailwind CSS was selected for its utility-first approach, which allows for fast styling directly within JSX. It provides a highly customizable, responsive, and efficient CSS framework for building modern web interfaces. Tailwind also reduces the need to write custom CSS and enables a more declarative and consistent UI design.
- **Project Structure: The project is organized into the following key folders:**
  - components: houses all the reusable UI components.
  - hooks: contains custom React hooks for handling reusable logic and state management.
  - services: help to interact with backend APIs.
  - lib: contains utility functions and libraries to handle common tasks, such as API requests.
  - properties / [id] - fetches and displays property details (image, features, landlord, and description) and calculates relevant information for the user. It also includes a reservation sidebar and user-specific data for booking.
  - http://localhost:3000/inbox/test - is a static page that currently displays messages or notifications. WebSockets will be implemented in the future for real-time updates.
  - http://localhost:3000/myreservations - currently displays a static list of reservations made by the user, with plans to become dynamic in the future for real-time updates and interactions.
- **Absolute Imports:** Absolute imports are configured in tsconfig.json to improve the readability and maintainability of import paths. This setup eliminates the need for relative paths like ../../../components/Button, making it easier to navigate through the codebase and improving developer experience.


### 🏗️ Backend Setup (Django with Docker)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ikocherovets/test-task.git
   cd test_task
   ```
2. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```
3. **Ensure you have the .env.dev file with proper configuration.**
4.  **Build and Start Docker Containers:**
   
    ```bash
    docker-compose up --build
    ```
5. **Access the Backend: http://localhost:8000**


### 🎨 Frontend Setup (Next.js)

1. **Install Prerequisites: ensure you have Node.js 18 or higher installed:**

   ```bash
   node -v
   ```
2. **Open another terminal and navigate to the event_booking folder:**

   ```bash
   cd test_task/event_booking
   ```
3. **Install Dependencies:**
   
   ```bash
   npm install
   ```
5.  **Run the Frontend::**
   
    ```bash
    npm run dev
    ```
6. **Access the Frontend: http://localhost:3000**
 




   
