import React from "react";
import Image from "next/image"
import Link from "next/link";
import styles from "@/app/(site)/styles/category.module.css"
interface ICategoryCard {
  image: any;
  name: string;
}

const CategoryCard = ({ image, name }: ICategoryCard) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        alt="Product Image"
        src={image}
        height={300}
        width={500}
      />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
