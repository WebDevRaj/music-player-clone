import React, { Component } from 'react';

import "../css/Playlist.css";

class Playlist extends Component {
    state = {
        songs: [
            {
                name: "01. Clouds In The Forest",
                duration: "3:20"
            },
            {
                name: "02. Rat In The River",
                duration: "2.48"
            },
            {
                name: "03. Giants And Companions",
                duration: "2:27"
            },
            {
                name: "04. Ashamed Of Light",
                duration: "3:32"
            },
            {
                name: "05. Doubting The Forest",
                duration: "2:40"
            },
            {
                name: "06. Criminals Of The Lake",
                duration: "2:55"
            },
            {
                name: "07. Curse Of Eternity",
                duration: "1:33"
            },
            {
                name: "08. Fog In My Town",
                duration: "1:33"
            },
            {
                name: "09. Serpent In The Mountains",
                duration: "3:24"
            },
        ],
        currentSong: {
            name: "01. Clouds In The Forest",
            duration: "3:20"
        },
    }

    changeCurrentSong = (currentSong) => {
        this.setState({
            currentSong
        })
    }

    render() {
        return(
            <div className="playlist">
                <h2 className="playlist__head">Now playing</h2>
                <div className="playlist__selected-album">{this.props.selectedAlbum.name}</div>
                <div className="playlist__now-playing">{this.state.currentSong.name}</div>
                <div className="playlist__controls">
                    <i className="fas fa-backward"></i>
                    <i className="fas fa-pause"></i>
                    <i className="fas fa-forward"></i>
                </div>
                <div className="playlist__seek">
                    <span className="playlist__seek-left"></span>
                    <i className="fas fa-circle playlist__seek-circle"></i>
                    <span className="playlist__seek-right"></span>
                </div>
                <div className="playlist__selected-album">{this.props.selectedAlbum.name}</div>
                <table className="playlist__table">
                    <tbody>
                        {this.state.songs.map((song, index) => (
                            <tr className="playlist__song-link" onClick={() => this.changeCurrentSong(song)} key={index}>
                                <td><i className={`fas fa-play playlist__play-btn ${this.state.currentSong.name === song.name && "playlist__play-btn--active"}`}></i></td>
                                <td>{song.name}</td>
                                <td>......................</td>
                                <td>{song.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Playlist;