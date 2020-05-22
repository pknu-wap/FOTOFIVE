import React, { useEffect } from 'react';
import axois from 'axios';

function MainPage() {
    useEffect(() => {
        axois.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])
    return (
        <div>
            MainPage
        </div>
    )
}

export default MainPage
