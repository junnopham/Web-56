import Button from "./Button";

const ProductItem = ({ product, onClickView, onClickCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg outline outline-1 outline-gray-500 pt-2">
      <img className="w-full" src={product.img} alt={product.name} />
      <div className="px-6 py-2">
        <div className="font-bold text-xl">{product.name}</div>
      </div>
      <div className="px-5 pt-2 pb-2">
        <button
          className="btn btn-blue rounded-lg mr-2"
          onClick={() => onClickView(product.id)}
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-red rounded-lg"
          onClick={() => onClickCart(product)}
        >
          Xem giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
