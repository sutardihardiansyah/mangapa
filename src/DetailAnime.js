import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import animeApi from "./apis/anime";
import Loader from "./components/Loader";

const DetailAnime = () => {
  const { slug } = useParams();
  const [anime, setAnime] = useState({});
  const [detailAnime, setDetailAnime] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [downloads, setDownloads] = useState([]);

  const getAnime = async () => {
    const response = await animeApi.get(`/anime/detail/${slug}`);
    const video = response.data.data.url_video;
    setAnime({ video });

    const title = response.data.data.title;
    console.log(title);
    const second_title = response.data.data.second_title;
    const synopsis = response.data.data.synopsis;
    const thumb = response.data.data.thumb;
    const rating = (response.data.data.rating / 10) * 100;
    const followed = response.data.data.followed;
    const status = response.data.data.status;
    const type = response.data.data.type;
    const studio = response.data.data.studio;
    const released = response.data.data.released;
    const duration = response.data.data.duration;
    const season = response.data.data.season;
    const episode = response.data.data.episode;
    const fansub = response.data.data.fansub;
    setDetailAnime({
      title,
      synopsis,
      thumb,
      second_title,
      rating,
      followed,
      type,
      status,
      studio,
      released,
      duration,
      season,
      episode,
      fansub,
    });
    console.log(response.data.data.url_video);
    setIsLoading(false);
    setDownloads(response.data.data.download);
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div className="pt-24 mx-auto max-w-[1170px]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex">
            <div className="flex-[0_0_100%]">
              <iframe
                allowfullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video player"
                width="640"
                height="360"
                src={anime.video}
              ></iframe>
            </div>
          </div>

          <div className="flex mt-14">
            <div className="px-4">
              <img src={detailAnime.thumb} />
            </div>
            <div className="text-white flex-1 font-mono">
              <div className="flex justify-between">
                <div className="detail-text-title">
                  <h3 className="font-bold text-3xl">{detailAnime.title}</h3>
                  <p className="text-[#b7b7b7] mb-3">
                    {detailAnime.second_title}
                  </p>
                </div>
                <div className="detail-text-rating">
                  <div className="rating-container">
                    <span style={{ width: `${detailAnime.rating}%` }}></span>
                  </div>
                  <p className="text-sm text-[#b7b7b7]">
                    Rating : {detailAnime.rating}
                  </p>
                </div>
              </div>
              <p
                className="text-[#b7b7b7]"
                dangerouslySetInnerHTML={{ __html: detailAnime.synopsis }}
              ></p>
              <div className="flex mt-8">
                <div className="flex-[0_0_50%]">
                  <ul>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Status:
                      </span>
                      {detailAnime.status}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Released:
                      </span>
                      {detailAnime.released}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Season:
                      </span>
                      {detailAnime.season}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Episode:
                      </span>
                      {detailAnime.episode}
                    </li>
                  </ul>
                </div>
                <div className="flex-[0_0_50%]">
                  <ul className="">
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Studio:
                      </span>
                      {detailAnime.studio}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Duration:
                      </span>
                      {detailAnime.duration}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Type:
                      </span>
                      {detailAnime.type}
                    </li>
                    <li className="relative text-[15px] text-[#fff] leading-8 pl-5 before:content-[''] before:absolute before:left-0 before:top-[12px] before:h-[6px] before:w-[6px] before:bg-[#b7b7b7]">
                      <span className="w-[115px] inline-block text-[#b7b7b7]">
                        Fansub:
                      </span>
                      {detailAnime.fansub}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-16 pb-12">
            <div className="flex-[0_0_80%]">
              <div className="w-full h-[457px] bg-[#070720]">
                <div className="text-white border-b px-2 py-2 border-slate-400"></div>
                <div className="h-[357px] overflow-x-auto mt-14 scrollbar px-2">
                  {downloads.map((download, i) => (
                    <div
                      className="text-white block border border-slate-400 mb-2 px-3 py-1 ml-4 rounded-md group"
                      key={i}
                    >
                      <span className="">{download.type}</span>
                      {download.data_links.map((link, i) => (
                        <div>
                          {link.resolusi}
                          {link.data_url.map((url) => (
                            <span className="ml-3">
                              <a href={url.url_download} target="_blank">
                                {url.url_name}
                              </a>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
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

export default DetailAnime;
