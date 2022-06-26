import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';

const url = "http://localhost:5000/manga/detail/";
const DetailManga = () => {
    const {slug} = useParams();
    const [detailManga, setDetailManga] = useState({});
    const [chapters, setChapters] = useState([]);
    // const [synopsis, setSynopsis] = useState("");
    // const [image, setImage] = useState("");
    // const [imageChapter, setImageChapter] = useState("");
    // const [chapters, setChapters] = useState([]);

    
    useEffect(() => {
      const getDetailManga = async () => {
          const response = await axios.get(`${url}${slug}`);
          const title = response.data.title
          const synopsis = response.data.synopsis
          setDetailManga({title, synopsis});
          setChapters(response.data.chapter);
        }
        getDetailManga()
       
    }, [])


  return (
    <div className="container pt-24">
      <div className="flex"> 
        <div className="self-end px-4">
          {/* <img src={image}  /> */}
        </div>
        <div className="w-full px-4">
          {/* <p>{synopsis}</p> */}
        </div>
      </div>

      <h3>Daftar Volume</h3>
      <h3 key={detailManga.title}>{ detailManga.title }</h3>
      <div>
        <ul>
          {
            chapters.map( (chapter, i) => (
                <li key={i}>{ chapter.chapter_title }</li>
            ))
          }
        </ul>
        <h4></h4>
      </div>
    </div>
  )
}

export default DetailManga