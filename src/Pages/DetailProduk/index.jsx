import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "White Red",
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/25/e9d519b9-08a5-483d-82f6-40df4800a0fe.png",
    price: 450000,
  },
  {
    id: 2,
    name: "White Blue",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/2/7/1472e587-aa8b-4b2b-b1f2-a24b9beb51d9.jpg",
    price: 450000,
  },
  {
    id: 3,
    name: "Cream",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/2/7/106dc677-fbcb-4c6d-a2af-17b4d9cbb662.jpg",
    price: 420000,
  },
  {
    id: 4,
    name: "Black white",
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/25/4d2f1fa6-1241-4382-b47d-4ffa0a220094.png",
    price: 470000,
  },
  {
    id: 5,
    name: "Money Hat",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/1/25/0f8a9dc6-1f56-429d-9df0-a5f4be98b7c2.jpg",
    price: 250000,
  },
  {
    id: 6,
    name: "Pablo Tshirt",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/11/22/223bf35f-8e09-4f9d-abd6-ee1a31f6a71e.jpg",
    price: 400000,
  },
  {
    id: 7,
    name: "Boy Pablo Socks",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/11/21/72951bdd-afd0-4694-9733-ca6524aef83a.jpg",
    price: 300000,
  },
  {
    id: 8,
    name: "Blue Sky",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/8/16/1e2a1172-ef61-4455-8fd5-480821f5ff3d.png",
    price: 550000,
  },
  {
    id: 9,
    name: "Capuccino",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/8/16/4888be5a-ae45-48a6-8930-635f4b8044e2.png",
    price: 550000,
  },
  {
    id: 10,
    name: "Redgum",
    image:
      "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/8/16/f022c412-2ded-48e4-be1f-6f3d76df7588.png",
    price: 550000,
  },
  {
    id: 11,
    name: "Wafer Maroon",
    image:
      "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/4/12/47139518-c292-4f44-b839-3bfa47878059.png",
    price: 550000,
  },
  {
    id: 12,
    name: "Wafer Green",
    image:
      "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/4/12/789a320c-855e-41c3-95f8-b426489dcdea.png",
    price: 550000,
  },
];
const DetailProduk = () => {
  const { idProduk } = useParams();
  const produk = products.find((product) => product.id == idProduk);
  return (
    <div>
      <p>{produk.name}</p>
      <p>{produk.price}</p>
    </div>
  );
};

export default DetailProduk;
