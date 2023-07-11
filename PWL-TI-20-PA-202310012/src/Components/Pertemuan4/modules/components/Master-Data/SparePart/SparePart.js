import React, { useState, useEffect } from "react";
import truk from "../../../../../Pertemuan4/assets/truk.jpg";
import { Link } from "react-router-dom";
import kopling from "../../../../assets/kopling.jpg"
import balljoin from "../../../../assets/balljoin.jpeg"
import axle from "../../../../assets/axle.jpeg"
import perdaun from"../../../../assets/perdaun.jpeg"

export default function DetailProducts(productID) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3003/product");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* <Link to={"/pilihanjasa"}> */}
          <div class="col">
            <div class="card h-100">
              <img src={kopling} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Clutch</h5>
                <p class="card-text">RP.300000</p>
                <a href="https://api.whatsapp.com/send/?phone=0895331115758&text&type=phone_number&app_absent=0" class="btn btn-primary">
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        {/* </Link> */}

        <div class="col">
          <div class="card h-100">
            <img src={balljoin} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">BallJoint</h5>
              <p class="card-text">RP.500000.</p>
              <a href="https://api.whatsapp.com/send/?phone=0895331115758&text&type=phone_number&app_absent=0" class="btn btn-primary">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            
            <img src={axle} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Axle</h5>
              <p class="card-text">RP.700000.</p>
              <a href="https://api.whatsapp.com/send/?phone=0895331115758&text&type=phone_number&app_absent=0" class="btn btn-primary">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={perdaun} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Leaf Srping</h5>
              <p class="card-text">RP.3000000</p>
              <a href="https://api.whatsapp.com/send/?phone=0895331115758&text&type=phone_number&app_absent=0" class="btn btn-primary">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
