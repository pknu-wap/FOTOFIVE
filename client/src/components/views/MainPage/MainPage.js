import React, { useEffect } from 'react';
import axois from 'axios';
import './MainPage.scss'
import Header from '../Header/Header'

function MainPage() {
    useEffect(() => {
        axois.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            <Header />
        </div>
    )
}

export default MainPage
