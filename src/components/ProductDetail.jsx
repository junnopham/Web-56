const ProductDetail = ({ product }) => {
  return (
    <div className="content-start grid grid-cols-2 gap-4 pt-10">
      <div className="px-6 py-4">
        <h3 className="font-bold text-2xl text-center">{product.name}</h3>
        <img src={product.img} className="pt-5" alt={product.name} />
      </div>
      <div className="px-6 pt-4 pb-2">
        <h3 className="font-bold text-xl text-center mb-2">
          Thông số kỹ thuật
        </h3>
        <div className="mb-2">
          <b>Màn hình:</b> {product.info.screen}
        </div>
        <div className="mb-2">
          <b>Hệ điều hành:</b> {product.info.os}
        </div>
        <div className="mb-2">
          <b>Camera trước:</b> {product.info.frontCamera}
        </div>
        <div className="mb-2">
          <b>Camera sau:</b> {product.info.backCamera}
        </div>
        <div className="mb-2">
          <b>RAM:</b> {product.ram}
        </div>
        <div className="mb-2">
          <b>ROM:</b> {product.rom}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
