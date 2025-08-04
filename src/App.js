import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-detail" element={<Navigate to={"/"} />} />
          <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;