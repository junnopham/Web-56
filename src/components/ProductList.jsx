import ProductItem from "./ProductItem";

const ProductList = ({ products, onClickView, onClickCart }) => {
  return (
    <div className="content-start grid grid-cols-4 gap-4 pt-10">
      {products.map((product, index) => {
        return (
          <ProductItem
            product={product}
            key={index}
            onClickView={() => onClickView(product.id)}
            onClickCart={() => onClickCart(product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
