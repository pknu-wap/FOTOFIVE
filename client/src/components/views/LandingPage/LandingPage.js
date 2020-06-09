import React, { useEffect } from 'react';
import './LandingPage.scss'
import '../../views/reset.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios';

function LandingPage() {
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

export default LandingPage
