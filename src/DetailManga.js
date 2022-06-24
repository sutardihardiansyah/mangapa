import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';

const DetailManga = () => {
    const {id} = useParams();
    // const [detailManga, setDetailManga] = useState([]);
    const [synopsis, setSynopsis] = useState("");
    const [image, setImage] = useState("");
    const [imageChapter, setImageChapter] = useState("");
    const [chapters, setChapters] = useState([]);

    
    useEffect(() => {
      const getDetailManga = async (link = `https://kitsu.io/api/edge/manga/${id}`) => {
          const response = await axios.get(link);
          setSynopsis(response.data.data.attributes.synopsis)
          setImage(response.data.data.attributes.posterImage.medium)
          setImageChapter(response.data.data.attributes.coverImage.tiny)
          // setDetailManga(response.data.data);
      }

      const getChapters = async () => {
          const response = await axios.get(`https://kitsu.io/api/edge/manga/${id}/chapters`);
          setChapters(response.data.data);
          console.log(response.data.data);
      }

      getDetailManga()
      getChapters()
    }, [])


  return (
    <div className="container pt-24">
      <div className="flex"> 
        <div className="self-end px-4">
          <img src={image}  />
        </div>
        <div className="w-full px-4">
          <p>{synopsis}</p>
        </div>
      </div>

      <h3>Daftar Volume</h3>
      <div>
        {
          chapters.map( (chapter, i) => (
            <div key={i}>
              <img src={ imageChapter }/>
              <h4>{ chapter.attributes.canonicalTitle }</h4>
              <p>{ chapter.attributes.number }</p>
              <p>{ chapter.attributes.volumeNumber }</p>
            </div>
          ))
        }
        <h4></h4>
      </div>
    </div>
  )
}

export default DetailManga