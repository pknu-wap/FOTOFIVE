import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import photoImg from './photoImg.png';
import axios from 'axios';
import './FileUpload.scss'

function FileUpload(props) {

    const [Images, setImages] = useState([])

    const dropHandler = (files) => {

        let formData = new FormData();

        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }

        formData.append("file", files[0])
        axios.post('/api/photos/uploadfiles', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImages([...Images, response.data.filePath])
                    alert("파일 저장 성공")
                    props.refreshFunction([...Images, response.data.filePath])
                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }

    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        props.refreshFunction(newImages)

    }

    return (
        <div>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img className="photoImg" src={photoImg}></img>
                        </div>
                    </section>
                )}
            </Dropzone>

            <div>
                {Images.map((image, index) => (
                    <div onclick={() => deleteHandler(image)} key={index}>
                        <img src={`http://localhost:5000/${image}`} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default FileUpload
