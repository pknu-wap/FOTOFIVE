import React, { useState } from 'react'
import { Form, } from 'react-bootstrap';
import './SearchFeature.scss'
import searchIcon from './search_icon.png'

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <div className="searchFeature">
            <div className="searchInner">
                <h1>FOTOFIVE</h1>
                <Form.Control className="searchBox" onChange={searchHandler} value={SearchTerm} placeholder="검색하기..."/>
                <img src={searchIcon} className="searchIcon"/>
            </div>
            
        </div>

    )
}

export default SearchFeature
