import React, { useEffect, useState } from 'react';
import './LandingPage.scss'
import '../../views/reset.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchFeature from '../LandingPage/Sections/SearchFeature'

function LandingPage() {
    const [Photo, setPhoto] = useState([])
    const [Skip, setSkip] = useState(0)
    const [SearchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        let body = {
            skip: Skip,
        }
        getPhotos(body)
    }, [])

    const getPhotos = (body) => {
        axios.post('/api/photos/main', body)
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                setPhoto(response.data.photoInfo)
            } else {
                alert("상품들을 가져오는데 실패 했습니다.")
            }
        })
    }

  

    const lenderCards = Photo.map((photo, index) => {

        return <Card className="card" key={index} >
            <NavLink className="imgInner" exact to={`/photo/${photo._id}`}>
                <Card.Img variant="top" className="cardImg" src={`http://localhost:5000/${photo.images[0]}`} />
            </NavLink>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="photoTitle">{photo.title}</ListGroupItem>
                <ListGroupItem className="photoPrice">{`${photo.price}원`}</ListGroupItem>
            </ListGroup>
        </Card>
    })

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
        let body = {
            skip: 0,
            SearchTerm: newSearchTerm            
        }
        setSkip(0)
        setSearchTerm(newSearchTerm)
        getPhotos(body)
    }

    return (
        <div className="inner">
            <div className="landingPage">
                <Header />
                <SearchFeature 
                    refreshFunction={updateSearchTerm}
                />
                <div className="cardContainer">
                    <div className="cardInner">
                        {lenderCards}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage
