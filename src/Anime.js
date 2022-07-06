import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import anime from './apis/anime'

const Anime = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [animeLatest, setAnimeLatest] = useState([])
    const [animePopular, setAnimePopular] = useState([])
    const getAnime = async () => {
        const response = await anime.get("/anime");
        console.log(response.data.latest.data)
        setAnimeLatest(response.data.latest.data);
        setAnimePopular(response.data.popular.data);
        setIsLoading(false)
    }
    useEffect( () => {
        getAnime()
    }, [])
    return (
        <div className="pt-24 pb-7">
            <div className="sm:container px-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="flex-[0_0_100%] 2lg:flex-[0_0_66.666667%]">
                        <div className="flex flex-wrap">
                            {
                                isLoading ? 
                                <div className="text-4xl text-white">LOADING..........</div>
                                :
                                animeLatest.map( (anime, i) => (
                                    <div className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4">
                                        <Link to={`/anime/detail/${anime.endpoint}`} key={i} className="group">
                                            <div className="anime-thumb h-[325px] rounded-md bg-no-repeat bg-cover bg-top transition-all duration-300" style={{ backgroundImage: `url(${anime.thumb})`}}></div>
                                        </Link>
                                        
                                        <div className="pt-5">
                                            <ul>
                                                {   anime.genres.map( (genre, i) => (
                                                    <li className="inline-block text-white text-[10px] bg-white bg-opacity-20 py-1 px-3 rounded-xl mt-1 ml-1 font-bold">
                                                        <Link to={`/anime/genre/${genre.url}`}>{ genre.title }</Link>
                                                    </li>
                                                    ))
                                                }
                                                
                                            </ul>
                                        </div>
                                        
                                        <h5 className="text-white mt-3">{ anime.title }</h5>
                                    </div>
                                ) )
                            }
                            
                        </div>
                    </div>
                    <div className="flex-[0_0_100%] 2lg:flex-[0_0_33.333333%] -mt-5">
                        {
                            isLoading ?
                            <div className="text-4xl text-white">LOADING..........</div>
                            :
                            animePopular.map( (anime, i) => {
                                return i % 2 === 0 ? (
                                <Link to={`/anime/detail/${anime.endpoint}`} key={i} className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4 overflow-hidden transition-all duration-500 group">
                                    
                                        <div className={`h-[200px] flex rounded-md bg-no-repeat bg-cover bg-top justify-center items-end group-hover:scale-75 group-hover:-rotate-12 transition-all duration-500`} style={{ backgroundImage: `url(${anime.thumb})`}}>
                                        :
                                    
                                        <h5 className="text-white text-2xl font-semibold p-4">{ anime.title }</h5>
                                    </div>
                                </Link>
                                ) : (
                                    <Link to={`/anime/detail/${anime.endpoint}`} key={i} className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4 overflow-hidden transition-all duration-500 group">
                                    i % 2 == 0 ?
                                        <div className={`h-[200px] flex rounded-md bg-no-repeat bg-cover bg-top justify-center items-end group-hover:scale-75 group-hover:rotate-12 transition-all duration-500`} style={{ backgroundImage: `url(${anime.thumb})`}}>
                                        :
                                    
                                        <h5 className="text-white text-2xl font-semibold p-4">{ anime.title }</h5>
                                    </div>
                                </Link>
                                )
                            }   )
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Anime