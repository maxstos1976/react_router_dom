import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Carregando produtos...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: "250px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
          <h3 style={{ fontSize: "1rem", margin: "10px 0" }}>
            {product.title}
          </h3>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
            ${product.price}
          </p>
          <p style={{ fontSize: "0.85rem", color: "#666" }}>
            {product.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
