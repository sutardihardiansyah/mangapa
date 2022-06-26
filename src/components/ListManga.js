import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const ListManga = () => {
    const [previous, setPrevious] = useState("")
    const [next, setNext] = useState("")
    const {page} = useParams()
    const navigate = useNavigate()
    console.log(page);
    const oldUrl = "";
    let url = page ? oldUrl+'/page/' +page : oldUrl;
    const [mangaList, setMangaList] = useState([]);

    const getData = async () => {
        const response = await axios.get(`http://localhost:5000/manga/page/${page}`);
        setMangaList(response.data.manga_list)
        setPrevious(response.data.previous);
        setNext(response.data.next);
    }

    // const nextPage = (page) => {
    //     navigate(`${page}`)
    // }
    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
    }, [page])
    
    return (
        <div className="pt-24">
            <h1>Manga</h1>
            
            <div>
                {
                    mangaList.map( (manga, i) => (
                        <div key={i}>
                            <a href={`manga/detail/${manga.endpoint}`}>Detail</a>
                            <p>{ manga.title }</p>
                            <img src={`${manga.thumb}`} alt="" width="100" height="50" ></img>
                            <Link to={`manga/chapter/${manga.chapter_endpoint}`}>
                                { manga.chapter }
                            </Link>
                        </div>
                    ))
                }
            </div>
           <Link to={`../page/${next}`} className="bg-blue-600 text-white px-4 py-1 rounded-sm shadow-lg">Next</Link>
            
        </div>
    )
}

export default ListManga