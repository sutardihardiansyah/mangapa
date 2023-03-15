import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import anime from "./apis/anime";
import Loader from "./components/Loader";

const url = "manga/chapter/";
const Chapter = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);
  const [chapterDetail, setChapterDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getChapters = async () => {
      const response = await anime.get(`${url}${slug}`);

      setChapters(response.data.chapter_image);
      const title = response.data.title;
      const next = response.data.next;
      const prev = response.data.prev;
      const download = response.data.download;
      const chapter_list = response.data.chapter_list;

      setChapterDetail({ title, next, prev, download, chapter_list });
      setIsLoading(false);
    };
    getChapters();
  }, [slug]);

  const btnNext = (slug) => {
    setIsLoading(true);
    navigate(`/manga/chapter/${slug}`);
  };

  const btnPrev = (slug) => {
    setIsLoading(true);
    console.log(slug);
    let url = `/manga/chapter/${slug}`;
    navigate(url);
  };
  return (
    <div className="pt-24 mx-auto max-w-[1170px]">
      {/* <h3 key={detailManga.title}>{ detailManga.title }</h3> */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-white text-center text-2xl">
            {chapterDetail.title}
          </h1>

          <div className="text-center mt-8">
            {chapterDetail.prev && (
              <button
                onClick={() => btnPrev(`${chapterDetail.prev}`)}
                className="text-white bg-[#090955] mr-2 px-8 py-3 hover:bg-sky-800"
              >
                Prev
              </button>
            )}
            <Link
              className="text-white bg-[#090955] mr-2 px-8 py-3 hover:bg-sky-800"
              to={`/manga/detail/${chapterDetail.chapter_list}`}
            >
              List
            </Link>
            <Link
              className="text-white bg-[#090955] mr-2 px-4 py-3 hover:bg-sky-800"
              to={`#`}
            >
              Download
            </Link>
            {chapterDetail.next && (
              <button
                onClick={() => btnNext(`${chapterDetail.next}`)}
                className="text-white bg-[#090955] mr-2 px-8 py-3 hover:bg-sky-800"
              >
                Next
              </button>
            )}
          </div>
          <div className="mx-auto max-w-[768px] pb-12 mt-5">
            {chapters.map((chapter, i) => (
              <img
                className="w-full"
                src={chapter.chapter_image_link}
                key={i}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Chapter;
