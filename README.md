# IMDB Movie App 🎬

A React-based movie discovery application that allows users to browse trending movies, view detailed information, and manage their favorite films. Built using The Movie Database (TMDb) API.

## ✨ Features

- **Browse Trending Movies**: View popular movies with poster images and titles
- **Movie Details**: Click on any movie to see detailed information including overview and backdrop images
- **Pagination**: Navigate through multiple pages of movie results
- **Favorites**: Dedicated section for managing favorite movies (coming soon)
- **Responsive Design**: Clean and intuitive user interface
- **React Router**: Seamless navigation between different views

## 🚀 Live Demo

[Add your deployment link here]

## 🛠️ Technologies Used

- **React 19.1.1** - Frontend framework
- **React Router DOM 7.7.1** - Client-side routing
- **TMDb API** - Movie data source
- **CSS3** - Styling and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
imdb-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── MovieList.jsx       # Display grid of movies
│   │   ├── MovieDetail.jsx     # Individual movie details
│   │   ├── Pagination.jsx      # Page navigation
│   │   └── Favourite.jsx       # Favorites management
│   ├── App.js                  # Main app component with routing
│   ├── App.css                 # Global styles
│   └── index.js               # App entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/byteKumar/IMDB-app.git
   cd imdb-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 📱 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for the best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

## 🔗 API Integration

This app uses The Movie Database (TMDb) API to fetch movie data:

- **Popular Movies Endpoint**: `https://api.themoviedb.org/3/movie/popular`
- **Movie Details Endpoint**: `https://api.themoviedb.org/3/movie/{movie_id}`
- **Image Base URL**: `https://image.tmdb.org/t/p/w500/`

## 🎯 Upcoming Features

- [ ] Add to Favorites functionality
- [ ] Search movies by title
- [ ] Filter movies by genre
- [ ] Movie ratings and reviews
- [ ] User authentication
- [ ] Watchlist management
- [ ] Dark/Light theme toggle

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chaman Kumar**
- GitHub: [@byteKumar](https://github.com/byteKumar)

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [Create React App](https://github.com/facebook/create-react-app) for the initial project setup
- [React Router](https://reactrouter.com/) for routing functionality

---

⭐ Star this repo if you find it helpful!
