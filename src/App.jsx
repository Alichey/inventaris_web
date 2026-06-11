import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Pengguna from "./pages/pengguna";
import PenggunaCreate from "./pages/penggunacreate";
import Profil from "./pages/profil";
import Home from "./pages/home";
import PenggunaUpdate from "./pages/penggunaupdate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<Home />}/>
          <Route path="pengguna" element={<Pengguna />}/>
          <Route path="pengguna/tambah" element={<PenggunaCreate />}/>
          <Route path="pengguna/update/:id" element={<PenggunaUpdate />}/>
          <Route path="profil" element={<Profil />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;