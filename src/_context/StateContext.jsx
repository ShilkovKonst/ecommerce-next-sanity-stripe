"use client";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [product, setProduct] = useState();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQnty, setTotalQnty] = useState(cartItems.length);
  const [qnty, setQnty] = useState(1);

  const increaseQnty = () => {
    setQnty((prev) => prev + 1);
  };
  const decreaseQnty = () => {
    setQnty((prev) => (prev == 1 ? 1 : prev - 1));
  };

  const changeQntyCart = (pr, val) => {
    const newCartItems = cartItems.map((item) => {
      if (item._id === pr._id)
        return {
          ...item,
          quantity:
            val == "inc"
              ? item.quantity + 1
              : val == "dec" && item.quantity > 1
              ? item.quantity - 1
              : 1,
        };
      else return item;
    });
    setCartItems(newCartItems);
  };

  // const decQntyCart = (pr) => {
  //   const newCartItems = cartItems.map((item) => {
  //     if (item._id === pr._id)
  //       return {
  //         ...item,
  //         quantity: item.quantity == 1 ? 1 : item.quantity - 1,
  //       };
  //     else return item;
  //   });
  //   setCartItems(newCartItems)
  // }

  const removeFromCart = (pr) => {
    const newCartItems = cartItems.filter((item) => item._id !== pr._id);
    setCartItems(newCartItems);
  };

  const addToCart = (qnty) => {
    const checkProductCart = cartItems.some((item) => item._id === product._id);

    if (checkProductCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id)
          return {
            ...item,
            quantity: item.quantity + qnty,
          };
        else return item;
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = qnty;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qnty} of ${product.name} added to Cart`);
  };

  useEffect(() => {
    setTotalQnty(cartItems.length);
    cartItems.length > 0 &&
      setTotalPrice(cartItems.reduce((p, c) => p + c.price * c.quantity, 0));
  }, [cartItems]);

  return (
    <Context.Provider
      value={{
        product,
        setProduct,
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQnty,
        qnty,
        setQnty,
        increaseQnty,
        decreaseQnty,
        // decQntyCart,
        addToCart,
        changeQntyCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
