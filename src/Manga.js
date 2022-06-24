import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Manga = () => {
    const [next, setNext] = useState("");
    const [last, setLast] = useState("");
    const [first, setFirst] = useState("");
    const [mangas, setMangas] = useState([]);
    const [mangaList, setMangaList] = useState([]);
    useEffect(() => {
        const getData = async (link = "https://guarded-mountain-68231.herokuapp.com/manga") => {
        const response = await axios.get(link);
            console.log(response.data)
            setMangaList(response.data.manga_list)
        }
        getData()
        getPhotos()
        getManga()
        
    }, [])
    

    const getManga = async (link = "https://kitsu.io/api/edge/manga") => {
        const response = await axios.get(link);
        setFirst(response.data.links.first);
        setNext(response.data.links.next);
        setLast(response.data.links.last);
        setMangas(response.data.data);
    }
    const getPhotos =  async () => {
        const response = await axios.get("https://api.unsplash.com/photos/?client_id=ZY-4Gkq1JSQyp-UPJtTv30dqL1MASC1qFvJKA75kAmc");
    }

    const firstPage =  async (link) => {
        getManga(link)
    }
    const nextPage =  async (link) => {
        getManga(link)
    }
    const lastPage =  async (link) => {
        getManga(link)
    }
  return (
    <div className="pt-24">
        <h1>Manga</h1>
        
        <div className="grid grid-cols-5 gap-2">
            { mangas.map( (manga, i) => (
                <Link to={`/detail-manga/${manga.id}`} key={i}>
                    <div className="bg-blue-300">
                        <img src={manga.attributes.posterImage.medium} alt="Thumb Img" />
                        <h6>{ manga.attributes.canonicalTitle }</h6>
                    </div>
                </Link>
            ) ) }
        </div>
        <button onClick={ () => firstPage(first)} className="bg-blue-600 px-4 py-1 mb-10 mt-5 text-white shadow rounded-sm mr-2">First</button>
        <button onClick={ () => nextPage(next)} className="bg-blue-600 px-4 py-1 mb-10 mt-5 text-white shadow rounded-sm mr-2">Next</button>
        <button onClick={ () => lastPage(last)} className="bg-blue-600 px-4 py-1 mb-10 mt-5 text-white shadow rounded-sm">Last</button>
    </div>
  )
}

export default Manga