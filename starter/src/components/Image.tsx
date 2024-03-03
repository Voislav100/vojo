import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "./FavoritesContext";

interface ImageProps {
  url: string;
  id: number;
  isFavorite?: boolean;
}

const Image: React.FC<ImageProps> = ({ id, url }) => {
  const navigate = useNavigate();
  const { toggleFavorite, favorites } = useFavorites();
  const isFavorite = favorites.includes(id);
  return (
    <div className="Image" onClick={() => navigate(`/imageDetail/${id}`)}>
      <img src={url} alt="Gallery" />
      <i
        className={isFavorite ? "fas fa-heart" : "far fa-heart"}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
        style={{ color: isFavorite ? "tomato" : "gray", cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default Image;
