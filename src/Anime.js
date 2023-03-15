import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import anime from "./apis/anime";

const Anime = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const oldUrl = "/anime/";
  let url = page ? oldUrl + "/page/" + page : oldUrl;

  const [isLoading, setIsLoading] = useState(true);
  const [animeLatest, setAnimeLatest] = useState([]);
  const [animePopular, setAnimePopular] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const getAnime = async (link = url) => {
    const response = await anime.get(link);
    setAnimeLatest(response.data.latest.data);
    setAnimePopular(response.data.popular.data);
    setNext(response.data.latest.next);
    setPrev(response.data.latest.prev);
    setIsLoading(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getAnime();
  }, [page]);

  const btnNext = (page) => {
    setIsLoading(true);
    navigate(`/anime/page/${page}`);
  };

  const btnPrev = (page) => {
    setIsLoading(true);
    console.log(page);
    let url = page === 1 ? "/anime" : `/anime/page/${page}`;
    navigate(url);
  };

  return (
    <div className="pt-24 pb-7">
      <div className="sm:container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex-[0_0_100%] 2lg:flex-[0_0_66.666667%]">
            <div className="flex flex-wrap">
              {isLoading ? (
                <div className="text-4xl text-white">LOADING..........</div>
              ) : (
                animeLatest.map((anime, i) => (
                  <div
                    className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4"
                    key={i}
                  >
                    <Link
                      to={`/anime/detail/${anime.endpoint}`}
                      key={i}
                      className="group"
                    >
                      <div
                        className="anime-thumb h-[325px] rounded-md bg-no-repeat bg-cover bg-top transition-all duration-300"
                        style={{ backgroundImage: `url(${anime.thumb})` }}
                      ></div>
                    </Link>

                    <div className="pt-5">
                      <ul>
                        {anime.genres.map((genre, i) => (
                          <li className="inline-block text-white text-[10px] bg-white bg-opacity-20 py-1 px-3 rounded-xl mt-1 ml-1 font-bold">
                            <Link to={`/anime/genre/${genre.url}`}>
                              {genre.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h5 className="text-white mt-3">{anime.title}</h5>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex-[0_0_100%] 2lg:flex-[0_0_33.333333%] -mt-5">
            {isLoading ? (
              <div className="text-4xl text-white">LOADING..........</div>
            ) : (
              animePopular.map((anime, i) => {
                return i % 2 === 0 ? (
                  <Link
                    to={`/anime/detail/${anime.endpoint}`}
                    key={i}
                    className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4 overflow-hidden transition-all duration-500 group"
                  >
                    <div
                      className={`h-[200px] flex rounded-md bg-no-repeat bg-cover bg-top justify-center items-end group-hover:scale-75 group-hover:-rotate-12 transition-all duration-500`}
                      style={{ backgroundImage: `url(${anime.thumb})` }}
                    >
                      :
                      <h5 className="text-white text-2xl font-semibold p-4">
                        {anime.title}
                      </h5>
                    </div>
                  </Link>
                ) : (
                  <Link
                    to={`/anime/detail/${anime.endpoint}`}
                    key={i}
                    className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4 overflow-hidden transition-all duration-500 group"
                  >
                    i % 2 == 0 ?
                    <div
                      className={`h-[200px] flex rounded-md bg-no-repeat bg-cover bg-top justify-center items-end group-hover:scale-75 group-hover:rotate-12 transition-all duration-500`}
                      style={{ backgroundImage: `url(${anime.thumb})` }}
                    >
                      :
                      <h5 className="text-white text-2xl font-semibold p-4">
                        {anime.title}
                      </h5>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
        {isLoading ? (
          ""
        ) : (
          <div>
            {prev === "" ? (
              ""
            ) : (
              <button
                onClick={() => btnPrev(`${prev}`)}
                className="text-white bg-sky-700 px-5 py-2 rounded-md mr-2 hover:bg-sky-800"
              >
                Prev
              </button>
            )}
            <button
              onClick={() => btnNext(`${next}`)}
              to={`/anime/page/${next}`}
              className="text-white bg-sky-700 px-5 py-2 rounded-md hover:bg-sky-800"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Anime;
