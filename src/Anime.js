import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import anime from './apis/anime'

const Anime = () => {
    const [animeLatest, setAnimeLatest] = useState([])
    const getAnime = async () => {
        const response = await anime.get("/anime");
        console.log(response.data.latest.data)
        setAnimeLatest(response.data.latest.data);
    }
    useEffect( () => {
        getAnime()
    }, [])
    return (
        <div className="pt-24 pb-7">
            <div className="container px-4 mx-auto">
                
                <div className="grid grid-cols-12 mb-10">

                    <div className="col-span-8">
                        <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 2sm:gap-x-36 gap-y-24 sm:gap-x-52 md:gap-y-44 lg:gap-y-20">
                            {
                                animeLatest.map( (anime, i) => (
                                        <>
                                        <div className="w-[161px] h-[325px] xs:w-[193px] sm:w-[240px] md:w-80 lg:w-60">
                                            <Link to={`/anime/detail/${anime.endpoint}`} className="group relative block" title={anime.title} key={i}>
                                                <img src={`${anime.thumb}`} alt="" className="w-full rounded-md" />
                                                <div className="absolute bottom-0 w-full h-16 manga-title transition-all duration-500 group-hover:h-24">
                                                    <h4 className="text-white overflow-ellipsis overflow-hidden whitespace-nowrap font-bold">{ anime.title }</h4>
                                                </div>
                                            </Link>

                                            {/* <Link className="text-white block rounded-bl-md rounded-br-md bg-black h-[80px] border-t-2 border-white hover:bg-sky-700" to={`/manga/chapter/${anime.chapter_endpoint}`}>
                                                <div className="flex justify-between text-sm">
                                                    <span className="">#{anime.chapter_number}</span>
                                                    <span className="text-right">{anime.updated_on}</span>

                                                </div>
                                                <p className="text-gray-200 mt-3">{ anime.chapter }</p>
                                            </Link> */}
                                        </div>
                                        </>
                                       
                                    
                                ))
                            }

                        </div>

                    </div>
                    <div className="col-span-8">
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Anime