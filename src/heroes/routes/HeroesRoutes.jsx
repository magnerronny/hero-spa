import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export default function HeroesRoutes() {
  return (
    <>
      <Navbar/>

      <div>
        <Routes>
          <Route path="/marvel" element = {<MarvelPage/>} />
          <Route path="/dc" element = {<DcPage/>} />

          <Route path="/search" element = {<SearchPage/>} />
          <Route path="/hero/:id" element = {<HeroPage/>} />
          
          <Route path="/" element = {<Navigate to= "/marvel" />} />
        </Routes>
      </div>
    </>
  )
}


