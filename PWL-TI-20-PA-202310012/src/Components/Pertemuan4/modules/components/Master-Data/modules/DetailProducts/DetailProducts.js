import React,{useEffect, useState} from "react";
import truk from "../../../../../assets/truk.jpg";
import { Link } from "react-router-dom"; 

export default function DetailProducts(productID) {
  const [data, setData] = useState({});
  const truckImg = localStorage.getItem("image");
  const truckPrice = localStorage.getItem("price");
  const truckDesc = localStorage.getItem("description");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3003/product');
      const jsonData = await response.json();
      setData(jsonData);
    };
    
    fetchData();
  }, []);
  

  return (
    <div style={{ marginTop: "7rem", backgroundColor: "grey", width: "60%", marginLeft: "20%", padding: " 20px 10px 40px 40px", borderRadius: "20px" }}>
      <div style={{textAlign:"center"}}>
        <img src={truckImg} alt=".." style={{borderRadius: "10px"}}/>
      </div>

      <div style={{ marginTop: "5%" }}>
        <p style={{ textAlign: "center" }}>
        {truckDesc}
          <br /> Surat: STNK,FAKTUR,BPKB
          <br /> KAKI-KAKI AMAN, KELISTRIKAN AMAN, SURAT-SURAT AKUR
        </p>
      </div>



      <div>
      <Link to={"/isian"}>
        <a class="btn btn-primary "  role="button" style={{marginLeft: "70%", marginTop: "4%"}}>
          Pesan Sekarang!
        </a>
        </Link>
      </div>
  

    </div>
  );
}
