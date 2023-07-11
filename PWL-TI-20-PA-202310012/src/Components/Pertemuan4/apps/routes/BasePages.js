import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../modules/components/Homes/Home'
import MasterData from '../../modules/components/Master-Data/MasterData'
import DetailProducts from '../../modules/components/Master-Data/modules/DetailProducts/DetailProducts'
import Pilihan from '../../modules/components/Master-Data/modules/products/Pilihan'
import FormPesanan from "../../../Pertemuan4/modules/components/Formulir/FormPesanan"
import Isian from "../../../Pertemuan4/modules/components/Formulir/Isian"
import SparePart from "../../../Pertemuan4/modules/components/Master-Data/SparePart/SparePart"

export default function BasePages() {
  return (
    <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='master-data' element={<MasterData />} >
                <Route path="pilihan" element={<Pilihan />} />
            </Route>
            <Route path="detail" element={<DetailProducts/>}/>      
            <Route path='isian' element={<Isian />}/>
            <Route path='form' element={<FormPesanan/>}/>
            <Route path="sparepart" element={<SparePart/>}/>
        </Routes>
  )
}