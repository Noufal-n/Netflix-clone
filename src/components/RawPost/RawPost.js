import React from 'react'
import { useEffect,useState } from 'react'
import './raw.css'
import axios from '../axios'
import { imageUrl } from '../constent/Constant'
function RawPost(props) {
const [movie, setMovie] = useState([])
    useEffect(() => {
      
    axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovie(response.data.results)
    }).catch(error=>{
        alert('something went wrong')
    })
     
    }, [])
    


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj)=>
            <img className={props.small ?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

                )}
          
            </div>
        </div>
    )
}

export default RawPost