import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import anime from './apis/anime'

const Anime = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [animeLatest, setAnimeLatest] = useState([])
    const getAnime = async () => {
        const response = await anime.get("/anime");
        console.log(response.data.latest.data)
        setAnimeLatest(response.data.latest.data);
        setIsLoading(false)
    }
    useEffect( () => {
        getAnime()
    }, [])
    return (
        <div className="pt-24 pb-7">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="flex-[0_0_100%] 2lg:flex-[0_0_66.666667%]">
                        <div className="flex flex-wrap">
                            {
                                isLoading ? 
                                <div className="text-4xl text-white">LOADING..........</div>
                                :
                                animeLatest.map( (anime, i) => (
                                    <Link to={`/anime/detail/${anime.endpoint}`} key={i} className="flex-[0_0_100%] 2sm:flex-[0_0_50%] 2lg:flex-[0_0_33.333333%] px-4 mb-4 group">
                                        <div className="h-[325px] rounded-md group-hover:scale-105 transition-all duration-300" style={{ background: `url(${anime.thumb})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}></div>
                                    </Link>
                                ) )
                            }
                            
                        </div>
                    </div>
                    <div className="flex-[0_0_100%] 2lg:flex-[0_0_33.333333%] lg:flex-[0_0_33.333333%] md:flex-[0_0_50%]sm:flex-[0_0_66.666667%]">
                        <div className="bg-red-500 h-44 w-full"></div>
                        <div className="bg-red-500 h-44 w-full"></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Anime