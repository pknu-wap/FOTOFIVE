import React, { useState } from 'react';
import Header from '../Header/Header';
import '../../views/reset.css';
import './PhotoUploadPage.scss';
import Footer from '../Footer/Footer'
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

function PhotoUploadPage(props) {

    const [Title, setTitle] = useState("")
    const [Detail, setDetail] = useState("")
    const [Price, setPrice] = useState(null)

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
        if(!Title || !Detail || !Price|| !Images){
            return alert("모든 값을 넣어주셔야 합니다.")
        }

        const body = {
            writer: props.user.userData._id,
            title: Title,
            detail: Detail,
            price: Price,
            images: Images,
        }

        Axios.post("api/product", body)
            .then(response => {
                if(response.data.success) {
                    alert('사진 업로드에 성궁 하였습니다.')
                    props.history.push('/')
                }else {
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
                            <textarea type="text" className="detailText" placeholder="상세내용" onChange={detailChangeHandler} value={Detail}/>
                        </div>
                    </div>
                    <input type="number" className="priceText" placeholder="가격 (\)" onchange={priceChangeHandler} value={Price}/>
                    
                    <div className="photoUploadBtn">
                        <button type="submit">업로드</button>
                    </div>
                </fieldset>
            </form>
            <Footer />
        </div>
    )
}

export default PhotoUploadPage
