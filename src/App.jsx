import { useState } from "react";

import ProductList from "./components/ProductList";

import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

import products from "./constants/products";

function App() {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const findProduct = (id) => products.find((product) => product.id === id);

  const handleClickView = (productId) => {
    setProduct(productId);
  };

  const handleClickCart = (productId) => {
    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      const newCart = cart.map((product) => {
        if (product.id === productId) {
          product.amount++;
          return product;
        }

        return product;
      });
      setCart(newCart);
    } else
      setCart([
        ...cart,
        {
          ...findProduct(productId),
          amount: 1,
        },
      ]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-purple-700 text-3xl font-bold text-center pt-5">
        Điện thoại
      </h1>
      <Cart cart={cart} />
      <ProductList
        products={products}
        onClickView={handleClickView}
        onClickCart={handleClickCart}
      />
      {product && <ProductDetail product={findProduct(product)} />}
    </div>
  );
}

export default App;
