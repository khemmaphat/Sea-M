import React, { useState } from 'react'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="flex items-center justify-center">
            <audio src="chill/song/A-Day-of-Infinite-Bliss.mp3" preload="metadata"></audio>
            <button className="flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"><BsArrowLeftShort /> 10</button>
            <button className="flex 
                transition 
                ease-in-out 
                hover:-translate-y-1 
                hover:scale-110 
                duration-300 
                items-center 
                justify-center" onClick={togglePlayPause}>
                { isPlaying ? <FaPause /> : <FaPlay className="relative "/>}
            </button>
            <button className="flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">10 <BsArrowRightShort /></button>

            {/* current time */}
            <div>0:00</div>

            {/* progress bar */}
            <div>
                <input className="bg-red-100" type="range" />
            </div>

            {/* duration time */}
            <div>2:49</div>
        </div>
    )
}

export default AudioPlayer

