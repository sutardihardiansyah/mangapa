import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/Home";
import DetailManga from "./DetailManga";
import NotFound from "./components/NotFound";
import Chapter from "./Chapter";
import ListManga from "./components/ListManga";
import DetailAnime from "./DetailAnime";
import Anime from "./Anime";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="manga/detail/:slug" element={<DetailManga />} />
        <Route path="manga/chapter/:slug" element={<Chapter />} />
        <Route path="/page/:page" element={<Home />} />
        <Route path="/anime/" element={<Anime />} />
        <Route path="/anime/detail/:slug" element={<DetailAnime />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
