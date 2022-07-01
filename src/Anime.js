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
                                    <Link to={`/anime/detail/${anime.endpoint}`} key={i} className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4 group">
                                        <div className="anime-thumb h-[325px] rounded-md bg-no-repeat bg-cover bg-top transition-all duration-300" style={{ backgroundImage: `url(${anime.thumb})`}}></div>
                                    </Link>
                                ) )
                            }
                            
                        </div>
                    </div>
                    <div className="flex-[0_0_100%] 2lg:flex-[0_0_33.333333%] -mt-5">
                        {
                            isLoading ?
                            <div className="text-4xl text-white">LOADING..........</div>
                            :
                            animePopular.map( (anime, i) => (
                                <Link to={`/anime/detail/${anime.endpoint}`} key={i} className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4 group">
                                    <div className="h-[200px] flex rounded-md bg-no-repeat bg-cover bg-top transition-all duration-300 justify-center items-end" style={{ backgroundImage: `url(${anime.thumb})`}}>
                                        <h5 className="text-white text-2xl font-semibold p-4">{ anime.title }</h5>
                                    </div>
                                </Link>
                            ) )
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Anime