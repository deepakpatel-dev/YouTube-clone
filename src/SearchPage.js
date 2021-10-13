import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FLITER</h2>
            </div>
            <hr />
        </div>
        
    )
}

export default SearchPage
