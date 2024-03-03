import React, { useEffect, useState } from "react";
import { useFavorites } from "./FavoritesContext";
import Image from "./Image";

interface ImageType {
  id: number;
  url: string;
}

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const [favoriteImages, setFavoriteImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const allImages = JSON.parse(localStorage.getItem("allImages") || "[]");
    const filteredFavoriteImages = allImages.filter((image: ImageType) =>
      favorites.includes(image.id)
    );

    setFavoriteImages(filteredFavoriteImages);
  }, [favorites]);

  return (
    <div>
      <h2>Favorites</h2>
      <div className="ImageList">
        {favoriteImages.length > 0 ? (
          favoriteImages.map((image) => (
            <Image
              key={image.id}
              id={image.id}
              url={image.url}
              isFavorite={true}
            />
          ))
        ) : (
          <p>No favorite images found.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
