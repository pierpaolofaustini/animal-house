# Animal House

Animal House is a web application entirely dedicated to the world of animals. 
Divided into three main sections (Game, Front Office, and Back Office), it offers quizzes, funny videos, anecdotes, help requests, and an image recognition service to identify animals in uploaded images.

## Main Features

### Game

Accessible to everyone (even without authentication), it includes:

- Animal quizzes
- Funny animal videos
- Interesting animal facts
- Legal information about animals

### Front Office

Accessible after registration/login, it allows users to:

- Write and read animal anecdotes
- Create help requests for animals and receive contacts via email
- Play quizzes while authenticated and save scores
- View the quiz leaderboard
- Use the image recognition service to identify animals in uploaded images

### Back Office

Accessible only to "managers," it provides moderation features:

- View, edit, and remove anecdotes and help requests
- Manage registered users

## Technologies Used

- **Frontend:** HTML, Bootstrap 5, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** Implemented using `.json` files for testing purposes to speed up development, but it can be easily modified to use a database such as MongoDB
- **AI Image Recognition:** Imagga API

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/animal-house.git
   cd animal-house
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the server:**
   ```bash
   npm start
   ```
4. **Access the application**
   Open your browser and go to `http://localhost:3000`
   
## License

- This app is licensed under the MIT License

## Authors

- Pierpaolo Faustini
- Marco Conti
