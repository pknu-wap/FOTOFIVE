import React, { useState } from 'react';
import Header from '../Header/Header';
import '../../views/reset.css';
import './PhotoUploadPage.scss';
import Footer from '../Footer/Footer'
import FileUpload from '../../utils/FileUpload'
import axios from 'axios';
import { Form } from 'react-bootstrap'

function PhotoUploadPage(props) {


    const [Title, setTitle] = useState("")
    const [Detail, setDetail] = useState("")
    const [Price, setPrice] = useState(0)

    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const detailChangeHandler = (event) => {
        setDetail(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const submitHandler = (event) => {

        event.preventDefault();
        if (!Title || !Detail || !Images) {
            return alert("입력해라")
        }

        const body = {
            writer: props.user.userData._id,
            title: Title,
            detail: Detail,
            price: Price,
            images: Images,
        }

        console.log(body)

        axios.post("/api/photos/uploadPhotos", body)
            .then(response => {
                console.log("Ss")
                if (response.data.success) {
                    alert('사진 업로드에 성공 하였습니다.')
                    props.history.push('/')

                } else {
                    console.log("ds")
                    alert('사진 업로드에 실패 하였습니다.')
                }
            })
    }
    return (
        <div className="upload">
            <Header />
            <form className="uploadForm" onSubmit={submitHandler}>
                <fieldset className="center-block">
                    <legend>UPLOAD</legend>
                    <FileUpload refreshFunction={updateImages} />
                    <div className="line"></div>
                    <div className="titleAndDetail">
                        <div className="titleInner">
                            <Form.Label className="label">제목</Form.Label>
                            <Form.Control type="text" className="title" onChange={titleChangeHandler} value={Title} />
                        </div>
                        <div className="detailInner">
                            <Form.Label className="label">상세 내용</Form.Label>
                            <Form.Control as="textarea" type="text" className="detailText" onChange={detailChangeHandler} value={Detail} />
                        </div>
                    </div>
                    <Form.Label className="label">가격($)</Form.Label>
                    <Form.Control type="number"
                        className="priceText"
                        onChange={priceChangeHandler}
                        value={Price} />
                    <div className="photoUploadBtn">
                        <button type="submit" onSubmit={submitHandler}>업로드</button>
                    </div>
                </fieldset>
            </form>
            <Footer />
        </div>
    )
}

export default PhotoUploadPage
