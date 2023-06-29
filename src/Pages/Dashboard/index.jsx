import React from "react";
import Card from "../../Components/Card";
import "./dashboard.css";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

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

const Dashboard = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [typeSort, setTypeSort] = useState("asc");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [page, setPage] = useState(1);

  const [newProduct, setNewProduct] = useState();
  const [cart, setCart] = useState([]);
  const [editedProduct, setEditedProduct] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);

  {
    editedProduct && (
      <form
        className="card dialog"
        onSubmit={(e) => {
          e.preventDefault();
          setPlanets(
            products.map((product) =>
              product.id === editedProduct.id ? editedProduct : product
            )
          );
          setEditedProduct();
        }}
      >
        <h1>Edit Planet</h1>
        <label>
          ID
          <input type="text" value={editedProduct.id} readOnly />
        </label>
        <label>
          Nama
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            required
            autoFocus
          />
        </label>
        <label>
          Diameter
          <input
            type="number"
            value={editedProduct.diameter}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                diameter: parseFloat(e.target.value),
              })
            }
            required
          />
        </label>
        <div>
          <button onClick={() => setEditedProduct()}>Batal</button>
          <button>Simpan</button>
        </div>
      </form>
    );
  }

  {
    newProduct && (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlanets([...planets, newProduct]);
          setNewProduct();
          setIdSequence(idSquence + 1);
        }}
      >
        <h1>Tambah Planet</h1>
        <label>
          ID
          <input type="text" value={newProduct.id} readOnly />
        </label>
        <label>
          Nama
          <input
            type="text"
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            required
            autoFocus
          />
        </label>
        <label>
          Diameter
          <input
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            required
          />
        </label>
        <div>
          <button onClick={() => setNewProduct()}>Batal</button>
          <button>Simpan</button>
        </div>
      </form>
    );
  }

  //className="card dialog"
  <div>
    <button onClick={() => setIsCartOpen(false)}>
      <MdClose />
    </button>
    <h1>Keranjang</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Jumlah</th>
          <th>Tindakan</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.count.toLocaleString()}</td>
            <td>
              <button
                onClick={() => {
                  if (product.count > 1) {
                    // menggunakan indeks:
                    // setCart(
                    //   cart.with(i, { ...product, count: product.count - 1 })
                    // );
                    // menggunakan ID product:
                    setCart(
                      cart.map((p) =>
                        p.id === product.id ? { ...p, count: p.count - 1 } : p
                      )
                    );
                  } else {
                    setCart(cart.filter((p) => p.id !== product.id));
                  }
                }}
                title="Kurangi"
              >
                <AiOutlineMinusCircle />
              </button>
              <button
                onClick={() => {
                  setCart(
                    cart.map((p) =>
                      p.id === product.id ? { ...p, count: p.count + 1 } : p
                    )
                  );
                }}
                title="Tambah"
              >
                <AiOutlineMinusCircle />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;

  // menginisialisai useNavigate agar bisa digunakan
  const navigate = useNavigate();

  // sorting product berdasarkan sortBy dan typeSort
  let productBiasa = products
    .toSorted((a, b) => {
      if (typeSort == "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
      // setelah disorting product akan di filter berdasarkan kondisi pencarian, minimal price, dan maksimal price
    })
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchProduct) &&
        product.price > minPrice &&
        product.price < maxPrice
    );

  //  function untuk menavigasi ke detail produk
  const toDetailProduk = (e) => {
    // cara navigasi router melalui function
    navigate(`/detail-produk/${e}`);

    //e merupakan id produk yang akan dikirim melalui router params
  };

  return (
    <div>
      <div className="wrapper-action">
        <button>
          <AiOutlinePlus /> Buat
        </button>
        <div className="wrapper-cari">
          <label>Cari Produk</label>
          <input
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
        <div className="wrapper-cari">
          <label>Minimal Harga</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="wrapper-cari">
          <label>Maksimal Harga</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => {
              e.target.value
                ? setMaxPrice(e.target.value)
                : setMaxPrice(Infinity);
            }}
          />
        </div>
        <div className="wrapper-cari">
          <label>Sorting By</label>
          <select
            name="sortingBy"
            id="sortingBy"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="name">Nama Produk</option>
            <option value="price">Harga Produk</option>
          </select>
        </div>

        <div className="wrapper-cari">
          <label>Type Sort</label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setTypeSort(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <button>
          <BsFillCartPlusFill />
        </button>
      </div>

      {/* <button onClick={() => setIsCartOpen(true)}>
        Keranjang: {cart.reduce((a, p) => a + p.count, 0)}
      </button> */}

      <div className="wrapper-product">
        {
          // sebelum ditampilkan, di filter terlebih dahulu berdasarkan page
          // 4 disini adalah berapa product yang ditampilkan di setiap pagenya
          // _product adalah variabel param yang tidak digunakan maka ditambah _ didepan nama variabelnya
          productBiasa
            .filter((_product, i) => i < 4 * page && i >= 4 * page - 4)
            .map((product) => {
              return (
                <Card key={product.id}>
                  <img
                    className="card-img"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="card-name">{product.name}</p>
                  <p className="card-price">
                    Rp. {product.price.toLocaleString("Id-ID")}
                  </p>

                  <button
                    onClick={() => {
                      // const index = cart.findIndex((p) => p.id === product.id);
                      // if (index < 0) {
                      //   setCart([...cart, { ...product, count: 1 }]);
                      // } else {
                      //   setCart(
                      //     cart.with(index, {
                      //       ...cart[index],
                      //       count: cart[index].count + 1,
                      //     })
                      //   );
                      // }
                      if (cart.find((p) => p.id === product.id)) {
                        setCart(
                          cart.map((p) =>
                            p.id === product.id
                              ? {
                                  ...p,
                                  count: p.count + 1,
                                }
                              : p
                          )
                        );
                      } else {
                        setCart([...cart, { ...product, count: 1 }]);
                      }
                    }}
                    title="Tambahkan ke keranjang"
                  >
                    <BsFillCartPlusFill />
                  </button>

                  <button
                    onClick={() => setEditedProduct(product)}
                    title="Edit"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() =>
                      confirm(`Apakah Anda yakin ingin menghapus?`) &&
                      products.filter((p) => p.id !== product.id)
                    }
                    title="Hapus"
                  >
                    <MdDelete />
                  </button>
                </Card>
              );
            })
        }
      </div>
      {/* tampilan button pagination dan page yang saat ini ditampilkan  */}
      <div className="wrapper-pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page == 1}
          className="btn-pagination"
        >
          <BiArrowToLeft size={16} /> Sebelumnya
        </button>
        <span>{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page == Math.ceil(productBiasa.length / 4)}
          className="btn-pagination"
        >
          Selanjutnya <BiArrowToRight size={16} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
