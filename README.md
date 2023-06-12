
# README

This README would normally document whatever steps are necessary to get the
application up and running.

# Introduction:
    - The project is a web application that aims to provide users with a platform to share and watch funny movies. It allows users to create an account, login/register, share movie URLs, and view shared movies. The key features of the application include:
        1. User Authentication: Users can create an account, login, and register using their email and password. User authentication ensures secure access to the application and personalization of content.
        2. Movie Sharing: Authenticated users can share movie URLs by submitting the URL through a form. The shared movies are stored and displayed in the application for other users to view.
        3. Notification: After a user shares a movie by submitting the URL, a notification will be displayed to indicate the successful sharing process for other logged-in users.
        4. User Interaction: Users can interact with the shared movies by clicking on them to watch.
        5. Responsive Design: The application is designed to be responsive, adapting to different screen sizes and devices. It provides an optimal user experience on both desktop and mobile devices.
# Prerequisites: To successfully run the project, you will need the following software and tools installed on your system:
    1. Node.js: A JavaScript runtime environment. Version v18.16.0
    2. NPM (Node Package Manager): A package manager for Node.js. Version: Bundled with Node.js (no specific version required).
    6. Docker: A platform for containerization. Latest stable version
    7. Docker Compose: A tool for defining and managing multi-container Docker applications. Latest stable version (usually bundled with Docker)
# Installation & Configuration: To install and configure a Ruby on Rails project, follow these step-by-step instructions:
    * There are two common ways to start a FE Shared Videos project: using the built-in npm start or using Docker.
        1. Starting the Project with the Built-in npm start follow the steps below:
            - Clone the repository: git clone <repository_url>
            - Install Node.js: https://nodejs.org/en, Version v18.16.0
            - Install project dependencies:
                - Navigate to the project directory: cd <project_directory>
                - Run the following command to install project dependencies specified in the package.json: npm install
            - Change variable REACT_APP_CABLE_SERVER_URL and REACT_APP_API_URL in file .env for match the url api
            - Start the project: npm start, default start with port 3001, change port in package.json at locate the "scripts" section.
            - The server will start running on http://localhost:3001, and you can access the application in your web browser.
        2. Starting the Project with Docker:
            - Ensure that Docker is installed on your system. You can check by running docker --version.
            - Build the Docker image by running the following command: 'docker build -t feapp .' or 'docker-compose build'
            - Start the Docker containers by running the following command: docker-compose up
            - The containers will start running, and you can access the application in your web browser at http://localhost:3001
# Running the Application: following two common ways:
    1. Starting the Project with the Built-in npm server
    2. Starting the Project with Docker
    3. Run the test suite: following command: npm test
# (BE/FS) Docker Deployment:    
# Usage: Here's a brief guide on how to use the application and some key features to be aware of:
    1. Registration and Login:
        * To access the application, users need to enter email and password information. Click on the "Login / Register" button and provide the required information.
        * After Login / Register, user can share videos.
    2. Home Page:
        * The home page may display Viewing a list of shared videos
    3. Sharing Videos:
        * Users can share videos by clicking on the "Share a movie" button.
        * Provide the URL or embed code of the video and any additional details required.
        * Upon successful sharing, a notification or confirmation message will be displayed.
    4. Notification:
        * When a user shares a new video successful, other logged-in users should receive a real-time notification about the newly shared video.  
    5. Viewing Videos:
        * Clicking on a video thumbnail or title will take the user to the video player page.
    6. Logging Out:
        * To log out of the application, users can click on the "Logout" button.
# Troubleshooting:
    1. Dependency Issues:
        * Problem: Missing or incompatible dependencies can cause installation or runtime errors.
        * Solution: Ensure that you have installed all the required dependencies and their appropriate versions. Review the project documentation or README file for the specific dependencies and versions needed.
    2. Can contact me: skype: bach.truong1 or Phone: 0379918661.