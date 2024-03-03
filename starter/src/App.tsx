import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ImageList from "./components/ImageList";
import ImageDetail from "./components/ImageDetail";
import Favorites from "./components/Favorites";
import ErrorPage from "./components/ErrorPage";
import { FavoritesProvider } from "./components/FavoritesContext"; // Уверете се дека патеката е точна

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ImageList />} />
          <Route path="/imageDetail/:id" element={<ImageDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
