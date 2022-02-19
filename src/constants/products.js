import img1 from "../assets/images/iphone.jpeg";
import img2 from "../assets/images/samsung.jpeg";
import img3 from "../assets/images/vivo.jpeg";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy A10",
    price: "40906000",
    img: img1,
    info: {
      screen: "AMOLED Full HD 9.0",
      os: "Android 9.0",
      frontCamera: "20MP",
      backCamera: "Chính 48MB, phụ 30MP",
    },
    ram: "4 GB",
    rom: "64 GB",
  },
  {
    id: 2,
    name: "IPhone 12",
    price: "200306000",
    img: img2,
    info: {
      screen: "Full HD 12.0",
      os: "IOS 14",
      frontCamera: "20MP",
      backCamera: "Chính 100MB, phụ 30MP",
    },
    ram: "16 GB",
    rom: "32 GB",
  },
  {
    id: 3,
    name: "Xiaomi Note 10",
    price: "10005000",
    img: img3,
    info: {
      screen: "OLED 10.0",
      os: "Android 8.0",
      frontCamera: "69MP",
      backCamera: "Chính 96MB, phụ 30MP",
    },
    ram: "10 GB",
    rom: "64 GB",
  },
  {
    id: 4,
    name: "Xiaomi Note 10",
    price: "10005000",
    img: img3,
    info: {
      screen: "OLED 10.0",
      os: "Android 8.0",
      frontCamera: "69MP",
      backCamera: "Chính 96MB, phụ 30MP",
    },
    ram: "10 GB",
    rom: "64 GB",
  },
];

export default products;
