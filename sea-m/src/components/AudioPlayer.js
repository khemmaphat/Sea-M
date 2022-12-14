import React from 'react'


/* 
* The function is used to display a Playlist.
* It is used for selecting songs and playing songs according to the set playlist.
*/
const AudioPlayer = () => {

    // iframe for audio player
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
    
    // declare iframe variable 
    let iframe = '<iframe  id="spotify" src="https://open.spotify.com/embed/playlist/7Bg9W2mPUH4dkwhddHDvFK?utm_source=generator" allowfullscreen="allowfullscreen" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;" width="100%" height="80" frameborder="0"></iframe>';
    
    // function to change playlist
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

    return (
        <div className="z-40 flex flex-col ">
            <div tabIndex="5" className="text-2xl ml-2" id="ms1">Audio Player</div>
            <div tabIndex="5" className="m-2" id="ms2"><Iframe iframe={iframe} id="iframe"/>Please Press TAB ENTER to play and press it again to pause</div>
            <div tabIndex="0" className="text-xl ml-2" id="ms3">Playlists</div>
            <div className="mx-2">
                <button id="1" tabIndex="0" aria-label="Morning beat" className="text-sm text-gray-500 mx-3 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Morning beat</button><br></br>
                <button id="2" tabIndex="0" aria-label="Afternoon vibes" className="text-sm text-gray-500 mx-3 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Afternoon vibes</button><br></br>
                <button id="3" tabIndex="0" aria-label="Evening chill" className="text-sm text-gray-500 mx-3 hover:cursor-pointer" onClick={(e) => changePlaylist(e)}>Evening chill</button>
            </div>
        </div>
    )
}

export default AudioPlayer

