import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom';

const Manga = () => {
    const {page} = useParams()
    console.log(page);
    const oldUrl = "http://localhost:3000/manga";
    let url = page ? oldUrl+'/page/' +page : oldUrl;
    const [next, setNext] = useState("");
    const [mangaList, setMangaList] = useState([]);

    const getData = async (link = url) => {
        const response = await axios.get(link);
        setMangaList(response.data.manga_list)
        setNext(response.data.next);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getData()
    }, [page])
    
    return (
        <div className="pt-24">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-12">

                    <div className="col-span-8">
                        <div className="grid grid-cols-4">
                            {
                                mangaList.map( (manga, i) => (
                                    <a href="#" className="h-[330px] w-[180px] group relative" key={i}>
                                        {/* <a href={`/manga/detail/${manga.endpoint}`}>Detail</a>
                                        <p>{ manga.title }</p> */}
                                        <img src={`${manga.thumb}`} alt="" className="w-full" />
                                        <div className="absolute bottom-16 inset-x-0 bg-black opacity-80 shadow-xl w-full">
                                            <h5 className="text-white transition-all duration-500 group-hover:-translate-y-5">{ manga.title }</h5>
                                        </div>
                                        <Link className="text-white" to={`/manga/chapter/${manga.chapter_endpoint}`}>
                                            { manga.chapter }
                                        </Link>
                                    </a>
                                ))
                            }

                        </div>

                    </div>
                </div>
                <Link to={`/page/${next}`} className="bg-blue-600 text-white px-4 py-1 rounded-sm shadow-lg">Next</Link>
            </div>
        </div>
    )
}

export default Manga