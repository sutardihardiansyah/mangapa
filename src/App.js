import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/Home";
import DetailManga from "./DetailManga";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="detail-manga/:id" element={<DetailManga />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
