import React from 'react'
import SearchBar from './SearchBar';
import Results from './Results';

export default function Dashboard() {
    const trigger = document.querySelector('.trigger' + 1) ? console.log(document.querySelector('.trigger' + 1)) : null;
    return (
        <div className="">
            <SearchBar />
            <Results />
        </div>
    )
}
