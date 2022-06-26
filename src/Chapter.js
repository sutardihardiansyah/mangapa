import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';

const url = "http://localhost:5000/manga/chapter/";
const Chapter = () => {
    const {slug} = useParams();
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        const getChapters = async () => {
            const response = await axios.get(`${url}${slug}`);
            
            setChapters(response.data.chapter_image);
          }
          getChapters()
         
      }, [])
  
  return (
    <div className="container pt-24">
      {/* <h3 key={detailManga.title}>{ detailManga.title }</h3> */}
      
        {
            chapters.map( (chapter, i) => (
                <img src={chapter.chapter_image_link} key={i} />
            ))
        }
        
    </div>
  )
}

export default Chapter