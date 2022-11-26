import React, { useEffect } from 'react'

const AudioPlayer = () => {

    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }

    let iframe = '<iframe  id="spotify" src="https://open.spotify.com/embed/playlist/7Bg9W2mPUH4dkwhddHDvFK?utm_source=generator" allowfullscreen="allowfullscreen" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;" width="100%" height="80" frameborder="0"></iframe>';

    function changePlaylist(e) {
        const id = e.currentTarget.id
        console.log(id);
        if (id == "1") {
            document.getElementById("spotify").src = "https://open.spotify.com/embed/playlist/1dp2ehS1LG04Us5laRRIJO?utm_source=generator";
        } else if (id == "2") {
            document.getElementById("spotify").src = "https://open.spotify.com/embed/playlist/30iLm4Sbx2LeZ1IdUKGjGS?utm_source=generator";
        } else {
            document.getElementById("spotify").src = "https://open.spotify.com/embed/album/4y9hzfVTHY7lHGpzqgiI4a?utm_source=generator";
        }
    };

    /*useEffect (() => {
        const audio = document.getElementById("iframe");
        audio.volume = 0.5;
    }, []); */

    return (
        <div className="z-40 flex flex-col ">
            <div className="text-2xl ml-2"> Music</div>
            <div className="m-2"><Iframe iframe={iframe} id="iframe" /></div>
            <div className="text-xl ml-2">Playlists</div>
            <div className="mx-2">
                <p id="1" className="text-sm text-gray-500 mx-3 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Morning beat</p>
                <p id="2" className="text-sm text-gray-500 mx-3 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Afternoon vibes</p>
                <p id="3" className="text-sm text-gray-500 mx-3 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Evening chill</p>
            </div>
        </div>
    )
}

export default AudioPlayer

