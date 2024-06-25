import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    let res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${currentPage * 10 - 10}`
    );
    res = await res.json();
    setProductList(res.products);
    setTotalPages(Math.ceil(res.total / 10));
  };

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  return (
    <div className="App">
      {productList.map((product) => {
        return (
          <div key={product.id}>
            {product.id} {product.title}
          </div>
        );
      })}
      <div>
        <span onClick={() => handlePageChange(currentPage - 1)}>{"<"}</span>
        {Array(totalPages)
          .fill(null)
          .map((_, index) => (
            <span key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </span>
          ))}
        <span onClick={() => handlePageChange(currentPage + 1)}>{">"}</span>
      </div>
    </div>
  );
}
