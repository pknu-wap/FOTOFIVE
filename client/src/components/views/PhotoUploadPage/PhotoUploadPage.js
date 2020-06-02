import React, { useState } from 'react'
import Header from '../Header/Header'
import photoImg from './photoImg.png'
import '../../views/reset.css';
import '../PhotoUploadPage/PhotoUploadPage.scss'

function PhotoUploadPage() {
    const [imgBase64, setImgBase64] = useState("");
    const [imgFile, setImgFile] = useState(null);

    const handleChangeFile = (event) => {
        let reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result;
            if(base64) {
                setImgBase64(base64.toString());
            }
        }
        if(event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);

            setImgFile(event.target.files[0]);
        }
    }
    return (
        <div>
            <Header />
            <form>
                <fieldset>
                    <legend>Upload</legend>
                    <div style={{"backgroundColor": "#efefef", "width":"150px", "height" : "150px"}}></div>
                    <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile}/>
                </fieldset>
            </form>
        </div>
    )
}

export default PhotoUploadPage
