import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Cfather from "./views/Cfather";
import DetailPokemon from "./views/DetailPokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/detailpokemon" element={<Cfather />} >
            <Route path=":pokemon" element={<DetailPokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
