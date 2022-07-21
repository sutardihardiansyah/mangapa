import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom';

const Manga = () => {
    const {page} = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const oldUrl = "http://localhost:5000/manga";
    let url = page ? oldUrl+'/page/' +page : oldUrl;
    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");
    const [mangaList, setMangaList] = useState([]);

    const getData = async (link = url) => {
        const response = await axios.get(link);
        setMangaList(response.data.manga_list)
        setNext(response.data.next);
        setPrev(response.data.prev);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
    }, [page])
    
    const btnNext = (page) => {
        setIsLoading(true);
        navigate(`/manga/page/${page}`)
    }

    const btnPrev = (page) => {
        setIsLoading(true);
        console.log(page);
        let url = page == 1 ? '/' :  `/manga/page/${page}`
        navigate(url)
    }
    
    return (
        <div className="pt-24 pb-7">
            <div className="container px-4 mx-auto">
                
                <div className="grid grid-cols-12 mb-10">

                    <div className="col-span-8">
                        <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 2sm:gap-x-36 gap-y-24 sm:gap-x-52 md:gap-y-44 lg:gap-y-20">
                            {
                                mangaList.map( (manga, i) => (
                                        <>
                                        <div key={i} className="w-[161px] h-[325px] xs:w-[193px] sm:w-[240px] md:w-80 lg:w-60">
                                            <Link to={`/manga/detail/${manga.endpoint}`} className="group relative block" title={manga.title} key={i}>
                                                {/* <a href={`/manga/detail/${manga.endpoint}`}>Detail</a>
                                                <p>{ manga.title }</p> */}
                                                {/* <div style={{backgroundImage: `url(${manga.thumb})`}} className=""></div> */}
                                                <img src={`${manga.thumb}`} alt="" className="w-full rounded-md" />
                                                <div className="absolute bottom-0 w-full h-16 manga-title transition-all duration-500 group-hover:h-24">
                                                    <h4 className="text-white overflow-ellipsis overflow-hidden whitespace-nowrap font-bold">{ manga.title }</h4>
                                                </div>
                                            </Link>

                                            <Link className="text-white block rounded-bl-md rounded-br-md bg-black h-[80px] border-t-2 border-white hover:bg-sky-700" to={`/manga/chapter/${manga.chapter_endpoint}`}>
                                                <div className="flex justify-between text-sm">
                                                    <span className="">#{manga.chapter_number}</span>
                                                    <span className="text-right">{manga.updated_on}</span>

                                                </div>
                                                <p className="text-gray-200 mt-3">{ manga.chapter }</p>
                                            </Link>
                                        </div>
                                        </>
                                       
                                    
                                ))
                            }

                        </div>

                    </div>
                    <div className="col-span-8">
                        
                    </div>
                </div>
                
                <div className="">
                    {
                        prev === "" ?
                        "" :
                        <button onClick={() => btnPrev(`${prev}`)} className="text-white bg-sky-700 px-5 py-2 rounded-md hover:bg-sky-800">Prev</button>
                    }
                    <button onClick={() => btnNext(`${next}`)} className="text-white bg-sky-700 px-5 py-2 rounded-md hover:bg-sky-800">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Manga