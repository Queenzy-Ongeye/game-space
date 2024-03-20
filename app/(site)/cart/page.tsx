"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../redux/auth.slice";
import { Modal, Box, Typography, Button } from "@mui/material";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import { useRouter } from "next/navigation";
import styles from "@/app/(site)/styles/cart.module.css"
import Image from "next/image"

const CartPage = () => {
  const [authDialogOpen, setAuthDialogeOpen] = useState(false);
  const [checkOutDialogOpen, setCheckoutDialogOpen] = useState(false);

  const cart = useSelector((state: any) => state.cart);
  const userState = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter()

  const getTotalPrice = () => {
    return cart.reduce(
      (acc: any, item: any) => acc + item.quantity * item.price,
      0
    );
  };

//   const handleLogin = async () => {
//     dispatch(
//       doLogin({
//         username: "C Ronaldo",
//         phone: "0712345678",
//       })
//     );
//     setAuthDialogeOpen(false);
//   };
  
//   const handleLoginTestAccount = async (e: any) => {
//     e.preventDefault();
//     console.log("@@@");
//     dispatch(
//       doLogin({
//         username: "C Ronaldo",
//         phone: "0712345678",
//       })
//     );
//     setAuthDialogeOpen(false);
//     router.push("/m-auth/authenticate");
//   };
  

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item: any) => (
            <div className={styles.body} key={item.id}>
              <div className={styles.image}>
                <Image
                  src={item.image}
                  alt="Product Image"
                  height="90"
                  width="65"
                />
              </div>
              <p>{item.product}</p>
              <p>Ksh {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>Ksh. {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: Ksh. {getTotalPrice()}</h2>
          {userState.user ? (
            <button onClick={() => setCheckoutDialogOpen(true)}>
              <h2>Checkout With Mpesa</h2>
            </button>
          ) : (
            <button onClick={() => setAuthDialogeOpen(true)}>
              <h2>Login to Checkout</h2>
            </button>
          )}
          <Modal
            open={authDialogOpen || checkOutDialogOpen}
            onClose={() => {
              userState.user
                ? setAuthDialogeOpen(false)
                : setCheckoutDialogOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Log in to your account
              </Typography>
              {/* <Button
                onClick={handleLoginTestAccount}
                sx={{
                  border: "1px solid",
                  marginTop: "1rem",
                }}
              >
                Login with Mpesa
              </Button> */}
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default CartPage;
