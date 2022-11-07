import React from 'react'

const AudioPlayer = () => {

    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }

    let iframe = '<iframe data-v-4061fa9a="" id="spotify" src="https://open.spotify.com/embed/playlist/7Bg9W2mPUH4dkwhddHDvFK?utm_source=generator" allowfullscreen="allowfullscreen" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;" width="100%" height="80" frameborder="0"></iframe>';

    function changePlaylist(e) {
        const id = e.currentTarget.id
        console.log(id);
        if (id == "1") {
            document.getElementById("spotify").src = "https://open.spotify.com/embed/playlist/2DQu4yw3Bx58eNEZYIevDl?utm_source=generator";
        } else if (id == "2") {
            document.getElementById("spotify").src = "https://open.spotify.com/embed/playlist/4tJ5q6xFg4dACbauIkjTCJ?utm_source=generator";
        } else {
            document.getElementById("spotify").src = "https://open.spotify.com/embed/playlist/7Bg9W2mPUH4dkwhddHDvFK?utm_source=generator";
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Iframe iframe={iframe} />
            <p id="1" data-v-4061fa9a="" className="text-sm mx-3 text-gray-500 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Chill beat</p>
            <p id="2" data-v-4061fa9a="" className="text-sm mx-3 text-gray-500 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Dim light with lonely vibe</p>
            <p id="3" data-v-4061fa9a="" className="text-sm mx-3 text-gray-500 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Sentimental R&amp;B/hiphop</p>
        </div>
    )
}

export default AudioPlayer

