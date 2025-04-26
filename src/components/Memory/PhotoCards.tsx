import React, { useEffect, useState } from "react";

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotoCards = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=100"
        );

        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Erro ao buscar fotos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <div>Carregando fotos...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {photos.map((photo) => (
        <div
          key={photo.id}
          style={{
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={photo.url}
            alt={photo.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h4 style={{ marginTop: "10px" }}>{photo.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default PhotoCards;
