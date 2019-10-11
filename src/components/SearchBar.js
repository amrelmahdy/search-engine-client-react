import React from "react";


const SearchBar = ({handleSearch, handleSearchKeyword ,searchQuery}) => {
    return <div className="search-box">
        <input onKeyUp={(e) => handleSearchKeyword(e)} placeholder="Search for products ...."
               className="form-control" type="text" name="search-phrase"/>
        <button className="btn btn-block btn-primary" onClick={() => handleSearch(searchQuery)}>Search &nbsp;<i className="fa fa-search"></i> </button>
    </div>
};

export default SearchBar;