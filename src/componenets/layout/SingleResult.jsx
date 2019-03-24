import React from 'react'

export default function SingleResult({ movie }) {
    return (
        <div className="col s12 m4 l3 movie">
            <div className="card">
                <div className="card-image">
                    <img src={movie.Poster} alt="" />
                </div>
                <div className="cart-content">
                    <span className="card-title">{movie.Title}</span>
                </div>

            </div>

        </div>
    )
}
