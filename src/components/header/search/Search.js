import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
    const history = useHistory();
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e)  => {
        e.preventDefault();
        history.push({
            path: '/products',
            search: '?name=' + keyword,
        });
    }

    return (
        <form className="form-inline" onSubmit={handleSearch}>
            <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search your product..." aria-label="Search" onChange={(e) => setKeyword(e.target.value)}/>
        </form>
    )
};

export default Search;
