import React from 'react'

export default function SingleResult({ movie, trigger }) {
    return (
        <div className={"col s12 m4 l3 movie " + trigger}>
            <div className="card">
                <div className="card-image">
                    <img src={movie.Poster} alt="" />
                </div>
                <div className="cart-content center">
                    <h4 className="card-title ">{movie.Title}</h4>
                </div>

            </div>

        </div>
    )
}
