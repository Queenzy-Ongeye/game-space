"use client"
import React, { useEffect, useState } from "react";
import styles from "@/app/(site)/styles/shop.module.css";
import ProductCard from "../components/product";


const ShopPage = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        // filtering through the data to get for the specific category
        const products = data.filter((item: any) => item.category);
        setProducts(products);
      } catch (error) {
        console.error(error);
        return [];
      }
    };
    fetchProductByCategory();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
