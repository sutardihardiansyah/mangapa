import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import animeApi from './apis/anime'


const DetailAnime = () => {
    const {slug} = useParams();
    const [anime, setAnime] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getAnime = async () => {
        const response = await animeApi.get(`/anime/detail/${ slug }`);
        const video = response.data.data.url_video
        setAnime({video})
        console.log(response.data.data.url_video)
        setIsLoading(false)
    }

    useEffect( () => {
        getAnime()
    }, []);

    return (
            <div className="pt-24">
            {
                isLoading ? 
                <div className="text-4xl text-white">LOADING..........</div>
                : <iframe  allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="1280" height="758" src={anime.video}></iframe>
            }
        </div>
        
    )
}

export default DetailAnime