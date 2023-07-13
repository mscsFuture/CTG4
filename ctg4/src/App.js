import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Level1 from "./level1/Level1_1";
import Level12 from "./level1/Level1_2";
import Level13 from "./level1/Level1_3";
import Level14 from "./level1/Level1_4";
import Level15 from "./level1/Level1_5";
import Level2 from "./level2/Level2_1";
import Level22 from "./level2/Level2_2";
import Level23 from "./level2/Level2_3";
import Level24 from "./level2/Level2_4";
import Level25 from "./level2/Level2_5";
import Level3 from "./level3/Level3_1";
import Level32 from "./level3/Level3_2";
import Level33 from "./level3/Level3_3";
import Level34 from "./level3/Level3_4";
import Level35 from "./level3/Level3_5";
import Login from "./pages/Login";
import Register from "./pages/Register";


export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="level1" element={<Level1 />} />
        <Route path="level1_2" element={<Level12 />} />
        <Route path="level1_3" element={<Level13 />} />
        <Route path="level1_4" element={<Level14 />} />
        <Route path="level1_5" element={<Level15 />} />
        <Route path="level2" element={<Level2 />} />
        <Route path="level2_2" element={<Level22 />} />
        <Route path="level2_3" element={<Level23 />} />
        <Route path="level2_4" element={<Level24 />} />
        <Route path="level2_5" element={<Level25 />} />
        <Route path="level3" element={<Level3 />} />
        <Route path="level3_2" element={<Level32 />} />
        <Route path="level3_3" element={<Level33 />} />
        <Route path="level3_4" element={<Level34 />} />
        <Route path="level3_5" element={<Level35 />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);