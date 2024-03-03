import React, { useEffect, useState } from "react";
import Image from "./Image";
import { useFavorites } from "./FavoritesContext";

const ImageList: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const { favorites } = useFavorites();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      const data = await response.json();
      setImages(data);
      localStorage.setItem("allImages", JSON.stringify(data));
    };

    fetchImages().catch(console.error);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="ImageList">
      {images.map((image) => (
        <Image
          key={image.id}
          {...image}
          isFavorite={favorites.includes(image.id)}
        />
      ))}
    </div>
  );
};

export default ImageList;
