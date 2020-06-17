import React, { useState } from 'react';
import Header from '../Header/Header';
import '../../views/reset.css';
import './PhotoUploadPage.scss';
import Footer from '../Footer/Footer'
import FileUpload from '../../utils/FileUpload'
import axios from 'axios';


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
                    <legend>Upload</legend>
                    <FileUpload refreshFunction={updateImages} />
                    <div className="line"></div>
                    <div className="titleAndDetail">
                        <div className="titleInner">
                            <input type="text" className="title" onChange={titleChangeHandler} value={Title} placeholder="제목" />
                        </div>
                        <div className="detailInner">
                            <textarea type="text" className="detailText" placeholder="상세내용" onChange={detailChangeHandler} value={Detail} />
                        </div>
                    </div>
                    <label>Price(\)</label>
                    <input type="number"
                        className="priceText"
                        placeholder="가격 (\)"
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
