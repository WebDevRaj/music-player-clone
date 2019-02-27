import React, { Component } from 'react';
import Header from './Header';
import Albums from './Albums';
import Playlist from './Playlist';

class Main extends Component {
    state = {
        albums: [
            {
                name: "Surprise Without Flaws",
                year: "2015",
            },
            {
                name: "Mists Of A Shadow",
                year: "2014",
            },
            {
                name: "Heroes Of The Sun",
                year: "2013",
            },
            {
                name: "Picture Of The Past",
                year: "2012",
            },
        ],
        selectedAlbum: {
            name: "Surprise Without Flaws",
            year: "2015",
        }
    }
    render() {
        return(
            <div style={{
                height: "100%"
            }}>
                <Header />
                <div className="main__lower">
                    <Albums albums={this.state.albums}/>
                    <Playlist selectedAlbum={this.state.selectedAlbum}/>
                </div>
            </div>
        )
    }
}

export default Main;