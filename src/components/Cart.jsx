import { useState } from "react";

const Cart = ({ cart }) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className="absolute top-15 right-5 cursor-pointer"
        onClick={toggleModal}
      >
        <span className="text-red-500 font-bold text-lg italic">
          Giỏ hàng ({cart?.length || 0})
        </span>
      </div>
      {show && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

          <div className="modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Giỏ hàng</p>
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={toggleModal}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>
              <table className="divide-y divide-gray-300 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">ID</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Tên</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Hình ảnh
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Đơn giá</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Số lượng
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Thành tiền
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {(cart || []).map(
                    ({ id, name, img, price, amount }, index) => {
                      return (
                        <tr className="whitespace-nowrap" key={index}>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {id}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">
                              <img src={img} width="32" alt={name} />
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {price}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {amount}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {price * amount}
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="px-4 py-1 text-sm text-red-600 bg-red-200 rounded-full"
                            >
                              Xoá
                            </a>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>

              <div className="flex justify-end pt-4">
                <button
                  className="modal-close px-4 py-2 bg-indigo-500 rounded-lg text-white text-sm hover:bg-indigo-400"
                  onClick={toggleModal}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
