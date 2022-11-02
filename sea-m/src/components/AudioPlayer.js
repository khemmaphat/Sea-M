import React, { useState, useRef, useEffect } from 'react'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'

import firstSong from '../song/chill/A-Day-of-Infinite-Bliss.mp3'
import secondSong from '../song/chill/Somebody-else-The1975.mp3'
import thirdSong from '../song/chill/That-First-Step.mp3'

const AudioPlayer = () => {
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    //references
    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes} : ${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if(!prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayer
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    const backTen = () => {
        progressBar.current.value = Number(progressBar.current.value) - 10;
        changeRange();
    }

    const forwardTen = () => {
        progressBar.current.value = Number(progressBar.current.value) + 10;
        changeRange();
    }

    return (
        <div className="flex items-center justify-center">
            <audio ref={audioPlayer} src={firstSong} preload="metadata"></audio>
            <button className="flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" onClick={backTen}><BsArrowLeftShort /> 10</button>
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
            <button className="flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" onClick={forwardTen}>10 <BsArrowRightShort /></button>

            {/* current time */}
            <div>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div>
                <input type="range" className="cursor-pointer" defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            {/* duration time */}
            <div>{calculateTime(duration)}</div>
        </div>
    )
}

export default AudioPlayer

