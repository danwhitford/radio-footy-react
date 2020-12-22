import React from 'react'
import './filterSection.css'

const FilterSection = ({ competitions, stations, teams }) => {
    return (
        <div className='filter-section'>
            <h1>Choose competitions</h1>
            <div className='chips'>
                {competitions.map(comp => <span className='chip'>{comp}</span>)}
            </div>
            <h1>Choose stations</h1>
            <div className='chips'>
                {stations.map(station => <span className='chip'>{station}</span>)}
            </div>
            <h1>Choose teams</h1>
            <div className='chips'>
                {teams.map(team => <span className='chip'>{team}</span>)}
            </div>
        </div>
    )
}

export default FilterSection
