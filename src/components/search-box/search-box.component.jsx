import React from 'react'
import './search-box.styles.css' 

export const SearchBox = ({placeholder,handleChange}) => {
    return (
        <input class='search' type='search' placeholder={placeholder}
        onChange={handleChange} />
        
    )
}
