"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product";
import styles from "@/app/(site)/styles/shop.module.css";
import { useParams } from "next/navigation";
const CategoryPage = () => {
  // intiliazation of useParams : 
  // useParams, one get easy access to query strings and URL parameters on the client side
  const params = useParams();
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        // filtering through the data to get for the specific category
        const products = data.filter((item: any) => item.category === params.category); // params.category assits in checking the particular category thats's selected in order to fetch it's data
        setProducts(products);
      } catch (error) {
        console.error(error);
        return [];
      }
    };
    fetchProductByCategory()
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {params.category}</h1>
      <div className={styles.cards}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

// export async function getServerSideProps(ctx: any){
//   const category = ctx.query.category
//   const products = await getProductsByCategory(category)
//   return {props : {products}}
// }
