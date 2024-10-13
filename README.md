# Personalized News Feed Application

This project is a personalized news feed application built using React and Node.js, which allows users to search for news articles and view full articles based on their preferences. The application tracks user reading behavior by extracting keywords from articles using the KeyBERT library and uses these keywords to refine future article recommendations.

## Features

- **User Authentication**: Login and Signup functionality to manage user accounts.
- **NewsAPI Integration**: Fetches articles from the [NewsAPI](https://newsapi.org/) based on keywords entered by users.
- **Personalization**: Tracks and stores user preferences based on the articles they choose to read.
- **Keyword Extraction**: Uses the KeyBERT library to extract relevant keywords from articles.
- **Search**: Simple keyword search functionality for finding articles related to various topics (e.g., "science," "Elon Musk," "technology").
- **User Profile**: Keywords related to the user's reading habits are stored and continuously updated to personalize future article recommendations.
- **MongoDB**: Stores user profiles, article keywords, and search history.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Keyword Extraction**: [KeyBERT](https://github.com/MaartenGr/KeyBERT)
- **API**: [NewsAPI](https://newsapi.org/)
- **Authentication**: JSON Web Tokens (JWT) for secure login and signup

## Setup Instructions

### Prerequisites

1. Node.js (v14.x or later)
2. MongoDB (Local instance or cloud-based like MongoDB Atlas)
3. NewsAPI Key (You can get one [here](https://newsapi.org/))
4. Python (For KeyBERT usage)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/sogalabhi/news-feed.git
    cd news-feed
    ```

2. **Install Dependencies**

    Navigate to both the frontend and backend directories and install the required packages:

    ```bash
    # Frontend setup
    npm i

    # Backend setup
    cd backend
    npm i
    ```

3. **Install KeyBERT**

    To install KeyBERT, make sure Python is installed. Then, run the following:

    ```bash
    pip install keybert
    ```

4. **Start the Application**

    ```bash
    # Frontend setup
    npm run dev

    # Backend setup
    cd backend
    nodemon index.js
    # and run the python file in backend folder
    ```

    The frontend will run on `http://localhost:5173` and the backend on `http://localhost:3000`.

## How It Works

1. **User Signup/Login**: Users can create an account and log in to their personalized dashboard.
2. **Search Articles**: Users can search for news articles by entering keywords (e.g., "crypto," "technology").
3. **View Full Article**: When a user clicks on an article card, they are redirected to the full article.
4. **Track Interests**: Each time a user views an article, the KeyBERT library extracts relevant keywords, and the user's interests are updated in the MongoDB database.
5. **Personalized Feed**: Future searches and article suggestions are ranked based on keywords linked to the user's reading habits.

## Future Enhancements

- Implement Redis cache for storing user interests with an eviction policy.
- Add advanced filtering and ranking algorithms for more refined recommendations.
- Optimize the search functionality with better UX/UI.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## Demo video



https://github.com/user-attachments/assets/ac226bbf-b71e-400b-aed4-91d58a93fb41

