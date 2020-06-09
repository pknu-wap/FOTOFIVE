import React, { useEffect } from 'react';
import './RandingPage.scss'
import '../../views/reset.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios';

function RandingPage() {
    useEffect(() => {
        axios.post('/api/product/products')
            .then(response => {
                if(response.data.success){

                }else {

                }
            })
     
    }, [])



    return (
        <div className="landingPage">
            <Header />
            <Footer />
        </div>
    )
}

export default RandingPage
