import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ImageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<{
    id: string;
    url: string;
    isFavorite?: boolean;
  } | null>(null);
  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      const images = await response.json();
      const foundImage = images.find((img: { id: string }) => img.id === id);
      setImage(foundImage);
    };

    fetchImage().catch(console.error);
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Image Detail - {image.id}</h2>
      <img
        src={image.url}
        alt={`View of the selected content`}
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
};

export default ImageDetail;
