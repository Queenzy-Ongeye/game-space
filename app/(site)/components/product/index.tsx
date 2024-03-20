import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "@/app/(site)/styles/product.module.css"
import { addToCart } from "@/app/(site)/redux/cart.slice";
interface IProcduct {
  product: any;
}
const ProductCard = ({ product }: IProcduct) => {
  const dispatch = useDispatch();
  return (
    <div key={product.id}>
      <Image
        src={product.image}
        alt={"product Image"}
        height={300}
        width={220}
      />
      <h4>{product.product}</h4>
      <h5>{product.category}</h5>
      <p>Ksh. {product.price}</p>
      <button className={styles.button} onClick={() => dispatch(addToCart(product))}>
        Add to basket
      </button>
    </div>
  );
};

export default ProductCard;
