import React from 'react'
import { useEffect, useState } from 'react'
import './raw.css'
import axios from '../axios'
import { imageUrl, API_KEY } from '../constent/Constant'
import Youtube from 'react-youtube'

function RawPost(props) {
    const [movie, setMovie] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {

        axios.get(props.url).then((response) => {
            //console.log(response.data)
            setMovie(response.data.results)
        }).catch(error => {
            alert('something went wrong')
        })

    }, [])


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            if (response.data.results.length!==0) {
                console.log(response.data.results[0])
                seturlId(response.data.results[0].key)
            } else {
                alert('Could notfind ')
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.small ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />

                )}

            </div>


            {urlId && <Youtube opts={opts} videoId={urlId} />}

        </div>
    )
}

export default RawPost