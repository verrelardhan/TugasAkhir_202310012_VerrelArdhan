import React, { useState, useEffect } from "react";
import "../../../../components/Master-Data/modules/products/Pilihan.css";
import truk from "../../../../../assets/truk.jpg";
import { Link } from "react-router-dom";

export default function Pilihan() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3003/product");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleClick = (v) => {
    localStorage.setItem("image", v.image);
    localStorage.setItem("price", v.price);
    localStorage.setItem("description", v.description);
  };

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4 ini">
        {data.length > 0 &&
          data.map((v, index) => (
            <Link to={"/detail"} key={index} onClick={() => handleClick(v)}>
              <div class="col">
                <div class="card h-100">
                  <img
                    src={v.image}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "50%" }}
                  />
                  <div class="card-body">
                  <p class="card-text">{v.description}</p>
                    <p class="card-text">Rp. {v.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
