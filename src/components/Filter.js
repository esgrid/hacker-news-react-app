import React from "react";

const Filter = ({onChangeInput}) => {

    const handleInputChange = (event) => {
        onChangeInput(event.target.value);
        console.log(event.target.value)
    }
    return(
        <>
            <label htmlFor="search-input">Search by title:</label>
            <input type="search" id="search-input" onChange={handleInputChange}/>
        </>
    );
}

export default Filter;