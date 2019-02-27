import React from 'react';

import "../css/Albums.css";

import cdImg from '../imgs/cd.png';

const Albums = props => {
    return(
        <div className="albums">
            <img className="albums__img" src={cdImg} alt="CD" />
            <h2 className="albums__head">Discography</h2>
            <table className="albums__table">
                <tbody>
                    {props.albums.map((album, index) => (
                        <tr key={index}>
                            <td>{album.name}</td>
                            <td><i className="fas fa-circle album__circle"></i></td>
                            <td>{album.year}</td>
                            <td><button className="album__btn album__btn-light">LISTEN</button></td>
                            <td><button className="album__btn album__btn-dark">BUY</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Albums;