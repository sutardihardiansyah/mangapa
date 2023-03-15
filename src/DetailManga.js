import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./components/Loader";
import anime from "./apis/anime";
const url = "manga/detail/";

const DetailManga = () => {
  const { slug } = useParams();
  const [detailManga, setDetailManga] = useState({});
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [synopsis, setSynopsis] = useState("");
  // const [image, setImage] = useState("");
  // const [imageChapter, setImageChapter] = useState("");
  // const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const getDetailManga = async () => {
      const response = await anime.get(`${url}${slug}`);
      const title = response.data.title;
      const second_title = response.data.second_title;
      const synopsis = response.data.synopsis.replace('"', "");
      const thumb = response.data.thumb;
      const rating = (response.data.rating / 10) * 100;
      const followed = response.data.followed;
      const status = response.data.status;
      const type = response.data.type;
      const updated_on = response.data.updated_on;
      const author = response.data.author;
      const released = response.data.released;
      const posted_on = response.data.posted_on;
      setDetailManga({
        title,
        synopsis,
        thumb,
        second_title,
        rating,
        followed,
        type,
        status,
        updated_on,
        author,
        released,
        posted_on,
      });
      setChapters(response.data.chapter);
      setIsLoading(false);
    };
    getDetailManga();
  }, [slug]);

  return (
    <div className="pt-24 mx-auto max-w-[1170px]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex">
            <div className="px-4">
              <img alt="" src={detailManga.thumb} />
            </div>
            <div className="text-white flex-1 font-mono">
              <div className="flex justify-between">
                <div className="detail-text-title">
                  <h3 className="font-bold text-3xl">{detailManga.title}</h3>
                  <p className="text-[#b7b7b7] mb-3">
                    {detailManga.second_title}
                  </p>
                </div>
                <div className="detail-text-rating">
                  <div className="rating-container">
                    <span style={{ width: `${detailManga.rating}%` }}></span>
                  </div>
                  <p className="text-sm text-[#b7b7b7]">
                    {detailManga.followed} Followed
                  </p>
                </div>
              </div>
              <p
                className="text-[#b7b7b7]"
                dangerouslySetInnerHTML={{ __html: detailManga.synopsis }}
              ></p>
              <div className="flex mt-8">
                <div className="flex-[0_0_50%]">
                  <ul>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Type:
                      </span>
                      {detailManga.type}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Status:
                      </span>
                      {detailManga.status}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Update On:
                      </span>
                      {detailManga.updated_on}
                    </li>
                  </ul>
                </div>
                <div className="flex-[0_0_50%]">
                  <ul className="">
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Author:
                      </span>
                      {detailManga.author}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Released:
                      </span>
                      {detailManga.released}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Posted On:
                      </span>
                      {detailManga.posted_on}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-16">
            <div className="flex-[0_0_70%]">
              <div className="w-full h-[457px] bg-[#070720]">
                <div className="text-white border-b px-2 py-2 border-slate-400">
                  Chapter {detailManga.title}
                </div>
                <div className="h-[357px] overflow-x-auto mt-14 scrollbar px-2">
                  {chapters.map((chapter, i) => (
                    <Link
                      to={`/manga/chapter/${chapter.chapter_endpoint}`}
                      className="text-white block border border-slate-400 mb-2 px-3 py-1 ml-4 rounded-md group hover:bg-slate-900"
                      key={i}
                    >
                      <span className="group-hover:text-blue-700">
                        {chapter.chapter_title}
                      </span>
                      <div className="text-[12px] text-[#b7b7b7]">
                        {chapter.chapter_date}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailManga;
